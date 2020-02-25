import { types as t } from "@marko/babel-types";
import {
  getArgOrSequence,
  assertNoAttributes,
  assertNoParams
} from "@marko/babel-utils";

export function exit(path) {
  assertNoParams(path);
  assertNoAttributes(path);
  const arg = getArgOrSequence(path);

  if (!arg) {
    throw path
      .get("name")
      .buildCodeFrameError(
        "A condition is required for the <while(condition)> tag."
      );
  }

  path.replaceWith(
    t.whileStatement(
      getArgOrSequence(path),
      t.blockStatement(path.node.body.body)
    )
  );
}
