import { assertNoArgs, getMacroIdentifier } from "@marko/babel-utils";

export default function (path) {
  assertNoArgs(path);
  path.node.name = getMacroIdentifier(path);
  path.node._isMacroTagCall = true;
  path.requeue();
}
