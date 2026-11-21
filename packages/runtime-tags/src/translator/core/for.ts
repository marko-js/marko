import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoSpreadAttrs, coreTagLink } from "../util/assert";
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
  isSingleNodeContent,
  resumeOwnerByMarkerWhenUnconditional,
} from "../util/branch-tag";
import evaluate, { isConfident } from "../util/evaluate";
import { detectForSelector, isForSelectorClosure } from "../util/for-selector";
import { getAccessorProp } from "../util/get-accessor-enums";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { fromIter } from "../util/optional";
import { addReasonExprs } from "../util/reasons";
import {
  dropNodes,
  getAllTagReferenceNodes,
  onFinalizeReferences,
  setDerivedFrom,
  trackParamsReferences,
  mergeTagReferences,
} from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import { callRuntime } from "../util/runtime";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import { getScopeExpression, scopeIdentifier } from "../util/scope-read";
import {
  getBranchRendererArgs,
  ensureSection,
  ensureBodySection,
  getSection,
  getSectionForBody,
  mayMergeWithText,
  type ControlFlowTagExtra,
} from "../util/sections";
import {
  addValue,
  buildClosureHop,
  getSignal,
  setClosureSignalBuilder,
  trimEmptyArgs,
  writeHTMLResumeStatements,
} from "../util/signals";
import { ensureSlot, SlotKind } from "../util/slots";
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
    const keyAttr = tag.node.attributes.find(isKeyAttr);
    if (keyAttr) {
      throw tag.hub.buildError(
        keyAttr,
        `The ${coreTagLink(tag)} keys items with the \`by=\` attribute, not \`key=\`. Use ${forType === "of" ? '`by="propName"` or ' : ""}\`by=(${getForParamNames(forType)}) => key\`.`,
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
          fromIter(tag.node.attributes.map(getAttrValueExtra)),
        );
      }
      return;
    }

    const forAttrs = getKnownAttrValues(tag.node);
    const byAttr = forAttrs.by;
    if (byAttr) (byAttr.extra ??= {}).consumed = true;

    // Only `<for of>` accepts a string `by` (property-name shorthand); `in`/`to`/`until`
    // invoke `by` as a function, so reject a string at compile time rather than at render.
    if (forType !== "of" && byAttr?.type === "StringLiteral") {
      throw tag.hub.buildError(
        byAttr,
        `The ${coreTagLink(tag)} only supports a string \`by\` key with \`of\`; use a \`by=(${getForParamNames(forType)}) => ...\` function for \`<for ${forType}>\`.`,
      );
    }

    const bodySection = ensureBodySection(tagBody);

    if (!bodySection) {
      // An empty loop body deliberately compiles the whole tag away (not an
      // error, unlike `<if>`); the `for-empty-bodies` fixture pins this.
      dropNodes(getAllTagReferenceNodes(tag.node));
      return;
    }

    bodySection.suppliedParams = getForParamCount(forType);
    const nodeBinding = structure.controlFlowNode(tag, tagSection);
    const tagExtra = mergeTagReferences(
      tagSection,
      tag.node,
    ) as ControlFlowTagExtra;

    addReasonExprs(ensureSlot(nodeBinding, SlotKind.BranchExpr), tagExtra);

    if (paramsBinding) {
      setDerivedFrom(paramsBinding, tagExtra);
      if (forType === "of" || forType === "in") {
        paramsBinding.iterates = {
          expr: (forAttrs[forType].extra ??= {}),
          type: forType,
        };
      }

      const keyBinding = getLoopKeyBinding(byAttr, paramsBinding, forType);
      if (keyBinding) {
        // A branch is keyed by its key, so the key never changes within it.
        keyBinding.type = BindingType.constant;
        keyBinding.scopeAccessor = getAccessorProp().LoopKey;
        onFinalizeReferences(() => detectForSelector(bodySection, keyBinding));
      }
    }
    tagExtra.textBefore = mayMergeWithText(tag, true);
    initBranchSection(bodySection, tagExtra, { kind: "for", tag: tagExtra });
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          replaceWithStatements(tag);
          return;
        }

        writer.flushBefore(tag);
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;
        const { node } = tag;
        const forAttrs = getKnownAttrValues(node);
        const forType = getForType(node)!;
        const params = node.body.params;
        const bodyStatements = node.body.body;
        const branchReason = getBranchWriteReason(bodySection);

        resumeOwnerByMarkerWhenUnconditional(bodySection);

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
              isSingleNodeContent(bodySection.content),
            ),
          );
        }

        replaceWithStatements(tag, [
          t.expressionStatement(callRuntime(forTagHTMLRuntime, ...forTagArgs)),
        ]);
      },
    },
    dom: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          replaceWithStatements(tag);
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
        setClosureSignalBuilder(tag, (closure, render) => {
          if (!isForSelectorClosure(bodySection, closure)) {
            return buildClosureHop(bodySection, closure, render);
          }
          return callRuntime(
            "_for_selector",
            getScopeAccessorLiteral(nodeBinding, true),
            getScopeAccessorLiteral(closure, true),
            render,
            closure.section !== tagSection &&
              t.arrowFunctionExpression(
                [scopeIdentifier],
                getScopeExpression(tagSection, closure.section),
              ),
          );
        });

        const forType = getForType(node)!;
        const forAttrs = getKnownAttrValues(node);
        const signal = getSignal(tagSection, nodeBinding, "for");
        signal.build = () => {
          return callRuntime(
            isUnkeyed(forType, forAttrs)
              ? forTypeToUnkeyedBranchRuntime(forType)
              : forTypeToBranchRuntime(forType),
            getScopeAccessorLiteral(nodeBinding, true),
            ...trimEmptyArgs(getBranchRendererArgs(bodySection)),
          );
        };

        addValue(
          tagSection,
          tagExtra,
          signal,
          t.arrayExpression(getLoopArgs(forType, forAttrs)),
        );

        replaceWithStatements(tag);
      },
    },
  }),
  parseOptions: { controlFlow: true },
} as Tag;

function getLoopKeyBinding(
  byAttr: t.Expression | undefined,
  paramsBinding: Binding,
  forType: ForType,
): Binding | undefined {
  if (byAttr) {
    const item = paramsBinding.propertyAliases?.get("0");
    return item && getKeyAlias(byAttr, item);
  }

  return paramsBinding.propertyAliases?.get(forType === "of" ? "1" : "0");
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

// Without `by=`, `of=` keys rows by index and `to=`/`until=` by value, which
// keeps its row's position while `from` and `step` are constants: no row moves.
function isUnkeyed(type: ForType, attrs: Record<string, t.Expression>) {
  if (attrs.by) return false;
  switch (type) {
    case "of":
      return true;
    case "to":
    case "until":
      return isConstantOrOmitted(attrs.from) && isConstantOrOmitted(attrs.step);
    default:
      return false;
  }
}

// The client loop reads a falsy `from` as 0 and `step` as 1, so a default
// argument is dropped from the end and written as 0 before a later one.
function getLoopArgs(type: ForType, attrs: Record<string, t.Expression>) {
  const args =
    type === "to" || type === "until"
      ? [
          attrs[type],
          isNumberOrOmitted(attrs.from, 0) ? undefined : attrs.from,
          isNumberOrOmitted(attrs.step, 1) ? undefined : attrs.step,
          attrs.by,
        ]
      : [attrs[type], attrs.by];
  while (!args.at(-1)) args.pop();
  return args.map(zeroIfOmitted);
}

function zeroIfOmitted(arg: t.Expression | undefined) {
  return arg || t.numericLiteral(0);
}

function isConstantOrOmitted(node: t.Expression | undefined) {
  return !node || isConfident(evaluate(node));
}

function isNumberOrOmitted(node: t.Expression | undefined, value: number) {
  return !node || (node.type === "NumericLiteral" && node.value === value);
}

function isKeyAttr(attr: t.MarkoTag["attributes"][number]) {
  return attr.type === "MarkoAttribute" && attr.name === "key";
}

function getAttrValueExtra(attr: t.MarkoTag["attributes"][number]) {
  return (attr.value.extra ??= {});
}

/** The loop a `<for>` tag's attributes run, which it requires. */
function assertForType(tag: t.NodePath<t.MarkoTag>) {
  const type = getForType(tag.node);
  if (!type) {
    throw tag.buildCodeFrameError(
      `The ${coreTagLink(tag)} requires an \`of=\`, \`in=\`, \`to=\`, or \`until=\` attribute.`,
    );
  }
  return type;
}

/** The attributes a loop of `type` takes, besides `by=`. */
function getForAttrs(type: ForType) {
  return type === "of" || type === "in" ? [type] : [type, "from", "step"];
}

/** Throws for a param that a loop of `type` never supplies, or a rest param. */
function assertForParams(tag: t.NodePath<t.MarkoTag>, type: ForType) {
  const { params } = tag.node.body;
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    if (param.type === "RestElement") {
      throw tag.hub.buildError(
        param,
        `The ${coreTagLink(tag)} provides \`|${getForParamNames(type)}|\` with \`${type}=\`: name each parameter instead of collecting them with a rest parameter.`,
      );
    }
    if (i === getForParamCount(type)) {
      throw tag.hub.buildError(
        param,
        `The ${coreTagLink(tag)} only provides \`|${getForParamNames(type)}|\` with \`${type}=\`, so this parameter is never supplied.`,
      );
    }
  }
}

/** How many params a loop of `type` supplies. */
function getForParamCount(type: ForType) {
  return type === "of" || type === "in" ? 2 : 1;
}

/** The params a loop of `type` supplies, as its docs name them. */
function getForParamNames(type: ForType) {
  return type === "of" ? "item, index" : type === "in" ? "key, value" : "num";
}
