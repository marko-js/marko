import { withLoc, parseExpression } from "@marko/babel-utils";
import * as t from "../../babel-types";

export default (file, shorthands, attributes) => {
  if (!shorthands) {
    return attributes;
  }

  const classAttr = attributes.find(({ name }) => name === "class");
  const classParts = shorthands.map(({ pos, value }) =>
    parseExpression(file, `\`${value}\``, pos - 1)
  );

  let shorthandNode;
  if (classParts.length === 1) {
    shorthandNode = classParts[0];
  } else if (classParts.every(node => t.isStringLiteral(node))) {
    const combinedStartPos = shorthands[0].rawParts[0].pos;
    const lastParts = shorthands[shorthands.length - 1].rawParts;
    const combinedEndPos = lastParts[lastParts.length - 1].endPos;
    shorthandNode = withLoc(
      file,
      t.stringLiteral(classParts.map(node => node.value).join(" ")),
      combinedStartPos,
      combinedEndPos
    );
  } else {
    shorthandNode = t.arrayExpression(classParts);
  }

  if (classAttr) {
    if (t.isArrayExpression(classAttr.value)) {
      if (t.isArrayExpression(shorthandNode)) {
        classAttr.value.elements.push(...shorthandNode.elements);
      } else {
        classAttr.value.elements.push(shorthandNode);
      }
    } else if (
      t.isStringLiteral(classAttr.value) &&
      t.isStringLiteral(shorthandNode)
    ) {
      classAttr.value.value = `${shorthandNode.value} ${classAttr.value.value}`;
    } else if (t.isArrayExpression(shorthandNode)) {
      shorthandNode.elements.push(classAttr.value);
      classAttr.value = shorthandNode;
    } else {
      classAttr.value = t.arrayExpression([shorthandNode, classAttr.value]);
    }
  } else {
    attributes.push(t.markoAttribute("class", shorthandNode));
  }

  return attributes;
};
