import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import {
  Tag,
  assertAllowedAttributes,
  assertNoVar,
  getTagDef,
} from "@marko/babel-utils";
import * as writer from "../util/writer";
import * as walks from "../util/walks";
import {
  getSignal,
  initSource,
  setSubscriberBuilder,
  subscribe,
  writeHTMLHydrateStatements,
  getComputeFn,
  getSerializedScopeProperties,
} from "../util/signals";
import {
  getOrCreateSectionId,
  getScopeIdentifier,
  getScopeIdIdentifier,
  getSectionId,
} from "../util/sections";
import {
  ReserveType,
  reserveScope,
  countReserves,
  Reserve,
  getNodeLiteral,
} from "../util/reserve";
import { callRuntime, importRuntime } from "../util/runtime";
import analyzeAttributeTags from "../util/nested-attribute-tags";
import customTag from "../visitors/tag/custom-tag";
import type { ReferenceGroup } from "../util/references";
import { scopeIdentifier } from "../visitors/program";

export default {
  analyze: {
    enter(tag) {
      const isOnlyChild = checkOnlyChild(tag);
      const parentTag = (
        isOnlyChild ? tag.parentPath.parent : undefined
      ) as t.MarkoTag;
      const parentTagName = (parentTag?.name as t.StringLiteral)?.value;
      reserveScope(
        ReserveType.Visit,
        getOrCreateSectionId(tag),
        isOnlyChild ? parentTag : tag.node,
        "for",
        isOnlyChild ? `#${parentTagName}` : "#text"
      );
      customTag.analyze.enter(tag);
    },
    exit(tag) {
      analyzeAttributeTags(tag);

      tag.node.extra.isStateful = tag.node.attributes.some(
        (attr) => attr.extra?.valueReferences?.references
      );
      tag.node.extra.singleNodeOptimization = tag.node.body.body.length === 1;
    },
  },
  translate: {
    enter(tag) {
      validateFor(tag);

      if (
        !isOutputHTML() &&
        Object.keys(tag.node.extra.nestedAttributeTags).length
      ) {
        tag.remove();
        return;
      }

      const {
        extra: { isOnlyChild },
      } = tag.node;
      if (!isOnlyChild) {
        walks.visit(tag, walks.WalkCodes.Replace);
        walks.enterShallow(tag);
      }
      if (isOutputHTML()) {
        writer.flushBefore(tag);
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
    const bodySectionId = getSectionId(tag.get("body"));
    const sectionId = getSectionId(tag);
    const { node } = tag;
    const {
      attributes,
      body: { params },
      extra: { isOnlyChild },
    } = node;
    const paramsPath = tag.get("body").get("params");
    const {
      extra: { reserve },
    } = isOnlyChild ? (tag.parentPath.parent as t.MarkoTag) : tag.node;
    const ofAttr = findName(attributes, "of");
    const byAttr = findName(attributes, "by");

    setSubscriberBuilder(tag, (signal: t.Expression) => {
      return callRuntime("inLoopScope", signal, getNodeLiteral(reserve!));
    });

    if (ofAttr) {
      const ofAttrValue = ofAttr.value!;
      const [valParam] = params;

      // TODO: support patterns/rest
      if (!t.isIdentifier(valParam)) {
        throw tag.buildCodeFrameError(
          `Invalid 'for of' tag, |value| parameter must be an identifier.`
        );
      }

      const rendererId = writer.getRenderer(bodySectionId);

      tag.remove();

      const references = (ofAttr.extra?.valueReferences as ReferenceGroup)
        ?.references;
      const signal = getSignal(sectionId, reserve);
      signal.build = () => {
        const bindings: Record<string, t.Identifier> = paramsPath.reduce(
          (paramsLookup, param) => {
            return Object.assign(paramsLookup, param.getBindingIdentifiers());
          },
          {}
        );
        return callRuntime(
          "loop",
          getNodeLiteral(reserve!),
          t.numericLiteral(countReserves(references) || 1),
          rendererId,
          t.arrayExpression(
            Object.values(bindings).map(
              (binding) =>
                getSignal(bodySectionId, binding.extra.reserve).identifier
            )
          ),
          t.arrowFunctionExpression(
            [scopeIdentifier, t.arrayPattern(params)],
            t.blockStatement(
              Object.values(bindings).map((binding) => {
                return t.expressionStatement(
                  callRuntime(
                    "setSource",
                    scopeIdentifier,
                    getSignal(bodySectionId, binding.extra.reserve).identifier,
                    binding
                  )
                );
              })
            )
          ),
          getComputeFn(
            sectionId,
            t.arrayExpression([
              ofAttrValue,
              byAttr ? byAttr.value! : t.nullLiteral(),
            ]),
            references
          )
        );
      };
      subscribe(references, signal);

      for (const param of params) {
        initSource(param.extra?.reserve as Reserve);
      }

      // valParam.extra.reserve

      // export function loop<S extends Scope, C extends Scope, T>(
      //   nodeAccessor: number,
      //   defaultMark: number,
      //   renderer: Renderer,
      //   paramSubscribers: Signal[],
      //   setParams: (scope: C, params: [T, number, T[]]) => void,
      //   compute: (scope: S) => [T[], (x: T) => unknown],
      //   fragment?: DOMFragment,
      // ) {

      // addStatement(
      //   "apply",
      //   sectionId,
      //   // TODO: should merge byAttr refereces with ofAttr references
      //   ofAttr.extra?.valueReferences,
      //   t.expressionStatement(
      //     callRuntime(
      //       "setLoopOf",
      //       scopeIdentifier,
      //       getNodeLiteral(reserve!),
      //       ofAttrValue,
      //       rendererId,
      //       byAttr ? byAttr.value! : t.nullLiteral(),
      //       getReferenceGroup(bodySectionId, valParam.extra.reserve).apply
      //     )
      //   )
      // );
    }
  },
};

const translateHTML = {
  exit(tag: t.NodePath<t.MarkoTag>) {
    const sectionId = getSectionId(tag);
    const tagBody = tag.get("body");
    const bodySectionId = getSectionId(tagBody);
    const { node } = tag;
    const {
      attributes,
      body: { body, params },
      extra: { isStateful, singleNodeOptimization, isOnlyChild },
    } = node;
    const {
      extra: { reserve },
    } = isOnlyChild ? (tag.parentPath.parent as t.MarkoTag) : node;
    const namePath = tag.get("name");
    const ofAttr = findName(attributes, "of");
    const inAttr = findName(attributes, "in");
    const fromAttr = findName(attributes, "from");
    const toAttr = findName(attributes, "to");
    const block = t.blockStatement(body);
    const write = writer.writeTo(tag);
    let forNode: t.Node | t.Node[];

    if (isStateful) {
      if (!singleNodeOptimization) {
        writer.writePrependTo(tagBody)`${callRuntime(
          "markHydrateScopeStart",
          getScopeIdIdentifier(bodySectionId)
        )}`;
      }
      getSerializedScopeProperties(bodySectionId).set(
        importRuntime("SYMBOL_OWNER"),
        getScopeIdIdentifier(sectionId)
      );
    }

    writer.flushInto(tag);
    writeHTMLHydrateStatements(tagBody);

    if (inAttr) {
      const [keyParam, valParam] = params;

      if (valParam) {
        // TODO: account for keyParam being a non identifier.
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              valParam,
              t.memberExpression(inAttr.value!, keyParam as t.Identifier, true)
            ),
          ])
        );
      }

      forNode = t.forInStatement(
        t.variableDeclaration("const", [t.variableDeclarator(keyParam)]),
        inAttr.value!,
        block
      );
    } else if (ofAttr) {
      let ofAttrValue = ofAttr.value!;
      const [valParam, keyParam, loopParam] = params;

      if (!valParam) {
        throw namePath.buildCodeFrameError(
          "Invalid 'for of' tag, missing |value, index| params."
        );
      }

      forNode = [];

      if (keyParam) {
        const indexName = tag.scope.generateUidIdentifierBasedOnNode(
          keyParam,
          "i"
        );
        forNode.push(
          t.variableDeclaration("let", [
            t.variableDeclarator(indexName, t.numericLiteral(0)),
          ])
        );

        block.body.unshift(
          t.variableDeclaration("let", [
            t.variableDeclarator(keyParam, t.updateExpression("++", indexName)),
          ])
        );
      }

      if (loopParam) {
        if (t.isIdentifier(loopParam)) {
          ofAttrValue = loopParam;
        }

        forNode.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(loopParam, ofAttr.value),
          ])
        );
      }

      forNode.push(
        t.forOfStatement(
          t.variableDeclaration("const", [t.variableDeclarator(valParam)]),
          ofAttrValue,
          block
        )
      );
    } else if (fromAttr && toAttr) {
      const stepAttr = findName(attributes, "step") || {
        value: t.numericLiteral(1),
      };
      const stepValue = stepAttr ? stepAttr.value : t.numericLiteral(1);
      const [indexParam] = params;
      const stepsName = tag.scope.generateUidIdentifier("steps");
      const stepName = tag.scope.generateUidIdentifier("step");

      if (indexParam) {
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              indexParam,
              t.binaryExpression(
                "+",
                fromAttr.value!,
                t.binaryExpression("*", stepName, stepValue!)
              )
            ),
          ])
        );
      }

      forNode = t.forStatement(
        t.variableDeclaration("let", [
          t.variableDeclarator(
            stepsName,
            t.binaryExpression(
              "/",
              t.binaryExpression("-", toAttr.value!, fromAttr.value!),
              stepValue!
            )
          ),
          t.variableDeclarator(stepName, t.numericLiteral(0)),
        ]),
        t.binaryExpression("<=", stepName, stepsName),
        t.updateExpression("++", stepName),
        block
      );
    }

    block.body.push(t.expressionStatement(callRuntime("maybeFlush")));

    const replacement = ([] as t.Node[]).concat(forNode!);

    if (isStateful) {
      const forScopeIdsIdentifier =
        tag.scope.generateUidIdentifier("forScopeIds");
      const forScopesIdentifier = getScopeIdentifier(bodySectionId);

      replacement.unshift(
        t.variableDeclaration("const", [
          t.variableDeclarator(forScopesIdentifier, t.arrayExpression([])),
        ])
      );

      if (singleNodeOptimization) {
        replacement.unshift(
          t.variableDeclaration("let", [
            t.variableDeclarator(forScopeIdsIdentifier, t.arrayExpression([])),
          ])
        );
        block.body.push(
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(forScopeIdsIdentifier, t.identifier("push")),
              [getScopeIdIdentifier(bodySectionId)]
            )
          )
        );
        write`${callRuntime(
          "markHydrateControlSingleNodeEnd",
          getScopeIdIdentifier(sectionId),
          getNodeLiteral(reserve!),
          forScopeIdsIdentifier
        )}`;
      } else {
        write`${callRuntime(
          "markHydrateControlEnd",
          getScopeIdIdentifier(sectionId),
          getNodeLiteral(reserve!)
        )}`;
      }
    }

    tag.replaceWithMultiple(replacement);
  },
};

function findName(
  arr: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
  value: string
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
        `Invalid 'for of' tag, missing |value, index| params.`
      );
    }
  } else if (findName(attrs, "in")) {
    assertAllowedAttributes(tag, ["in", "by"]);
    if (!hasParams) {
      throw tag.buildCodeFrameError(
        `Invalid 'for in' tag, missing |key, value| params.`
      );
    }
  } else if (findName(attrs, "from") && findName(attrs, "to")) {
    assertAllowedAttributes(tag, ["from", "to", "step", "by"]);
  } else {
    throw tag.buildCodeFrameError(
      "Invalid 'for' tag, missing an 'of', 'in' or 'to' attribute."
    );
  }
}

function checkOnlyChild(tag: t.NodePath<t.MarkoTag>) {
  tag.node.extra ??= {} as any;
  if (
    t.isMarkoTag(tag.parentPath?.parent) &&
    getTagDef(tag.parentPath!.parentPath! as t.NodePath<t.MarkoTag>)?.html
  ) {
    return (tag.node.extra.isOnlyChild =
      (tag.parent as t.MarkoTagBody).body.length === 1);
  }
  return (tag.node.extra.isOnlyChild = false);
}
