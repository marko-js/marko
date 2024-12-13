import { types as t } from "@marko/compiler";
import {
  assertNoAttributes,
  assertNoParams,
  getArgOrSequence,
} from "@marko/compiler/babel-utils";

import withPreviousLocation from "../../util/with-previous-location";

export function exit(path) {
  assertNoParams(path);
  assertNoAttributes(path);
  const arg = getArgOrSequence(path);

  if (!arg) {
    throw path
      .get("name")
      .buildCodeFrameError(
        "A condition is required for the <while(condition)> tag.",
      );
  }

  path.replaceWith(
    withPreviousLocation(
      t.whileStatement(
        getArgOrSequence(path),
        t.blockStatement(path.node.body.body),
      ),
      path.node,
    ),
  );
}
