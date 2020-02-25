import { assertNoAttributes } from "@marko/babel-utils";
import { buildIfStatement } from "./util";

export function exit(path) {
  assertNoAttributes(path);
  path.replaceWith(buildIfStatement(path, path.node.arguments));
}
