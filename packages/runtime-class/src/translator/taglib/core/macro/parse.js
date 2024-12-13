import { types as t } from "@marko/compiler";
import { registerMacro } from "@marko/compiler/babel-utils";

export default function (path) {
  const attrs = path.node.attributes;
  if (attrs.length === 1) {
    const [attr] = attrs;

    if (
      t.isMarkoAttribute(attr) &&
      attr.name === "name" &&
      t.isStringLiteral(attr.value)
    ) {
      registerMacro(path.get("attributes")[0], attr.value.value);
    }
  }
}
