import { parseExpression } from "@marko/babel-utils";
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

  attributes.push(
    t.markoAttribute(
      "id",
      parseExpression(file, `\`${shorthand.value}\``, shorthand.pos - 1)
    )
  );

  return attributes;
};
