import { types as t } from "@marko/babel-types";
import parseArguments from "./parse-arguments";

export default (file, attributes, startPos) => {
  const code = file.code;
  let attrEndPos = startPos;

  return attributes.map(attr => {
    const attrStartPos = code.indexOf(attr.name, attrEndPos);

    if (attr.name.slice(0, 3) === "...") {
      let attrExpression = attr.name.slice(3);

      if (attr.argument) {
        attrExpression += `(${attr.argument.value})`;
      }

      attrEndPos = attrStartPos + attrExpression.length;

      const value = file.parseExpression(attrExpression, attrStartPos + 3);

      // TODO: Inline merge object literals.
      return file.createNode(
        "markoSpreadAttribute",
        attrStartPos,
        attrEndPos,
        value
      );
    }

    const match = /:(.*)$/.exec(attr.name);
    const modifier = match && match[1];
    let name = attr.name;
    let value;

    if (modifier) {
      name = name.slice(0, name.length - modifier.length - 1);
    }

    if (attr.value) {
      attrEndPos = attr.endPos;
      const valueStart = attr.pos + 1; // Add one to account for "=".
      const rawValue = code.slice(valueStart, attrEndPos); // We use the raw value to ignore things like non standard placeholders.
      value = file.parseExpression(rawValue, valueStart);
    } else {
      attrEndPos = attr.argument ? attr.argument.endPos + 1 : attr.endPos;
      value = t.booleanLiteral(true);
    }

    return file.createNode(
      "markoAttribute",
      attrStartPos,
      attrEndPos,
      name,
      value,
      modifier,
      parseArguments(file, attr.argument)
    );
  });
};
