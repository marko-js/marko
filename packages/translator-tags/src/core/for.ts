import {
  assertAllowedAttributes,
  assertNoVar,
  getTagDef,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { AccessorChar, WalkCode } from "@marko/runtime-tags/common/types";

import { isStatefulReferences } from "../util/is-stateful";
import { isOutputHTML } from "../util/marko-config";
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
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { currentProgramPath } from "../visitors/program";
import {
  kNativeTagBinding,
  kSerializeMarker,
} from "../visitors/tag/native-tag";

const kForMarkerBinding = Symbol("for marker binding");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kForMarkerBinding]?: Binding;
  }
}

export default {
  analyze(tag) {
    validateFor(tag);

    const isOnlyChild = checkOnlyChild(tag);
    const tagExtra = (tag.node.extra ??= {});
    const tagBody = tag.get("body");
    const section = getOrCreateSection(tag);
    const bodySection = startSection(tagBody)!;

    if (isOnlyChild) {
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
    tagExtra.singleNodeOptimization = tag.node.body.body.length === 1;
  },
  translate: {
    enter(tag) {
      const tagBody = tag.get("body");
      const bodySection = getSection(tagBody);
      const tagExtra = tag.node.extra!;
      const { singleNodeOptimization, isOnlyChild } = tagExtra;
      const isStateful = isStatefulReferences(tagExtra.referencedBindings);
      const hasNestedAttributeTags =
        tagExtra.nestedAttributeTags &&
        Object.keys(tagExtra.nestedAttributeTags).length > 0;
      if (!isOnlyChild) {
        walks.visit(tag, WalkCode.Replace);
        walks.enterShallow(tag);
      }
      if (isOutputHTML()) {
        writer.flushBefore(tag);
        if (isStateful && !singleNodeOptimization && !hasNestedAttributeTags) {
          writer.writeTo(tagBody)`${callRuntime(
            "markResumeScopeStart",
            getScopeIdIdentifier(bodySection),
          )}`;
        }
      }
    },
    exit(tag) {
      if (isOutputHTML()) {
        translateHTML.exit(tag);
      } else {
        translateDOM.exit(tag);
      }
    },
  },
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
      snippet:
        "for|${1:index}| from=${2:number} to=${3:number} step=${4:number}",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-between-a-range-of-numbers",
    },
  ],
} as Tag;

const translateDOM = {
  exit(tag: t.NodePath<t.MarkoTag>) {
    const tagBody = tag.get("body");
    const tagSection = getSection(tag);
    const bodySection = getSection(tagBody);
    const { node } = tag;
    const { attributes } = node;
    const { isOnlyChild, referencedBindings } = node.extra!;
    const nodeRef = isOnlyChild
      ? tag.parentPath.parent.extra![kNativeTagBinding]!
      : tag.node.extra![kForMarkerBinding]!;

    setSubscriberBuilder(tag, (signal: t.Expression) => {
      return callRuntime(
        "inLoopScope",
        signal,
        getScopeAccessorLiteral(nodeRef),
      );
    });

    tag.remove();

    const rendererId = t.identifier(bodySection.name);
    const ofAttr = findName(attributes, "of");
    const toAttr = findName(attributes, "to");
    const inAttr = findName(attributes, "in");
    const loopArgs: t.Expression[] = [];
    let loopKind: "loopOf" | "loopIn" | "loopTo";

    if (ofAttr) {
      loopKind = "loopOf";
      loopArgs.push(ofAttr.value);
    } else if (inAttr) {
      loopKind = "loopIn";
      loopArgs.push(inAttr.value);
    } else if (toAttr) {
      const fromAttr = findName(attributes, "from");
      const stepAttr = findName(attributes, "step");
      loopKind = "loopTo";
      loopArgs.push(
        toAttr.value,
        fromAttr ? fromAttr.value : t.numericLiteral(0),
        stepAttr ? stepAttr.value : t.numericLiteral(1),
      );
    }

    const byAttr = findName(attributes, "by");
    if (byAttr) {
      loopArgs.push(byAttr.value);
    }

    const signal = getSignal(tagSection, nodeRef, "for");
    signal.build = () => {
      return callRuntime(
        loopKind,
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

    addValue(
      tagSection,
      referencedBindings,
      signal,
      t.arrayExpression(loopArgs),
    );
  },
};

const translateHTML = {
  exit(tag: t.NodePath<t.MarkoTag>) {
    const tagBody = tag.get("body");
    const tagSection = getSection(tag);
    const bodySection = getSection(tagBody);
    const { node } = tag;
    const {
      attributes,
      body: { body, params },
    } = node;
    const tagExtra = node.extra!;
    const { singleNodeOptimization, isOnlyChild } = tagExtra;
    const isStateful = isStatefulReferences(tagExtra.referencedBindings);
    const hasNestedAttributeTags =
      tagExtra.nestedAttributeTags &&
      Object.keys(tagExtra.nestedAttributeTags).length > 0;
    const nodeRef = isOnlyChild
      ? tag.parentPath.parent.extra![kNativeTagBinding]!
      : tag.node.extra![kForMarkerBinding]!;
    const ofAttr = findName(attributes, "of");
    const inAttr = findName(attributes, "in");
    const toAttr = findName(attributes, "to");
    const byAttr = findName(attributes, "by");
    const block = t.blockStatement(body);
    const write = writer.writeTo(tag);
    const replacement: t.Node[] = [];
    const hasStatefulClosures = checkStatefulClosures(bodySection, true);
    let byParams: t.Expression[];
    let keyExpression: t.Expression | undefined = t.identifier("NOO");

    if (isStateful && isOnlyChild) {
      tag.parentPath.parent.extra![kSerializeMarker] = true;
    }

    if (isStateful || hasStatefulClosures) {
      setForceResumeScope(bodySection);
    }

    if (byAttr && isStateful) {
      const byIdentifier = currentProgramPath.scope.generateUidIdentifier("by");
      replacement.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(byIdentifier, byAttr.value!),
        ]),
      );
      byParams = [];
      keyExpression = t.callExpression(byIdentifier, byParams);
    }

    if (inAttr) {
      const [keyParam, valParam] = params;

      keyExpression = keyParam as t.Identifier;

      if (valParam) {
        // TODO: account for keyParam being a non identifier.
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              valParam,
              t.memberExpression(inAttr.value!, keyParam as t.Identifier, true),
            ),
          ]),
        );
      }

      replacement.push(
        t.forInStatement(
          t.variableDeclaration("const", [t.variableDeclarator(keyParam)]),
          inAttr.value!,
          block,
        ),
      );
    } else if (ofAttr) {
      let ofAttrValue = ofAttr.value!;
      // eslint-disable-next-line prefer-const
      let [valParam, indexParam, loopParam] = params;

      if (!t.isIdentifier(valParam) && byParams!) {
        const tempValParam =
          currentProgramPath.scope.generateUidIdentifier("v");
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(valParam, tempValParam),
          ]),
        );
        valParam = tempValParam;
      }

      if (indexParam || isStateful || hasStatefulClosures) {
        indexParam ??= currentProgramPath.scope.generateUidIdentifier("i");
        const indexName = tag.scope.generateUidIdentifierBasedOnNode(
          indexParam,
          "i",
        );
        replacement.push(
          t.variableDeclaration("let", [
            t.variableDeclarator(indexName, t.numericLiteral(0)),
          ]),
        );

        block.body.unshift(
          t.variableDeclaration("let", [
            t.variableDeclarator(
              indexParam,
              t.updateExpression("++", indexName),
            ),
          ]),
        );
      }

      if (loopParam) {
        if (t.isIdentifier(loopParam)) {
          ofAttrValue = loopParam;
        }

        replacement.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(loopParam, ofAttr.value),
          ]),
        );
      }

      if (byParams!) {
        byParams.push(valParam as t.Identifier, indexParam as t.Identifier);
      } else {
        keyExpression = indexParam as t.Identifier;
      }

      replacement.push(
        t.forOfStatement(
          t.variableDeclaration("const", [t.variableDeclarator(valParam)]),
          ofAttrValue,
          block,
        ),
      );
    } else if (toAttr) {
      const stepValue =
        findName(attributes, "step")?.value ?? t.numericLiteral(1);
      const fromValue =
        findName(attributes, "from")?.value ?? t.numericLiteral(0);
      let [indexParam] = params;
      const stepsName = tag.scope.generateUidIdentifier("steps");
      const indexName = tag.scope.generateUidIdentifier("i");
      const stepName = tag.scope.generateUidIdentifier("step");
      const fromName = tag.scope.generateUidIdentifier("from");

      if (indexParam || isStateful || hasStatefulClosures) {
        indexParam ??= currentProgramPath.scope.generateUidIdentifier("i");
        keyExpression = indexParam as t.Identifier;
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              indexParam,
              t.binaryExpression(
                "+",
                fromName,
                t.binaryExpression("*", indexName, stepName),
              ),
            ),
          ]),
        );
      }

      replacement.push(
        t.forStatement(
          t.variableDeclaration("let", [
            t.variableDeclarator(
              fromName,
              t.logicalExpression("??", fromValue, t.numericLiteral(0)),
            ),
            t.variableDeclarator(
              stepName,
              t.logicalExpression("??", stepValue, t.numericLiteral(1)),
            ),
            t.variableDeclarator(
              stepsName,
              t.binaryExpression(
                "/",
                t.binaryExpression("-", toAttr.value, fromName),
                stepName,
              ),
            ),
            t.variableDeclarator(indexName, t.numericLiteral(0)),
          ]),
          t.binaryExpression("<=", indexName, stepsName),
          t.updateExpression("++", indexName),
          block,
        ),
      );
    }

    if ((isStateful || hasStatefulClosures) && !hasNestedAttributeTags) {
      const forScopeIdsIdentifier =
        tag.scope.generateUidIdentifier("forScopeIds");
      const forScopesIdentifier = getScopeIdentifier(bodySection);

      replacement.unshift(
        t.variableDeclaration(
          "const",
          [
            isStateful &&
              singleNodeOptimization &&
              t.variableDeclarator(
                forScopeIdsIdentifier,
                t.arrayExpression([]),
              ),
            t.variableDeclarator(
              forScopesIdentifier,
              t.newExpression(t.identifier("Map"), []),
            ),
          ].filter(Boolean) as t.VariableDeclarator[],
        ),
      );

      if (isStateful) {
        if (singleNodeOptimization) {
          block.body.push(
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

    if (isStateful || hasStatefulClosures) {
      tag.node.body.body.push(
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
        ) as any,
      );
    }

    tag.replaceWithMultiple(replacement);
  },
};

function findName(
  arr: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
  value: string,
) {
  return arr.find((obj) => t.isMarkoAttribute(obj) && obj.name === value);
}

function validateFor(tag: t.NodePath<t.MarkoTag>) {
  const attrs = tag.node.attributes;
  const hasParams = tag.node.body.params.length > 0;

  assertNoVar(tag);

  if (findName(attrs, "of")) {
    assertAllowedAttributes(tag, ["of", "by"]);
    if (!hasParams) {
      throw tag.buildCodeFrameError(
        "Invalid `for of` tag, missing `|value, index|` params.",
      );
    }
  } else if (findName(attrs, "in")) {
    assertAllowedAttributes(tag, ["in", "by"]);
    if (!hasParams) {
      throw tag.buildCodeFrameError(
        "Invalid `for in` tag, missing `|key, value|` params.",
      );
    }
  } else if (findName(attrs, "to")) {
    assertAllowedAttributes(tag, ["from", "to", "step", "by"]);
  } else {
    throw tag.buildCodeFrameError(
      "Invalid `for` tag, missing an `of=`, `in=` or `to=` attribute.",
    );
  }
}

function checkOnlyChild(tag: t.NodePath<t.MarkoTag>) {
  const extra = tag.node.extra!;
  if (
    t.isMarkoTag(tag.parentPath?.parent) &&
    getTagDef(tag.parentPath!.parentPath! as t.NodePath<t.MarkoTag>)?.html
  ) {
    return (extra.isOnlyChild =
      (tag.parent as t.MarkoTagBody).body.length === 1);
  }
  return (extra.isOnlyChild = false);
}
