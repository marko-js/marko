import { types as t } from "@marko/babel-types";

export default (file, shorthand, attributes) => {
  if (!shorthand) {
    return attributes;
  }

  const idAttr = attributes.find(({ name }) => name === "id");
  if (idAttr) {
    throw file.buildCodeFrameError(
      idAttr,
      "Cannot have shorthand id and id attribute."
    );
  }

  const idParts = shorthand.rawParts.map(part =>
    part.expression
      ? file.parseExpression(part.expression, part.pos)
      : file.createNode("stringLiteral", part.pos, part.endPos, part.text)
  );

  attributes.push(
    t.markoAttribute(
      "id",
      idParts.length === 1
        ? idParts[0]
        : idParts.reduce((a, b) => t.binaryExpression("+", a, b))
    )
  );

  return attributes;
};
