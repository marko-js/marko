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
  getBranchSectionAccessor,
  initBranchSection,
  resumeOwnerByMarkerWhenStatic,
} from "../util/branch-tag";
import { detectForSelector, getForSelectorKey } from "../util/for-selector";
import { getAccessorProp } from "../util/get-accessor-enums";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { getParentTag } from "../util/get-parent-tag";
import {
  getOnlyChildParentTagName,
  getOptimizedOnlyChildNodeBinding,
} from "../util/is-only-child-in-parent";
import { isPersisted } from "../util/marko-config";
import {
  isPatchCaptureSection,
  recordPersistedServerRequiredExpr,
} from "../util/persisted";
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
import {
  addRuntimeFeatureAsset,
  callRuntime,
  importRuntimeFeature,
} from "../util/runtime";
import {
  ContentType,
  getBranchRendererArgs,
  getDirectClosures,
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
  addSerializeReason,
  getSerializeReason,
  getSerializeSourcesForRef,
} from "../util/serialize-reasons";
import { getShellId, isShellDropped, recordShellRoot } from "../util/shell";
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

      const keyBinding = getLoopKeyBinding(byAttr, paramsBinding, forType!);
      if (keyBinding) {
        if (!byAttr) {
          keyBinding.type = BindingType.constant;
          keyBinding.scopeAccessor = getAccessorProp().LoopKey;
        }
        onFinalizeReferences(() => detectForSelector(bodySection, keyBinding));
      }
    }
    initBranchSection(
      bodySection,
      tagExtra,
      getBranchSectionAccessor(nodeBinding),
    );

    if (isPersisted() && isPatchCaptureSection(tagSection)) {
      addRuntimeFeatureAsset(tag.hub.file, "patch-loop");
      // The loop's inputs drive structure: call sites reject feeding them
      // from client-owned values.
      recordPersistedServerRequiredExpr(tagSection, tagExtra);
      // A patch can target the loop's CONTENT even when the list itself is
      // static, so whatever could update the items (their closure sources)
      // is a marker resume reason: the entry anchors there.
      onFinalizeReferences(() => {
        addSerializeReason(
          tagSection,
          !!(bodySection.isHoistThrough || bodySection.hoisted) ||
            getSerializeSourcesForRef(getDirectClosures(bodySection)),
          nodeBinding,
        );
      });
      // The item body's shell builds at program analyze exit, once child
      // bindings exist; record the root here.
      recordShellRoot(bodySection);
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
        // A patchable loop keeps its markers: item pairing and insertion
        // anchor at branch marks, which elision would remove.
        const persistedPatch =
          isPersisted() && isPatchCaptureSection(tagSection);
        const singleChild =
          !persistedPatch &&
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
          const skipParentEnd =
            !persistedPatch && onlyChildParentTagName && markerSerializeReason;
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

          if (skipParentEnd) {
            getParentTag(tag)!.node.extra![kSkipEndTag] = true;
            forTagArgs.push(t.stringLiteral(`</${onlyChildParentTagName}>`));
          }

          if (singleChild) {
            if (!skipParentEnd) {
              forTagArgs.push(t.numericLiteral(0));
            }

            forTagArgs.push(t.numericLiteral(1));
          }

          if (persistedPatch) {
            // The item body's shell id, so patches can construct additions;
            // a bare `0` makes any addition reject the patch. (`singleChild`
            // and `skipParentEnd` are forced off above, so the two optional
            // marker args are always the unset placeholders here.)
            const id = !isShellDropped(bodySection) && getShellId(bodySection);
            forTagArgs.push(
              undefined,
              undefined,
              id && tag.hub.file.metadata.marko.persistedShells?.[id]
                ? t.stringLiteral(id)
                : t.numericLiteral(0),
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
          return;
        }

        if (isPersisted() && isPatchCaptureSection(getSection(tag))) {
          // An interactive page receives assets transitively through its
          // dom program, so the feature import rides both outputs.
          importRuntimeFeature("patch-loop");
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
        const signal = getSignal(tagSection, nodeRef, "for");
        signal.build = () => {
          return callRuntime(
            forTypeToBranchRuntime(forType),
            getScopeAccessorLiteral(nodeRef, true),
            ...replaceNullishAndEmptyFunctionsWith0(
              getBranchRendererArgs(bodySection),
            ),
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
