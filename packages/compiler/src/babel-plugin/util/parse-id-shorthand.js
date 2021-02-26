import { withLoc, parseExpression } from "@marko/babel-utils";
import * as t from "../../babel-types";

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
      ? parseExpression(file, part.expression, part.pos)
      : withLoc(file, t.stringLiteral(part.text), part.pos, part.endPos)
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
