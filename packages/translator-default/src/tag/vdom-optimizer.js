import { decode } from "he";
import { types as t } from "@marko/babel-types";
import { importDefault } from "@marko/babel-utils";
import { getKeyManager } from "../util/key-manager";
import write from "../util/vdom-out-write";
import { tagArguments } from "./native-tag[vdom]";

const staticVisitor = {
  MarkoText(path, state) {
    const { node } = path;
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("t")),
      [t.stringLiteral(decode(node.value))]
    );
  },
  MarkoPlaceholder(path, state) {
    const { value } = path.get("value").evaluate();
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("t")),
      [t.stringLiteral(value != null ? value.toString() : "")]
    );
  },
  MarkoTag(path, state) {
    if (path.node.attributes.find(a => a.name === "key"))
      getKeyManager(path).resolveKey(path);
    const writeArgs = tagArguments(path, true);
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("e")),
      writeArgs
    );
  }
};

export default function VDOMOptimizer(path) {
  const {
    hub: { file }
  } = path;
  const identifier = path.scope.generateUidIdentifier("marko_node");
  const writeArgs = tagArguments(path, true);
  const state = {
    currentRoot: t.callExpression(
      importDefault(
        file,
        "marko/src/runtime/vdom/helpers/v-element",
        "marko_createElement"
      ),
      writeArgs
    )
  };

  path.traverse(staticVisitor, state);

  const d = t.variableDeclaration("const", [
    t.variableDeclarator(identifier, state.currentRoot)
  ]);
  file.path.node.body.push(d);
  path.replaceWith(write("n", identifier, t.identifier("component")));
  path.skip();
}
