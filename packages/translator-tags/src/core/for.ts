import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoVar,
  getTagDef,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { AccessorChar, WalkCode } from "@marko/runtime-tags/common/types";

import { getKnownAttrValues } from "../util/get-known-attr-values";
import { isStatefulReferences } from "../util/is-stateful";
import analyzeAttributeTags from "../util/nested-attribute-tags";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  checkStatefulClosures,
  getOrCreateSection,
  getScopeIdentifier,
  getScopeIdIdentifier,
  getSection,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  addValue,
  getClosures,
  getSerializedScopeProperties,
  getSignal,
  setForceResumeScope,
  setSubscriberBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { currentProgramPath } from "../visitors/program";
import {
  kNativeTagBinding,
  kSerializeMarker,
} from "../visitors/tag/native-tag";

type ForType = "in" | "of" | "to";
const kForMarkerBinding = Symbol("for marker binding");
const kForScopeStartIndex = Symbol("for scope start index");
const kOnlyChildInParent = Symbol("only child in parent");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kForMarkerBinding]?: Binding;
    [kForScopeStartIndex]?: t.Identifier;
    [kOnlyChildInParent]?: boolean;
  }
}

export default {
  analyze(tag) {
    validateFor(tag);
    const tagExtra = (tag.node.extra ??= {});
    const tagBody = tag.get("body");
    const section = getOrCreateSection(tag);
    const bodySection = startSection(tagBody)!;

    if (isOnlyChildInParent(tag)) {
      const parentTag = tag.parentPath.parent as t.MarkoTag;
      const parentTagName = (parentTag.name as t.StringLiteral)?.value;
      (parentTag.extra ??= {})[kNativeTagBinding] ??= createBinding(
        "#" + parentTagName,
        BindingType.dom,
        section,
      );
    } else {
      tagExtra[kForMarkerBinding] = createBinding(
        "#text",
        BindingType.dom,
        section,
      );
    }

    trackParamsReferences(tagBody, BindingType.param, undefined, tagExtra);
    analyzeAttributeTags(tag);
    mergeReferences(
      tag,
      tag.node.attributes.map((attr) => attr.value),
    );
    bodySection.upstreamExpression = tagExtra;
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSection(tagBody);
        const tagExtra = tag.node.extra!;
        const isStateful = isStatefulReferences(tagExtra.referencedBindings);
        const hasNestedAttributeTags =
          tagExtra.nestedAttributeTags &&
          Object.keys(tagExtra.nestedAttributeTags).length > 0;
        setSectionParentIsOwner(bodySection, true);
        if (!isOnlyChildInParent(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }

        writer.flushBefore(tag);
        if (
          isStateful &&
          !bodySection.content?.singleChild &&
          !hasNestedAttributeTags
        ) {
          tagExtra[kForScopeStartIndex] = tag.scope.generateUidIdentifier("k");
          writer.writeTo(tagBody)`${callRuntime(
            "markResumeScopeStart",
            getScopeIdIdentifier(bodySection),
            t.updateExpression("++", tagExtra[kForScopeStartIndex]),
          )}`;
        }
      },
      exit(tag) {
        translateHTMLExit(tag);
      },
    },
    dom: {
      enter(tag) {
        setSectionParentIsOwner(getSection(tag.get("body")), true);
        if (!isOnlyChildInParent(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }
      },
      exit(tag) {
        translateDOMExit(tag);
      },
    },
  }),
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
            "The amount to increment during each interation (with from/to)",
        },
      ],
    },
  },
  autocomplete: [
    {
      snippet: "for|${1:value, index}| of=${3:array}",
      description:
        "Use to iterate over lists, object properties, or between ranges.",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-over-a-list",
    },
    {
      snippet: "for|${1:name, value}| in=${3:object}",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-over-an-objects-properties",
    },
    {
      snippet: "for|${1:index}| to=${2:number}",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-between-a-range-of-numbers",
    },
  ],
} satisfies Tag;

function translateDOMExit(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const tagSection = getSection(tag);
  const bodySection = getSection(tagBody);
  const { node } = tag;
  const tagExtra = node.extra!;
  const { referencedBindings } = tagExtra;
  const nodeRef = isOnlyChildInParent(tag)
    ? tag.parentPath.parent.extra![kNativeTagBinding]!
    : tag.node.extra![kForMarkerBinding]!;
  setSubscriberBuilder(tag, (signal: t.Expression) => {
    return callRuntime("inLoopScope", signal, getScopeAccessorLiteral(nodeRef));
  });

  const rendererId = t.identifier(bodySection.name);
  const forType = getForType(node)!;
  const signal = getSignal(tagSection, nodeRef, "for");
  signal.build = () => {
    return callRuntime(
      forTypeToDOMRuntime(forType),
      getScopeAccessorLiteral(nodeRef),
      rendererId,
    );
  };

  const paramIdentifiers = Object.values(
    tagBody.getBindingIdentifiers(),
  ) as t.Identifier[];

  signal.hasDownstreamIntersections = () => {
    if (getClosures(bodySection).length > 0) {
      return true;
    }

    if (paramIdentifiers.length) {
      const binding = paramIdentifiers[0].extra!.binding!;
      for (const { referencedBindings } of binding.downstreamExpressions) {
        if (
          getSignal(
            bodySection,
            referencedBindings,
          ).hasDownstreamIntersections()
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const forAttrs = getKnownAttrValues(node);
  const loopArgs = getBaseArgsInForTag(forType, forAttrs);
  if (forAttrs.by) {
    loopArgs.push(forAttrs.by);
  }

  addValue(tagSection, referencedBindings, signal, t.arrayExpression(loopArgs));

  tag.remove();
}

function translateHTMLExit(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const tagSection = getSection(tag);
  const bodySection = getSection(tagBody);
  const { node } = tag;
  const tagExtra = node.extra!;
  const isStateful = isStatefulReferences(tagExtra.referencedBindings);
  const nodeRef = isOnlyChildInParent(tag)
    ? tag.parentPath.parent.extra![kNativeTagBinding]!
    : tag.node.extra![kForMarkerBinding]!;
  const forAttrs = getKnownAttrValues(node);
  const forType = getForType(node)!;
  const params = node.body.params;
  const statements: t.Statement[] = [];
  const bodyStatements = node.body.body as t.Statement[];
  const hasStatefulClosures = checkStatefulClosures(bodySection, true);
  const hasNestedAttributeTags =
    tagExtra.nestedAttributeTags &&
    Object.keys(tagExtra.nestedAttributeTags).length > 0;
  let keyExpression: t.Expression | undefined;

  if (isStateful && isOnlyChildInParent(tag)) {
    tag.parentPath.parent.extra![kSerializeMarker] = true;
  }

  if (isStateful || hasStatefulClosures) {
    setForceResumeScope(bodySection);
  }

  if (tagExtra[kForScopeStartIndex]) {
    statements.push(
      t.variableDeclaration("let", [
        t.variableDeclarator(
          tagExtra[kForScopeStartIndex],
          t.numericLiteral(0),
        ),
      ]),
    );
  }

  if ((isStateful || hasStatefulClosures) && !hasNestedAttributeTags) {
    const singleNodeOptimization =
      bodySection.content === null || bodySection.content.singleChild;
    const defaultParamNames = (
      {
        of: ["list", "index"],
        in: ["key", "value"],
        to: ["value"],
      } as const
    )[forType];
    const defaultByParamIndex = forType === "of" ? 1 : 0;
    const requiredParamsIndex = forAttrs.by
      ? defaultParamNames.length - 1
      : defaultByParamIndex;

    for (let i = 0; i <= requiredParamsIndex; i++) {
      const existingParam = params[i];
      if (!existingParam || !t.isIdentifier(existingParam)) {
        const id = (params[i] = currentProgramPath.scope.generateUidIdentifier(
          defaultParamNames[i],
        ));

        if (existingParam) {
          bodyStatements.unshift(
            t.variableDeclaration("let", [
              t.variableDeclarator(existingParam, id),
            ]),
          );
        }
      }
    }

    if (forAttrs.by) {
      // TODO: handle `by` being undefined or a string.
      const byIdentifier = currentProgramPath.scope.generateUidIdentifier("by");
      statements.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(byIdentifier, forAttrs.by),
        ]),
      );
      keyExpression = t.callExpression(byIdentifier, params as t.Identifier[]);
    } else {
      keyExpression = params[defaultByParamIndex] as t.Identifier;
    }

    const write = writer.writeTo(tag);
    const forScopeIdsIdentifier =
      tag.scope.generateUidIdentifier("forScopeIds");
    const forScopesIdentifier = getScopeIdentifier(bodySection);

    statements.push(
      t.variableDeclaration(
        "const",
        [
          isStateful &&
            singleNodeOptimization &&
            t.variableDeclarator(forScopeIdsIdentifier, t.arrayExpression([])),
          t.variableDeclarator(
            forScopesIdentifier,
            t.newExpression(t.identifier("Map"), []),
          ),
        ].filter(Boolean) as t.VariableDeclarator[],
      ),
    );

    if (isStateful) {
      if (singleNodeOptimization) {
        bodyStatements.push(
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(forScopeIdsIdentifier, t.identifier("push")),
              [getScopeIdIdentifier(bodySection)],
            ),
          ),
        );
        write`${callRuntime(
          "markResumeControlSingleNodeEnd",
          getScopeIdIdentifier(tagSection),
          getScopeAccessorLiteral(nodeRef),
          forScopeIdsIdentifier,
        )}`;
      } else {
        write`${callRuntime(
          "markResumeControlEnd",
          getScopeIdIdentifier(tagSection),
          getScopeAccessorLiteral(nodeRef),
        )}`;
      }
    }
    getSerializedScopeProperties(tagSection).set(
      t.stringLiteral(
        getScopeAccessorLiteral(nodeRef).value + AccessorChar.LoopScopeMap,
      ),
      t.conditionalExpression(
        t.memberExpression(forScopesIdentifier, t.identifier("size")),
        forScopesIdentifier,
        t.identifier("undefined"),
      ),
    );
  }

  writer.flushInto(tag);
  // TODO: this is a hack to get around the fact that we don't have a way to
  // know if a scope requires dynamic subscriptions
  setSubscriberBuilder(tag, (() => {}) as any);
  writeHTMLResumeStatements(tagBody);

  if (keyExpression && (isStateful || hasStatefulClosures)) {
    bodyStatements.push(
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(
            getScopeIdentifier(bodySection),
            t.identifier("set"),
          ),
          [
            keyExpression!,
            callRuntime("getScopeById", getScopeIdIdentifier(bodySection)),
          ],
        ),
      ),
    );
  }

  statements.push(
    buildForRuntimeCall(forType, forAttrs, params, bodyStatements),
  );

  for (const replacement of tag.replaceWithMultiple(statements)) {
    replacement.skip();
  }
}

function validateFor(tag: t.NodePath<t.MarkoTag>) {
  const tagExtra = (tag.node.extra ??= {});
  const isAttrTag =
    tagExtra.nestedAttributeTags &&
    Object.keys(tagExtra.nestedAttributeTags).length > 0;

  let allowAttrs: string[];
  assertNoVar(tag);
  assertNoArgs(tag);

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
    default:
      throw tag.buildCodeFrameError(
        "Invalid `for` tag, missing an `of=`, `in=`, `to=` attribute.",
      );
  }

  if (!isAttrTag) {
    allowAttrs.push("by");
  }

  assertAllowedAttributes(tag, allowAttrs);
}

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
  }
}

function forTypeToDOMRuntime(type: ForType) {
  switch (type) {
    case "of":
      return "loopOf";
    case "in":
      return "loopIn";
    case "to":
      return "loopTo";
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
  }
}

function isOnlyChildInParent(tag: t.NodePath<t.MarkoTag>) {
  const extra = tag.node.extra!;
  if (extra[kOnlyChildInParent] !== undefined) {
    return extra[kOnlyChildInParent];
  }

  if (
    t.isMarkoTag(tag.parentPath?.parent) &&
    getTagDef(tag.parentPath!.parentPath! as t.NodePath<t.MarkoTag>)?.html
  ) {
    return (extra[kOnlyChildInParent] =
      (tag.parent as t.MarkoTagBody).body.length === 1);
  }
  return (extra[kOnlyChildInParent] = false);
}
