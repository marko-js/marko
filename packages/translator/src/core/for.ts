import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import { Tag, assertAllowedAttributes, assertNoVar } from "@marko/babel-utils";
import * as writer from "../util/writer";
import * as walks from "../util/walks";
import {
  addStatement,
  bindingToApplyId,
  queueFactory,
  setQueueFactory,
} from "../util/apply-hydrate";
import { getOrCreateSectionId, getSectionId } from "../util/sections";
import { ReserveType, reserveScope } from "../util/reserve";
import { callRuntime } from "../util/runtime";
import analyzeAttributeTags from "../util/nested-attribute-tags";
import customTag from "../visitors/tag/custom-tag";

export default {
  analyze: {
    enter(tag) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSectionId(tag),
        tag.node,
        "for",
        3
      );
      customTag.analyze.enter(tag);
    },
    exit(tag) {
      analyzeAttributeTags(tag);
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

      walks.visit(tag, walks.WalkCodes.Replace);
      walks.enterShallow(tag);
      writer.start(tag);
      setQueueFactory(tag, queueLoopFactory);
    },
    exit(tag) {
      const sectionId = writer.end(tag);

      if (isOutputHTML()) {
        translateHTML.exit(tag);
      } else {
        translateDOM.exit(tag, sectionId);
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
  exit(tag: t.NodePath<t.MarkoTag>, bodySectionId: number) {
    const sectionId = getSectionId(tag);
    const { node } = tag;
    const {
      attributes,
      body: { params },
    } = node;
    const ofAttr = findName(attributes, "of");
    const byAttr = findName(attributes, "by");

    if (ofAttr) {
      const ofAttrValue = ofAttr.value!;
      const [valParam] = params;

      // TODO: support patterns/rest
      if (!t.isIdentifier(valParam)) {
        throw tag.buildCodeFrameError(
          `Invalid 'for of' tag, |value| parameter must be an identifier.`
        );
      }

      const rendererDeclarator = writer.getSectionDeclarator(
        tag,
        bodySectionId,
        "for"
      );
      const rendererId = rendererDeclarator.id as t.Identifier;

      tag.replaceWith(t.variableDeclaration("const", [rendererDeclarator]));

      addStatement(
        "apply",
        sectionId,
        // TODO: should merge byAttr refereces with ofAttr references
        ofAttr.extra?.valueReferences,
        t.expressionStatement(
          callRuntime(
            "setLoopOf",
            t.numericLiteral(node.extra.reserve!.id),
            ofAttrValue,
            rendererId,
            byAttr ? byAttr.value! : t.nullLiteral(),
            bindingToApplyId(valParam.extra.reserve!, bodySectionId)
          )
        )
      );
    }
  },
};

const queueLoopFactory: queueFactory = (
  binding,
  functionIdentifier,
  targetSectionId
) => {
  return t.identifier("TODO");
};

const translateHTML = {
  exit(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const {
      attributes,
      body: { body, params },
    } = node;
    const namePath = tag.get("name");
    const ofAttr = findName(attributes, "of");
    const inAttr = findName(attributes, "in");
    const fromAttr = findName(attributes, "from");
    const toAttr = findName(attributes, "to");
    const block = t.blockStatement(body);
    let forNode: t.Node | t.Node[];

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

    tag.replaceWithMultiple(([] as t.Node[]).concat(forNode!));
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
