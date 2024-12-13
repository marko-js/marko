import { getMacroIdentifier } from "@marko/compiler/babel-utils";

export default function (path) {
  path.node.name = getMacroIdentifier(path);
  path.node._isMacroTagCall = true;
  path.requeue();
}
