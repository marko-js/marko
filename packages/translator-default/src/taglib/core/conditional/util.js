import { types as t } from "@marko/babel-types";

export function buildIfStatement(path, args) {
  if (!args || !args.length) {
    const name = path.get("name");
    throw name.buildCodeFrameError(
      `Invalid '<${name.node.value}>' tag, expected arguments like '<${name.node.value}(test)>'.`
    );
  }

  const ifStatement = t.ifStatement(
    args.length === 1 ? args[0] : t.sequenceExpression(args),
    t.blockStatement(path.node.body.body)
  );

  let nextPath = path.getNextSibling();

  // Provide the if statement to the next part of the if chain.
  if (nextPath.isMarkoTag()) {
    const nextTagName = nextPath.get("name");
    if (
      nextTagName.isStringLiteral({ value: "else" }) ||
      nextTagName.isStringLiteral({ value: "else-if" })
    ) {
      nextPath.node.ifStatement = ifStatement;
    }
  }

  return ifStatement;
}
