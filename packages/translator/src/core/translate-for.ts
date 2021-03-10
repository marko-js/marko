import { types as t } from "@marko/compiler";
import { assertAllowedAttributes, assertNoVar } from "@marko/babel-utils";
import { flushBefore, flushInto } from "../util/html-flush";

export function enter(tag: t.NodePath<t.MarkoTag>) {
  flushBefore(tag);
}

export function exit(tag: t.NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  flushInto(tag);

  const { node } = tag;
  const {
    attributes,
    body: { body, params }
  } = node;
  const namePath = tag.get("name");
  const ofAttr = findName(attributes, "of");
  const inAttr = findName(attributes, "in");
  const fromAttr = findName(attributes, "from");
  const toAttr = findName(attributes, "to");
  const block = t.blockStatement(body);
  const allowedAttributes = ["by"];
  let forNode: t.Node | t.Node[];

  if (inAttr) {
    allowedAttributes.push("in");

    const [keyParam, valParam] = params;

    if (!keyParam) {
      throw namePath.buildCodeFrameError(
        "Invalid 'for in' tag, missing |key, value| params."
      );
    }

    if (!t.isIdentifier(keyParam)) {
      throw tag
        .get("body")
        .get("params")[0]
        .buildCodeFrameError(
          "Invalid 'for in' parameter, key must be a valid identifier."
        );
    }

    if (valParam) {
      block.body.unshift(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            valParam,
            t.memberExpression(inAttr.value!, keyParam, true)
          )
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
    allowedAttributes.push("of");

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
          t.variableDeclarator(indexName, t.numericLiteral(0))
        ])
      );

      block.body.unshift(
        t.variableDeclaration("let", [
          t.variableDeclarator(keyParam, t.updateExpression("++", indexName))
        ])
      );
    }

    if (loopParam) {
      if (t.isIdentifier(loopParam)) {
        ofAttrValue = loopParam;
      }

      forNode.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(loopParam, ofAttr.value)
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
    allowedAttributes.push("from", "to", "step");

    const stepAttr = findName(attributes, "step") || {
      value: t.numericLiteral(1)
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
          )
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
        t.variableDeclarator(stepName, t.numericLiteral(0))
      ]),
      t.binaryExpression("<=", stepName, stepsName),
      t.updateExpression("++", stepName),
      block
    );
  } else {
    throw namePath.buildCodeFrameError(
      "Invalid 'for' tag, missing an 'of', 'in' or 'to' attribute."
    );
  }

  assertAllowedAttributes(tag, allowedAttributes);
  tag.replaceWithMultiple(([] as t.Node[]).concat(forNode));
}

function findName(
  arr: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
  value: string
) {
  return arr.find(obj => t.isMarkoAttribute(obj) && obj.name === value);
}
