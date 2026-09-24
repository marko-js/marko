import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import {
  getBranchResumeArgs,
  getBranchSectionAccessor,
  initBranchSection,
  isSingleNodeBranch,
  resumeOwnerByMarkerWhenStatic,
} from "../util/branch-tag";
import { detectForSelector, getForSelectorKey } from "../util/for-selector";
import { getAccessorProp } from "../util/get-accessor-enums";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import {
  getOnlyChildParentTagName,
  getOptimizedOnlyChildNodeBinding,
} from "../util/is-only-child-in-parent";
import { isPatch } from "../util/marko-config";
import { fromIter, some } from "../util/optional";
import { onClassifyStructure, onFinalizePatch } from "../util/patch/lifecycle";
import {
  isBranchPathSection,
  isStatefulBranch,
  recordStructuralParams,
} from "../util/patch/structure";
import {
  type Binding,
  BindingType,
  dropNodes,
  FORCED,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  kBranchSerializeReason,
  mergeReferences,
  onFinalizeReferences,
  setBindingDownstream,
  trackParamsReferences,
} from "../util/references";
import { linkRuntimeFeature, callRuntime } from "../util/runtime";
import {
  getChildSections,
  getBranchRendererArgs,
  getDirectClosures,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  getExprWriteOwnership,
  scopePageIdentifier,
} from "../util/serialize-guard";
import {
  addSerializeExpr,
  addSerializeReason,
  getSerializeReason,
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../util/serialize-reasons";
import { getShellId, getShells } from "../util/shell";
import {
  addValue,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  setClosureSignalBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import { getMemberExpressionPropString } from "../util/to-property-name";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";

type ForType = "in" | "of" | "to" | "until";
const kStatefulReason = Symbol("<for> stateful reason");

export default {
  analyze(tag) {
    const tagSection = getOrCreateSection(tag);
    const isAttrTag = tag.node.body.attributeTags;
    const tagBody = tag.get("body");
    const paramsBinding = trackParamsReferences(
      tagBody,
      isAttrTag ? BindingType.local : BindingType.derived,
    );

    let allowAttrs: string[];
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoSpreadAttrs(tag);

    const forType = getForType(tag.node);
    switch (forType) {
      case "of":
        allowAttrs = ["of"];
        break;
      case "in":
        allowAttrs = ["in"];
        break;
      case "to":
        allowAttrs = ["to", "from", "step"];
        break;
      case "until":
        allowAttrs = ["until", "from", "step"];
        break;
      default:
        throw tag.buildCodeFrameError(
          "The [`<for>` tag](https://markojs.com/docs/reference/core-tag#for) requires an `of=`, `in=`, `to=`, or `until=` attribute.",
        );
    }

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

    const extraParam =
      tag.node.body.params[forType === "of" || forType === "in" ? 2 : 1];
    if (extraParam && extraParam.type !== "RestElement") {
      throw tag.hub.buildError(
        extraParam,
        `The [\`<for>\` tag](https://markojs.com/docs/reference/core-tag#for) only provides \`|${
          forType === "of"
            ? "item, index"
            : forType === "in"
              ? "key, value"
              : "num"
        }|\` with \`${forType}=\`, so this parameter is never supplied.`,
      );
    }

    if (isAttrTag) {
      // The loop runs as its attribute tags are built, so its params change
      // only with its attributes, as a sectioned loop's params do.
      if (paramsBinding) {
        setBindingDownstream(
          paramsBinding,
          fromIter(
            tag.node.attributes.map((attr) => (attr.value.extra ??= {})),
          ),
        );
      }
      return;
    }

    const byAttr = getKnownAttrValues(tag.node).by;

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

    // `by=` is evaluated once before the loop runs, so loop parameters are not in
    // scope; keying by one otherwise dies at render with an undefined-variable error.
    if (byAttr) {
      const paramNames = new Set<string>();
      for (const param of tag.node.body.params) {
        for (const name in t.getBindingIdentifiers(param)) {
          paramNames.add(name);
        }
      }
      const paramRead = paramNames.size
        ? findLoopParamRead(byAttr, paramNames)
        : undefined;
      if (paramRead) {
        throw tag.hub.buildError(
          paramRead,
          `The \`by=\` attribute is evaluated before the loop runs, so \`${paramRead.name}\` is not in scope. Key with a property name string (\`by="id"\`) or a function (\`by=(${paramRead.name}) => key\`).`,
        );
      }
    }

    const bodySection = startSection(tagBody);

    if (!bodySection) {
      // An empty loop body deliberately compiles the whole tag away (not an
      // error, unlike `<if>`); the `for-empty-bodies` fixture pins this.
      dropNodes(getAllTagReferenceNodes(tag.node));
      return;
    }

    const nodeBinding = getOptimizedOnlyChildNodeBinding(tag, tagSection);
    const tagExtra = mergeReferences(
      tagSection,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );

    addSerializeExpr(tagSection, tagExtra, kStatefulReason);

    if (paramsBinding) {
      setBindingDownstream(paramsBinding, tagExtra);
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
    initBranchSection(
      bodySection,
      tagExtra,
      getBranchSectionAccessor(nodeBinding),
    );

    if (isPatch()) {
      onClassifyStructure(tagSection, () => {
        // Patches render a loop that is not stateful.
        if (!isStatefulBranch(bodySection) && isBranchPathSection(tagSection)) {
          linkRuntimeFeature(
            isKeyedByIndex(forType!, getKnownAttrValues(tag.node))
              ? "patch-loop"
              : "patch-loop-keyed",
          );
          recordStructuralParams(getSerializeSourcesForExpr(tagExtra));
        }
      });
      onFinalizePatch(() => {
        addSerializeReason(
          tagSection,
          !isStatefulBranch(bodySection) &&
            (bodySection.isHoistThrough || bodySection.hoisted
              ? FORCED
              : getSerializeSourcesForRef(getDirectClosures(bodySection))),
          nodeBinding,
        );
      });
      onFinalizeReferences(() => {
        // Items with dom bindings or nested sections link: a source-less list
        // (a literal) still resumes its marker.
        if (
          !isStatefulBranch(bodySection) &&
          isBranchPathSection(tagSection) &&
          hasDomBindingsOrNestedSections(bodySection)
        ) {
          if (!getSerializeReason(tagSection, nodeBinding)) {
            addSerializeReason(tagSection, FORCED, nodeBinding);
          }
          if (!getSerializeReason(bodySection, kBranchSerializeReason)) {
            addSerializeReason(bodySection, FORCED, kBranchSerializeReason);
          }
        }
      });
    }

    if (!isAttrTag && !getOnlyChildParentTagName(tag)) {
      structure.visit(tag, WalkCode.Replace);
      structure.enterShallow(tag);
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

        setSectionParentIsOwner(bodySection, true);

        writer.flushBefore(tag);
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const tagSection = getSection(tag);
        const bodySection = getSectionForBody(tagBody)!;
        const { node } = tag;
        const onlyChildParentTagName = getOnlyChildParentTagName(tag);
        const nodeBinding = getOptimizedOnlyChildNodeBinding(tag, tagSection);
        const forAttrs = getKnownAttrValues(node);
        const forType = getForType(node)!;
        const params = node.body.params;
        const statements: t.Statement[] = [];
        const bodyStatements = node.body.body as t.Statement[];
        // A client-owned loop compiles like a stateful loop on a plain
        // page: no marker retention, shells, or loop entry.
        const stateful = isStatefulBranch(bodySection);
        // A patchable loop keeps its markers: item pairing and insertion
        // anchor at branch marks, which elision would remove.
        const patchChain =
          isPatch() && !stateful && isBranchPathSection(tagSection);
        const branchSerializeReason = getSerializeReason(
          bodySection,
          kBranchSerializeReason,
        );

        resumeOwnerByMarkerWhenStatic(
          tagSection,
          bodySection,
          nodeBinding,
          kStatefulReason,
        );

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        const forTagArgs = getBaseArgsInForTag(forType, forAttrs) as (
          | t.Expression
          | undefined
        )[];
        const forTagHTMLRuntime = branchSerializeReason
          ? forTypeToBranchRuntime(forType)
          : forTypeToRuntime(forType);
        forTagArgs.push(
          t.arrowFunctionExpression(params, t.blockStatement(bodyStatements)),
        );

        if (branchSerializeReason) {
          forTagArgs.push(
            forAttrs.by || t.numericLiteral(0),
            getScopeIdIdentifier(tagSection),
            getScopeAccessorLiteral(nodeBinding),
            ...getBranchResumeArgs(
              tag,
              tagSection,
              nodeBinding,
              branchSerializeReason,
              kStatefulReason,
              onlyChildParentTagName,
              isSingleNodeBranch(bodySection),
              patchChain,
            ),
          );

          if (patchChain) {
            // Item body shell id so patches can create additions.
            const id = getShellId(bodySection);
            forTagArgs.push(
              id && getShells()?.[id]
                ? t.stringLiteral(id)
                : t.numericLiteral(0),
              // A loop with params upstream yields to the client when the call
              // site has state upstream of its inputs.
              ...getExprWriteOwnership(node.extra!),
            );
          }
        }

        let statement: t.Statement = t.expressionStatement(
          callRuntime(forTagHTMLRuntime, ...forTagArgs),
        );
        if (stateful) {
          // Patch renders skip the loop: its state reads are server-stale
          // and the flush never speaks the listing.
          statement = t.ifStatement(
            scopePageIdentifier(tagSection.program),
            statement,
          );
        }
        statements.push(statement);

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
          return;
        }

        setSectionParentIsOwner(bodySection, true);
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const tagSection = getSection(tag);
        const bodySection = getSectionForBody(tagBody)!;
        const { node } = tag;
        const tagExtra = node.extra!;
        const { referencedBindings } = tagExtra;
        const nodeRef = getOptimizedOnlyChildNodeBinding(tag, tagSection);
        setClosureSignalBuilder(
          tag,
          { kind: "for", ref: nodeRef },
          (closure, render, initId) => {
            const selectorKeyBinding = getForSelectorKey(bodySection, closure);
            const init = initId && t.stringLiteral(initId);
            if (selectorKeyBinding) {
              const args = [
                getScopeAccessorLiteral(nodeRef, true),
                getScopeAccessorLiteral(closure, true),
                getScopeAccessorLiteral(selectorKeyBinding, true),
                render,
              ];
              return init
                ? callRuntime("_init_for_selector", init, ...args)
                : callRuntime("_for_selector", ...args);
            }
            return init
              ? callRuntime(
                  "_init_for_closure",
                  init,
                  getScopeAccessorLiteral(nodeRef, true),
                  render,
                )
              : callRuntime(
                  "_for_closure",
                  getScopeAccessorLiteral(nodeRef, true),
                  render,
                );
          },
        );

        const forType = getForType(node)!;
        const forAttrs = getKnownAttrValues(node);
        const signal = getSignal(tagSection, nodeRef, "for");
        signal.build = () => {
          return callRuntime(
            isKeyedByIndex(forType, forAttrs)
              ? forTypeToUnkeyedBranchRuntime(forType)
              : forTypeToBranchRuntime(forType),
            getScopeAccessorLiteral(nodeRef, true),
            ...replaceNullishAndEmptyFunctionsWith0(
              getBranchRendererArgs(bodySection),
            ),
          );
        };

        const loopArgs = getBaseArgsInForTag(forType, forAttrs);
        if (forAttrs.by) {
          loopArgs.push(forAttrs.by);
        }

        addValue(
          tagSection,
          referencedBindings,
          signal,
          t.arrayExpression(loopArgs),
        );

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

export function buildForRuntimeCall(
  type: ForType,
  attrs: Record<string, t.Expression>,
  params: t.ArrowFunctionExpression["params"],
  statements: t.Statement[],
) {
  return t.expressionStatement(
    callRuntime(
      forTypeToRuntime(type),
      ...getBaseArgsInForTag(type, attrs),
      t.arrowFunctionExpression(params, t.blockStatement(statements)),
    ),
  );
}

export function getForType(tag: t.MarkoTag): ForType | undefined {
  for (const attr of tag.attributes) {
    if (attr.type === "MarkoAttribute") {
      switch (attr.name) {
        case "of":
        case "in":
        case "to":
        case "until":
          return attr.name;
      }
    }
  }
}

// A plain node walk (no paths/scopes): functions and classes are skipped since
// their params shadow, so an inner read falls back to the runtime error.
function findLoopParamRead(
  node: t.Node,
  names: Set<string>,
): t.Identifier | undefined {
  switch (node.type) {
    case "Identifier":
      return names.has(node.name) ? node : undefined;
    case "MemberExpression":
    case "OptionalMemberExpression":
      return (
        findLoopParamRead(node.object, names) ||
        (node.computed ? findLoopParamRead(node.property, names) : undefined)
      );
  }

  if (t.isFunction(node) || t.isClass(node)) return;

  for (const key of t.VISITOR_KEYS[node.type] || []) {
    if (key === "typeAnnotation" || key === "typeParameters") continue;
    if (key === "key" && !(node as t.ObjectProperty).computed) continue;
    const value = (node as any)[key];
    if (Array.isArray(value)) {
      for (const child of value) {
        const found = child?.type && findLoopParamRead(child, names);
        if (found) return found;
      }
    } else if (value?.type) {
      const found = findLoopParamRead(value, names);
      if (found) return found;
    }
  }
}

function getLoopKeyBinding(
  byAttr: t.Expression | undefined,
  paramsBinding: Binding | undefined,
  forType: ForType,
): Binding | undefined {
  if (!paramsBinding) return;
  if (byAttr) {
    const keyChain = getByKeyChain(byAttr);
    if (!keyChain) return;
    let keyBinding = paramsBinding.propertyAliases.get("0");
    for (const property of keyChain) {
      keyBinding = keyBinding?.propertyAliases.get(property);
    }
    return keyBinding;
  }

  return paramsBinding.propertyAliases.get(forType === "of" ? "1" : "0");
}

function getByKeyChain(byAttr: t.Expression): string[] | undefined {
  if (byAttr.type === "StringLiteral") {
    return [byAttr.value];
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
      return getStaticMemberChain(body, itemParam.name);
    }
  }
}

function getStaticMemberChain(
  node: t.Node,
  rootName: string,
): string[] | undefined {
  if (node.type === "Identifier") {
    return node.name === rootName ? [] : undefined;
  }
  if (
    node.type === "MemberExpression" ||
    node.type === "OptionalMemberExpression"
  ) {
    const property = getMemberExpressionPropString(node);
    if (property !== undefined) {
      const chain = getStaticMemberChain(node.object, rootName);
      chain?.push(property);
      return chain;
    }
  }
}

function hasDomBindingsOrNestedSections(section: Section) {
  return (
    some(section.bindings, (binding) => binding.type === BindingType.dom) ||
    getChildSections(section).length > 0
  );
}

function forTypeToRuntime(type: ForType) {
  switch (type) {
    case "of":
      return "forOf";
    case "in":
      return "forIn";
    case "to":
      return "forTo";
    case "until":
      return "forUntil";
  }
}

function forTypeToBranchRuntime(type: ForType) {
  switch (type) {
    case "of":
      return "_for_of";
    case "in":
      return "_for_in";
    case "to":
      return "_for_to";
    case "until":
      return "_for_until";
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

function forTypeToUnkeyedBranchRuntime(type: ForType) {
  switch (type) {
    case "to":
      return "_for_to_unkeyed";
    case "until":
      return "_for_until_unkeyed";
    default:
      return "_for_of_unkeyed";
  }
}

function getBaseArgsInForTag(
  type: ForType,
  attrs: Record<string, t.Expression>,
) {
  switch (type) {
    case "in":
      return [attrs.in];
    case "of":
      return [attrs.of];
    case "to":
      return [
        attrs.to,
        attrs.from || t.numericLiteral(0),
        attrs.step || t.numericLiteral(1),
      ];
    case "until":
      return [
        attrs.until,
        attrs.from || t.numericLiteral(0),
        attrs.step || t.numericLiteral(1),
      ];
  }
}
