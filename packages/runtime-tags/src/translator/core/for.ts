import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertForParams,
  assertForType,
  assertNoSpreadAttrs,
  getForAttrs,
} from "../util/assert";
import { type Binding, BindingType, getPropertyAlias } from "../util/bindings";
import {
  type ForType,
  forTypeToBranchRuntime,
  forTypeToRuntime,
  forTypeToUnkeyedBranchRuntime,
  getBaseArgsInForTag,
  getBranchResumeArgs,
  getForType,
  initBranchSection,
  isSingleNodeBranch,
  resumeOwnerByMarkerWhenUnconditional,
} from "../util/branch-tag";
import { detectForSelector, getForSelectorKey } from "../util/for-selector";
import { getAccessorProp } from "../util/get-accessor-enums";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { isPatch } from "../util/marko-config";
import { fromIter } from "../util/optional";
import { getWriteSources, onReasonsSettled } from "../util/patch/decisions";
import {
  patchesBranchesAt,
  recordStructuralParams,
} from "../util/patch/structure";
import { getExprRootGroupArgs } from "../util/patch/writers";
import { addReasonExprs, getSourcesForExpr } from "../util/reasons";
import {
  dropNodes,
  getAllTagReferenceNodes,
  onFinalizeReferences,
  setDerivedFrom,
  trackParamsReferences,
  mergeTagReferences,
} from "../util/references";
import { callRuntime, linkRuntimeFeature } from "../util/runtime";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import {
  getBranchRendererArgs,
  ensureSection,
  ensureBodySection,
  getSection,
  getSectionForBody,
} from "../util/sections";
import { getShellIdArg } from "../util/shell";
import {
  addValue,
  buildClosureHop,
  getSignal,
  setClosureSignalBuilder,
  trimEmptyArgs,
  writeHTMLResumeStatements,
} from "../util/signals";
import { ensureSlot, SlotKind } from "../util/slots";
import { hasCallerParamSource } from "../util/sources";
import * as structure from "../util/structure";
import { getMemberExpressionPropString } from "../util/to-property-name";
import { translateByTarget } from "../util/visitors";
import { getBranchWriteReason } from "../util/write-guard";
import * as writer from "../util/writer";

export default {
  analyze(tag) {
    const tagSection = ensureSection(tag);
    const isAttrTag = tag.node.body.attributeTags;
    const tagBody = tag.get("body");
    const paramsBinding = trackParamsReferences(
      tagBody,
      isAttrTag ? BindingType.local : BindingType.derived,
    );

    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoSpreadAttrs(tag);

    const forType = assertForType(tag);
    const allowAttrs = getForAttrs(forType);
    if (!isAttrTag) {
      allowAttrs.push("by");
    }

    // Redirect the React/Vue `key=` habit to `by=` before the generic error.
    const keyAttr = tag.node.attributes.find(
      (attr) => attr.type === "MarkoAttribute" && attr.name === "key",
    );
    if (keyAttr) {
      throw tag.hub.buildError(
        keyAttr,
        `The [\`<for>\` tag](https://markojs.com/docs/reference/core-tag#for) keys items with the \`by=\` attribute, not \`key=\`. ${
          forType === "of"
            ? 'Use `by="propName"` or `by=(item, index) => key`'
            : forType === "in"
              ? "Use `by=(key, value) => key`"
              : "Use `by=(num) => key`"
        }.`,
      );
    }

    assertAllowedAttributes(tag, allowAttrs);
    assertForParams(tag, forType);

    if (isAttrTag) {
      // The loop runs as its attribute tags are built, so its params change
      // only with its attributes, as a sectioned loop's params do.
      if (paramsBinding) {
        setDerivedFrom(
          paramsBinding,
          fromIter(
            tag.node.attributes.map((attr) => (attr.value.extra ??= {})),
          ),
        );
      }
      return;
    }

    const byAttr = getKnownAttrValues(tag.node).by;
    if (byAttr) (byAttr.extra ??= {}).consumed = true;

    // Only `<for of>` accepts a string `by` (property-name shorthand); `in`/`to`/`until`
    // invoke `by` as a function, so reject a string at compile time rather than at render.
    if (forType !== "of" && byAttr?.type === "StringLiteral") {
      throw tag.hub.buildError(
        byAttr,
        `The [\`<for>\` tag](https://markojs.com/docs/reference/core-tag#for) only supports a string \`by\` key with \`of\`; use a \`by=(${
          forType === "in" ? "key, value" : "index"
        }) => ...\` function for \`<for ${forType}>\`.`,
      );
    }

    const bodySection = ensureBodySection(tagBody);

    if (!bodySection) {
      // An empty loop body deliberately compiles the whole tag away (not an
      // error, unlike `<if>`); the `for-empty-bodies` fixture pins this.
      dropNodes(getAllTagReferenceNodes(tag.node));
      return;
    }

    const nodeBinding = structure.controlFlowNode(tag, tagSection);
    const tagExtra = mergeTagReferences(tagSection, tag.node);

    addReasonExprs(ensureSlot(nodeBinding, SlotKind.BranchExpr), tagExtra);

    if (paramsBinding) {
      setDerivedFrom(paramsBinding, tagExtra);
      if (forType === "of" || forType === "in") {
        paramsBinding.iterates = {
          expr: (getKnownAttrValues(tag.node)[forType]!.extra ??= {}),
          type: forType,
        };
      }

      const keyBinding = getLoopKeyBinding(byAttr, paramsBinding, forType!);
      if (keyBinding) {
        // A branch is keyed by its key, so the key never changes within it.
        keyBinding.type = BindingType.constant;
        keyBinding.scopeAccessor = getAccessorProp().LoopKey;
        onFinalizeReferences(() => detectForSelector(bodySection, keyBinding));
      }
    }
    initBranchSection(bodySection, tagExtra, {
      nodeBinding,
      optional: true,
    });

    if (isPatch()) {
      onFinalizeReferences(() => {
        recordStructuralParams(getSourcesForExpr(tagExtra));
      });
      onReasonsSettled(() => {
        if (patchesBranchesAt(nodeBinding)) {
          linkRuntimeFeature(
            isKeyedByIndex(forType!, getKnownAttrValues(tag.node))
              ? "patches/loop"
              : "patches/loop-keyed",
          );
          // A collection reading a param a caller passes may be client-sourced
          // at runtime, and the rows it keeps patch in place.
          if (hasCallerParamSource(getWriteSources(tagExtra))) {
            linkRuntimeFeature("patches/loop-item");
          }
        }
      });
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          tag.remove();
          return;
        }

        writer.flushBefore(tag);
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;
        const { node } = tag;
        const tagSection = getSection(tag);
        const nodeBinding = node.extra!.nodeBinding!;
        const forAttrs = getKnownAttrValues(node);
        const forType = getForType(node)!;
        const params = node.body.params;
        const statements: t.Statement[] = [];
        const bodyStatements = node.body.body as t.Statement[];
        // A patchable loop keeps its markers: item pairing and insertion
        // go through branch markers, which elision would remove.
        const patchesBranches = patchesBranchesAt(nodeBinding);
        const branchReason = getBranchWriteReason(bodySection);

        resumeOwnerByMarkerWhenUnconditional(bodySection, nodeBinding);

        writeHTMLResumeStatements(tag);

        const forTagArgs = getBaseArgsInForTag(forType, forAttrs) as (
          | t.Expression
          | undefined
        )[];
        const forTagHTMLRuntime = branchReason
          ? forTypeToBranchRuntime(forType)
          : forTypeToRuntime(forType);
        forTagArgs.push(
          t.arrowFunctionExpression(params, t.blockStatement(bodyStatements)),
        );

        if (branchReason) {
          forTagArgs.push(
            forAttrs.by || t.numericLiteral(0),
            ...getBranchResumeArgs(
              tag,
              branchReason,
              isSingleNodeBranch(bodySection),
              patchesBranches,
            ),
          );

          if (patchesBranches) {
            forTagArgs.push(
              // Item body shell id so patches can create additions.
              getShellIdArg(bodySection),
              // A loop whose expression derives from params yields to the client
              // when the call site passes state for them.
              ...getExprRootGroupArgs(tagSection, node.extra!),
            );
          }
        }

        statements.push(
          t.expressionStatement(callRuntime(forTagHTMLRuntime, ...forTagArgs)),
        );

        for (const replacement of tag.replaceWithMultiple(statements)) {
          replacement.skip();
        }
      },
    },
    dom: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          tag.remove();
        }
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const tagSection = getSection(tag);
        const bodySection = getSectionForBody(tagBody)!;
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeBinding = tagExtra.nodeBinding!;
        const hop = { kind: "for", nodeBinding } as const;
        setClosureSignalBuilder(tag, hop, (closure, render) => {
          const selectorKeyBinding = getForSelectorKey(bodySection, closure);
          if (!selectorKeyBinding) {
            return buildClosureHop(hop, render);
          }
          return callRuntime(
            "_for_selector",
            getScopeAccessorLiteral(nodeBinding, true),
            getScopeAccessorLiteral(closure, true),
            getScopeAccessorLiteral(selectorKeyBinding, true),
            render,
          );
        });

        const forType = getForType(node)!;
        const forAttrs = getKnownAttrValues(node);
        const signal = getSignal(tagSection, nodeBinding, "for");
        signal.build = () => {
          return callRuntime(
            isKeyedByIndex(forType, forAttrs)
              ? forTypeToUnkeyedBranchRuntime(forType)
              : forTypeToBranchRuntime(forType),
            getScopeAccessorLiteral(nodeBinding, true),
            ...trimEmptyArgs(getBranchRendererArgs(bodySection)),
          );
        };

        const loopArgs = getBaseArgsInForTag(forType, forAttrs);
        if (forAttrs.by) {
          loopArgs.push(forAttrs.by);
        }

        addValue(tagSection, tagExtra, signal, t.arrayExpression(loopArgs));

        tag.remove();
      },
    },
  }),
  parseOptions: { controlFlow: true },
  attributes: {
    of: {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over a list of items.",
        },
      ],
    },
    in: {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over the keys and values of an object.",
        },
      ],
    },
    to: {
      type: "number",
      autocomplete: [
        {
          description: "Iterates up to the provided number (inclusive)",
        },
      ],
    },
    until: {
      type: "number",
      autocomplete: [
        {
          description: "Iterates up to the provided number (exclusive)",
        },
      ],
    },
    from: {
      type: "number",
      autocomplete: [
        {
          description: "Iterates starting from the provided number (inclusive)",
        },
      ],
    },
    step: {
      type: "number",
      autocomplete: [
        {
          description:
            "The amount to increment during each iteration (with from/to/until)",
        },
      ],
    },
  },
  autocomplete: [
    {
      snippet: "for|${1:value, index}| of=${3:array}",
      description:
        "Use to iterate over lists, object properties, or between ranges.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#for",
    },
    {
      snippet: "for|${1:name, value}| in=${3:object}",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#for",
    },
    {
      snippet: "for|${1:index}| to=${2:number}",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#for",
    },
    {
      snippet: "for|${1:index}| until=${2:number}",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#for",
    },
  ],
} as Tag;

function getLoopKeyBinding(
  byAttr: t.Expression | undefined,
  paramsBinding: Binding | undefined,
  forType: ForType,
): Binding | undefined {
  if (!paramsBinding) return;
  if (byAttr) {
    const item = paramsBinding.propertyAliases.get("0");
    return item && getKeyAlias(byAttr, item);
  }

  return paramsBinding.propertyAliases.get(forType === "of" ? "1" : "0");
}

// The alias of the loop item that `by=` reads: a property name, or a function
// returning a static member chain of its item param.
function getKeyAlias(byAttr: t.Expression, item: Binding): Binding | undefined {
  if (byAttr.type === "StringLiteral") {
    return getPropertyAlias(item, byAttr.value);
  }
  if (
    byAttr.type === "ArrowFunctionExpression" ||
    byAttr.type === "FunctionExpression"
  ) {
    const itemParam = byAttr.params[0];
    let body: t.Node | null | undefined = byAttr.body;
    if (body.type === "BlockStatement") {
      const [statement] = body.body;
      body =
        body.body.length === 1 && statement.type === "ReturnStatement"
          ? statement.argument
          : undefined;
    }
    if (itemParam?.type === "Identifier" && body) {
      return getMemberChainAlias(body, itemParam.name, item);
    }
  }
}

// The alias of `item` that `node` reads, when `node` is a static member chain
// of the identifier `rootName`.
function getMemberChainAlias(
  node: t.Node,
  rootName: string,
  item: Binding,
): Binding | undefined {
  if (node.type === "Identifier") {
    return node.name === rootName ? item : undefined;
  }
  if (
    node.type === "MemberExpression" ||
    node.type === "OptionalMemberExpression"
  ) {
    const property = getMemberExpressionPropString(node);
    if (property !== undefined) {
      const object = getMemberChainAlias(node.object, rootName, item);
      return object && getPropertyAlias(object, property);
    }
  }
}

// Without `by=`, `of=` keys by index and `to=`/`until=` by value, which is the
// index only from 0 in steps of 1; such a loop never moves a branch.
function isKeyedByIndex(type: ForType, attrs: Record<string, t.Expression>) {
  if (attrs.by) return false;
  switch (type) {
    case "of":
      return true;
    case "to":
    case "until":
      return (
        isNumberOrOmitted(attrs.from, 0) && isNumberOrOmitted(attrs.step, 1)
      );
    default:
      return false;
  }
}

function isNumberOrOmitted(node: t.Expression | undefined, value: number) {
  return !node || (node.type === "NumericLiteral" && node.value === value);
}
