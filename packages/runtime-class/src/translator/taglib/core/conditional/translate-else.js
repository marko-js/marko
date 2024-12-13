import { types as t } from "@marko/compiler";
import { assertNoArgs, assertNoAttributes } from "@marko/compiler/babel-utils";

export function exit(path) {
  assertNoArgs(path);
  assertNoAttributes(path);

  const { ifStatement } = path.node;

  if (!ifStatement) {
    throw path
      .get("name")
      .buildCodeFrameError(
        "Invalid 'else' tag, expected preceding 'if' or 'else-if' tag.",
      );
  }

  ifStatement.alternate = t.blockStatement(path.node.body.body);
  path.remove();
}
