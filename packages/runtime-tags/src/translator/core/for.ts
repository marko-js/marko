import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import { getAccessorPrefix } from "../util/get-accessor-char";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { getParentTag } from "../util/get-parent-tag";
import {
  getOnlyChildParentTagName,
  getOptimizedOnlyChildNodeBinding,
} from "../util/is-only-child-in-parent";
import {
  BindingType,
  dropReferences,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  kBranchSerializeReason,
  mergeReferences,
  setBindingDownstream,
  trackParamsReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  ContentType,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  addSectionSerializeReasonExpr,
  getBindingSerializeReason,
  getSectionSerializeReason,
} from "../util/serialize-reasons";
import {
  addValue,
  getSignal,
  setClosureSignalBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { getSerializeGuard } from "../visitors/program/html";
import { kSkipEndTag } from "../visitors/tag/native-tag";

type ForType = "in" | "of" | "to" | "until";
const kStatefulReason = Symbol("<for> stateful reason");

export default {
  analyze(tag) {
    const tagSection = getOrCreateSection(tag);
    const isAttrTag = tag.node.body.attributeTags;
    const tagBody = tag.get("body");
    const paramsBinding = trackParamsReferences(
      tagBody,
      isAttrTag ? BindingType.local : BindingType.param,
    );

    let allowAttrs: string[];
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoSpreadAttrs(tag);

    switch (getForType(tag.node)) {
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
          "The [`<for>` tag](https://markojs.com/docs/reference/core-tag#for) requires an `of=`, `in=`, or `to=` attribute.",
        );
    }

    if (!isAttrTag) {
      allowAttrs.push("by");
    }

    assertAllowedAttributes(tag, allowAttrs);

    if (isAttrTag) return;

    const bodySection = startSection(tagBody);

    if (!bodySection) {
      dropReferences(getAllTagReferenceNodes(tag.node));
      return;
    }

    const nodeBinding = getOptimizedOnlyChildNodeBinding(tag, tagSection);
    const tagExtra = mergeReferences(
      tagSection,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );

    addSectionSerializeReasonExpr(tagSection, tagExtra, kStatefulReason);

    if (paramsBinding) {
      setBindingDownstream(paramsBinding, tagExtra);
    }
    bodySection.sectionAccessor = {
      binding: nodeBinding,
      prefix: getAccessorPrefix().LoopScopeMap,
    };

    bodySection.upstreamExpression = tagExtra;
    bodySection.isBranch = true;
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

        if (!getOnlyChildParentTagName(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }

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
        const singleNodeOptimization =
          bodySection.content === null ||
          (bodySection.content.singleChild &&
            bodySection.content.startType !== ContentType.Text);

        const branchSerializeReason = getSectionSerializeReason(
          bodySection,
          kBranchSerializeReason,
        );
        const markerSerializeReason = getBindingSerializeReason(
          tagSection,
          nodeBinding,
        );

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        const forTagArgs = getBaseArgsInForTag(forType, forAttrs) as (
          | t.Expression
          | undefined
        )[];
        const forTagHTMLRuntime = branchSerializeReason
          ? forTypeToHTMLResumeRuntime(forType)
          : forTypeToRuntime(forType);
        forTagArgs.push(
          t.arrowFunctionExpression(params, t.blockStatement(bodyStatements)),
        );

        if (branchSerializeReason) {
          const skipParentEnd = onlyChildParentTagName && markerSerializeReason;
          const statefulSerializeArg = getSerializeGuard(
            getSectionSerializeReason(tagSection, kStatefulReason),
            !(skipParentEnd || singleNodeOptimization),
          );
          const markerSerializeArg = getSerializeGuard(
            markerSerializeReason,
            !statefulSerializeArg,
          );

          forTagArgs.push(
            forAttrs.by || t.numericLiteral(0),
            getScopeIdIdentifier(tagSection),
            getScopeAccessorLiteral(nodeBinding),
            getSerializeGuard(branchSerializeReason, !markerSerializeArg),
            markerSerializeArg,
            statefulSerializeArg,
          );

          if (skipParentEnd) {
            getParentTag(tag)!.node.extra![kSkipEndTag] = true;
            forTagArgs.push(t.stringLiteral(`</${onlyChildParentTagName}>`));
          }

          if (singleNodeOptimization) {
            if (!skipParentEnd) {
              forTagArgs.push(t.numericLiteral(0));
            }

            forTagArgs.push(t.numericLiteral(1));
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
          return;
        }

        setSectionParentIsOwner(bodySection, true);

        if (!getOnlyChildParentTagName(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }
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
        setClosureSignalBuilder(tag, (closure, render) => {
          return callRuntime(
            "_for_closure",
            getScopeAccessorLiteral(closure),
            getScopeAccessorLiteral(nodeRef),
            render,
          );
        });

        const forType = getForType(node)!;
        const signal = getSignal(tagSection, nodeRef, "for");
        signal.build = () => {
          return callRuntime(
            forTypeToDOMRuntime(forType),
            getScopeAccessorLiteral(nodeRef),
            t.identifier(bodySection.name),
          );
        };

        const forAttrs = getKnownAttrValues(node);
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
} satisfies Tag;

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

function forTypeToHTMLResumeRuntime(type: ForType) {
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

function forTypeToDOMRuntime(type: ForType) {
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
