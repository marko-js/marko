import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  importDefault,
} from "@marko/compiler/babel-utils";

export function exit(path) {
  const { node } = path;
  const {
    attributes,
    body: { params },
  } = node;
  const body = node.body.body;
  const namePath = path.get("name");
  const ofAttr = findName(attributes, "of");
  const inAttr = findName(attributes, "in");
  const fromAttr = findName(attributes, "from");
  const toAttr = findName(attributes, "to");
  const block = t.blockStatement(body);
  let forNode;
  let allowedAttributes = ["by"];

  if (inAttr) {
    allowedAttributes.push("in");

    const [keyParam, valParam] = params;

    if (!keyParam) {
      throw namePath.buildCodeFrameError(
        "Invalid 'for in' tag, missing |key, value| params.",
      );
    }

    if (valParam) {
      block.body.unshift(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            valParam,
            t.memberExpression(inAttr.value, keyParam, true),
          ),
        ]),
      );
    }

    forNode = t.forInStatement(
      t.variableDeclaration("const", [t.variableDeclarator(keyParam)]),
      inAttr.value,
      block,
    );
  } else if (ofAttr) {
    let ofAttrValue = t.callExpression(
      importDefault(
        path.hub.file,
        "marko/src/runtime/helpers/of-fallback.js",
        "of_fallback",
      ),
      [ofAttr.value],
    );
    allowedAttributes.push("of");

    const [valParam, keyParam, loopParam] = params;

    if (!valParam) {
      throw namePath.buildCodeFrameError(
        "Invalid 'for of' tag, missing |value, index| params.",
      );
    }

    forNode = [];

    if (keyParam) {
      const indexName = path.scope.generateUidIdentifier(keyParam.name);
      forNode.push(
        t.variableDeclaration("let", [
          t.variableDeclarator(indexName, t.numericLiteral(0)),
        ]),
      );

      block.body.unshift(
        t.variableDeclaration("let", [
          t.variableDeclarator(keyParam, t.updateExpression("++", indexName)),
        ]),
      );
    }

    if (loopParam) {
      ofAttrValue = loopParam;
      forNode.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(loopParam, ofAttr.value),
        ]),
      );
    }

    forNode.push(
      t.forOfStatement(
        t.variableDeclaration("const", [t.variableDeclarator(valParam)]),
        ofAttrValue,
        block,
      ),
    );
  } else if (fromAttr && toAttr) {
    allowedAttributes.push("from", "to", "step");

    const stepAttr = findName(attributes, "step") || {
      value: t.numericLiteral(1),
    };
    const stepValue = stepAttr ? stepAttr.value : t.numericLiteral(1);
    const [indexParam] = params;
    const stepsName = path.scope.generateUidIdentifier("steps");
    const stepName = path.scope.generateUidIdentifier("step");

    if (indexParam) {
      block.body.unshift(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            indexParam,
            t.binaryExpression(
              "+",
              fromAttr.value,
              t.binaryExpression("*", stepName, stepValue),
            ),
          ),
        ]),
      );
    }

    forNode = t.forStatement(
      t.variableDeclaration("let", [
        t.variableDeclarator(
          stepsName,
          t.binaryExpression(
            "/",
            t.binaryExpression("-", toAttr.value, fromAttr.value),
            stepValue,
          ),
        ),
        t.variableDeclarator(stepName, t.numericLiteral(0)),
      ]),
      t.binaryExpression("<=", stepName, stepsName),
      t.updateExpression("++", stepName),
      block,
    );
  } else {
    throw namePath.buildCodeFrameError(
      "Invalid 'for' tag, missing an 'of', 'in' or 'to' attribute.",
    );
  }

  assertAllowedAttributes(path, allowedAttributes);
  path.replaceWithMultiple([].concat(forNode));
}

function findName(arr, value) {
  return arr.find((obj) => obj.name === value);
}
