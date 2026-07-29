import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import { detectForSelector, getForSelectorKey } from "../util/for-selector";
import { getAccessorPrefix, getAccessorProp } from "../util/get-accessor-char";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { getParentTag } from "../util/get-parent-tag";
import {
  getOnlyChildParentTagName,
  getOptimizedOnlyChildNodeBinding,
} from "../util/is-only-child-in-parent";
import { isPersisted, isPersistedEntryBuild } from "../util/marko-config";
import {
  isMembraneLive,
  sectionTreeHasNucleusInProgram,
} from "../util/membranes";
import {
  type Binding,
  BindingType,
  dropNodes,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  kBranchSerializeReason,
  mergeReferences,
  onFinalizeReferences,
  setBindingDownstream,
  trackParamsReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  ContentType,
  getBranchRendererArgs,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import { getSerializeGuard } from "../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
  isStateOnlySerializeReason,
  isStateSerializeReason,
  isStaticSerializeReason,
} from "../util/serialize-reasons";
import {
  addValue,
  getRegionSiteId,
  getResumeRegisterId,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  setClosureSignalBuilder,
  setSectionOwnerResumedByMarker,
  writeHTMLResumeStatements,
} from "../util/signals";
import { getMemberExpressionPropString } from "../util/to-property-name";
import {
  addUpdateMerge,
  getUpdateMerges,
  isReasonlessLoopSource,
  isUpdateRequestDerivedAnchor,
  isUpdateStructuralMerge,
  isClientGatedSection,
} from "../util/update-merges";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
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

    if (isAttrTag) return;

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
    if (
      byAttr?.type === "Identifier" &&
      !tag.scope.getBinding(byAttr.name) &&
      tag.node.body.params.some((param) =>
        Object.hasOwn(t.getBindingIdentifiers(param), byAttr.name),
      )
    ) {
      throw tag.hub.buildError(
        byAttr,
        `The \`by=\` attribute is evaluated before the loop runs, so \`${byAttr.name}\` is not in scope. Key with a property name string (\`by="id"\`) or a function (\`by=(${byAttr.name}) => key\`).`,
      );
    }

    const bodySection = startSection(tagBody);

    if (!bodySection) {
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

      const keyBinding = getLoopKeyBinding(byAttr, paramsBinding, forType!);
      if (keyBinding) {
        if (!byAttr) {
          keyBinding.type = BindingType.constant;
          keyBinding.scopeAccessor = getAccessorProp().LoopKey;
        }
        onFinalizeReferences(() => detectForSelector(bodySection, keyBinding));
      }
    }
    bodySection.sectionAccessor = {
      binding: nodeBinding,
      prefix: getAccessorPrefix().BranchScopes,
    };

    bodySection.upstreamExpression = tagExtra;
    bodySection.isBranch = true;
    bodySection.isLoopBody = true;
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
        const singleChild =
          bodySection.content?.singleChild &&
          bodySection.content.startType !== ContentType.Text;

        const branchSerializeReason = getSerializeReason(
          bodySection,
          kBranchSerializeReason,
        );
        const markerSerializeReason = getSerializeReason(
          tagSection,
          nodeBinding,
        );

        const statefulSerializeReason = getSerializeReason(
          tagSection,
          kStatefulReason,
        );
        if (
          (isPersisted() && isMembraneLive(tagSection)
            ? isStateOnlySerializeReason(statefulSerializeReason)
            : isStateSerializeReason(statefulSerializeReason)) &&
          isStaticSerializeReason(branchSerializeReason) &&
          isStaticSerializeReason(markerSerializeReason)
        ) {
          // Each branch id rides a resume marker with the parent scope id, and the
          // stateful loop keeps the branch-visiting signal, so link owner at resume.
          setSectionOwnerResumedByMarker(bodySection);
        }

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        const forTagArgs = getBaseArgsInForTag(forType, forAttrs) as (
          | t.Expression
          | undefined
        )[];
        // A loop with no resume-time branch reason whose body still
        // serializes (persisted holes/seeds) needs the resume-capable
        // runtime: the writer serializes its branch linkage on every
        // persisted render so update dispatch can pair each item.
        const persistedBranches =
          !branchSerializeReason &&
          isPersisted() &&
          sectionTreeHasNucleusInProgram(bodySection) &&
          bodySection.serializeReasons.size > 0;
        // A nucleus-free loop in a live section ships as one region: the
        // plain flavor renders inside a `_region` wrapper that marks
        // (documents) or captures (patches) the whole loop's range. Even a
        // constant loop must wrap — inlined dynamic calls would defeat the
        // enclosing section's values-free shell extraction, making live
        // ancestors silently unconstructible.
        const regionLoop =
          isPersisted() &&
          isMembraneLive(tagSection) &&
          !isMembraneLive(bodySection);
        const serializedLoop =
          (!!branchSerializeReason && !regionLoop) || persistedBranches;
        const forTagHTMLRuntime = serializedLoop
          ? forTypeToHTMLResumeRuntime(forType)
          : forTypeToRuntime(forType);
        forTagArgs.push(
          t.arrowFunctionExpression(params, t.blockStatement(bodyStatements)),
        );

        if (serializedLoop) {
          const skipParentEnd = onlyChildParentTagName && markerSerializeReason;
          const statefulSerializeArg = getSerializeGuard(
            tagSection,
            getSerializeReason(tagSection, kStatefulReason),
            !(skipParentEnd || singleChild),
          );
          const markerSerializeArg = getSerializeGuard(
            tagSection,
            markerSerializeReason,
            !statefulSerializeArg,
          );

          forTagArgs.push(
            forAttrs.by || t.numericLiteral(0),
            getScopeIdIdentifier(tagSection),
            getScopeAccessorLiteral(nodeBinding),
            getSerializeGuard(
              tagSection,
              branchSerializeReason,
              !markerSerializeArg,
            ),
            markerSerializeArg,
            statefulSerializeArg,
          );

          // The construct id keys the body section's wire shell so fresh
          // items (keyed, or stable under a constructed parent) build
          // client-side from values-free template/walks.
          const forAnchorId =
            isPersisted() && bodySection && isMembraneLive(bodySection)
              ? getResumeRegisterId(bodySection, "update")
              : undefined;
          if (skipParentEnd) {
            getParentTag(tag)!.node.extra![kSkipEndTag] = true;
            forTagArgs.push(t.stringLiteral(`</${onlyChildParentTagName}>`));
          } else if (forAnchorId !== undefined) {
            forTagArgs.push(t.numericLiteral(0));
          }

          if (singleChild) {
            if (!skipParentEnd && forAnchorId === undefined) {
              forTagArgs.push(t.numericLiteral(0));
            }

            forTagArgs.push(t.numericLiteral(1));
          } else if (forAnchorId !== undefined) {
            forTagArgs.push(t.numericLiteral(0));
          }

          if (forAnchorId !== undefined) {
            forTagArgs.push(t.stringLiteral(forAnchorId));
          }
        }

        statements.push(
          t.expressionStatement(
            regionLoop
              ? callRuntime(
                  "_region",
                  t.arrowFunctionExpression(
                    [],
                    t.blockStatement([
                      t.expressionStatement(
                        callRuntime(forTagHTMLRuntime, ...forTagArgs),
                      ),
                    ]),
                  ),
                  getScopeIdIdentifier(tagSection),
                  getScopeAccessorLiteral(nodeBinding),
                  t.stringLiteral(getRegionSiteId()),
                )
              : callRuntime(forTagHTMLRuntime, ...forTagArgs),
          ),
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
          const selectorKeyBinding = getForSelectorKey(bodySection, closure);
          if (selectorKeyBinding) {
            return callRuntime(
              "_for_selector",
              getScopeAccessorLiteral(nodeRef, true),
              getScopeAccessorLiteral(closure, true),
              getScopeAccessorLiteral(selectorKeyBinding, true),
              render,
            );
          }
          return callRuntime(
            "_for_closure",
            getScopeAccessorLiteral(nodeRef, true),
            render,
          );
        });

        const forType = getForType(node)!;
        const forAttrs = getKnownAttrValues(node);
        const signal = getSignal(tagSection, nodeRef, "for");
        const loopSourceExprs = getBaseArgsInForTag(forType, forAttrs).filter(
          Boolean,
        ) as t.Expression[];
        const isRequestDerived = isUpdateRequestDerivedAnchor(
          tagExtra,
          loopSourceExprs,
          isReasonlessLoopSource,
        );
        if (
          (isPersisted() && !isMembraneLive(bodySection)) ||
          isUpdateStructuralMerge(
            tagExtra,
            [bodySection],
            loopSourceExprs,
            isReasonlessLoopSource,
          ) ||
          // A loop with no structural reason still dispatches when its body
          // carries update merges (patch-only branch tracking pairs items).
          (isPersisted() && getUpdateMerges(bodySection).length > 0)
        ) {
          addUpdateMerge(
            tagSection,
            isMembraneLive(bodySection)
              ? {
                  kind: "for",
                  accessor: getScopeAccessorLiteral(nodeRef),
                  encodedAccessor: getScopeAccessorLiteral(nodeRef, true),
                  bodySection,
                  anchorId: isRequestDerived
                    ? getResumeRegisterId(bodySection, "update")
                    : undefined,
                }
              : // Nucleus-free rows swap wholesale from a response shell.
                {
                  kind: "region",
                  accessor: getScopeAccessorLiteral(nodeRef),
                },
          );
          // The guard is only sound when the merge actually registered
          // (`addUpdateMerge` drops merges for membrane-dead sections) AND
          // patches can dispatch it: below a client-state gate only the
          // construct pass reaches this section's merges, so the closure
          // chain is the patch-time carrier and must not be starved.
          signal.updateGuard =
            isMembraneLive(tagSection) && !isClientGatedSection(tagSection);
        }
        signal.build = () => {
          const rendererArgs = replaceNullishAndEmptyFunctionsWith0(
            getBranchRendererArgs(bodySection),
          );
          if (
            !(isRequestDerived && isPersistedEntryBuild()) ||
            // Below a client-state gate the keyed merge is only reachable
            // from the construct pass; the reactive loop signal is the
            // patch-time carrier and must stay live in the entry.
            isClientGatedSection(tagSection)
          ) {
            return callRuntime(
              forTypeToDOMRuntime(forType),
              getScopeAccessorLiteral(nodeRef, true),
              ...rendererArgs,
            );
          }

          return t.numericLiteral(0);
        };

        const loopArgs = getBaseArgsInForTag(forType, forAttrs);
        if (forAttrs.by) {
          loopArgs.push(forAttrs.by);
        }

        // Construct path: adopted branch list via the structural loop merge.
        addValue(
          tagSection,
          referencedBindings,
          signal,
          t.arrayExpression(loopArgs),
          "structural",
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
  const chain: string[] = [];
  let cur = node;
  while (
    cur.type === "MemberExpression" ||
    cur.type === "OptionalMemberExpression"
  ) {
    const property = getMemberExpressionPropString(cur);
    if (property === undefined) return;
    chain.push(property);
    cur = cur.object;
  }

  if (cur.type === "Identifier" && cur.name === rootName) {
    return chain.reverse();
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
