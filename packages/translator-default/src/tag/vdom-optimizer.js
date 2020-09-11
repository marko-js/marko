import { decode } from "he";
import { types as t } from "@marko/babel-types";
import { importDefault } from "@marko/babel-utils";
import { getKeyManager } from "../util/key-manager";
import write from "../util/vdom-out-write";
import { tagArguments } from "./native-tag[vdom]";

export default function VDOMOptimizer(path) {
  const {
    hub: { file }
  } = path;
  const identifier = path.scope.generateUidIdentifier("marko_node");
  const writeArgs = tagArguments(path, true);

  let create = t.callExpression(
    importDefault(
      file,
      "marko/src/runtime/vdom/helpers/v-element",
      "marko_createElement"
    ),
    writeArgs
  );

  path.traverse({
    MarkoText(path) {
      const { node } = path;
      create = t.callExpression(t.memberExpression(create, t.identifier("t")), [
        t.stringLiteral(decode(node.value))
      ]);
    },
    MarkoPlaceholder(path) {
      const { value } = path.get("value").evaluate();
      create = t.callExpression(t.memberExpression(create, t.identifier("t")), [
        t.stringLiteral(value != null ? value.toString() : "")
      ]);
    },
    MarkoTag(path) {
      if (path.node.attributes.find(a => a.name === "key"))
        getKeyManager(path).resolveKey(path);
      const writeArgs = tagArguments(path, true);
      create = t.callExpression(
        t.memberExpression(create, t.identifier("e")),
        writeArgs
      );
    }
  });

  const d = t.variableDeclaration("const", [
    t.variableDeclarator(identifier, create)
  ]);
  file.path.node.body.push(d);
  path.replaceWith(write("n", identifier, t.identifier("component")));
  path.skip();
}
