import { types as t, NodePath } from "@marko/babel-types";
import { assertNoArgs, assertNoParams } from "@marko/babel-utils";
import { isOutputHTML } from "../util/marko-config";

export function enter(tag: NodePath<t.MarkoTag>) {
  const { node } = tag;

  assertNoArgs(tag);
  assertNoParams(tag);

  if (node.body.body.length) {
    throw tag
      .get("name")
      .buildCodeFrameError("The 'let' tag does not support body content.");
  }

  if (!node.var) {
    throw tag
      .get("name")
      .buildCodeFrameError("The 'let' tag requires a tag variable.");
  }

  if (!node.attributes.length) {
    throw tag
      .get("name")
      .buildCodeFrameError("The 'let' tag requires a default attribute.");
  }

  if (
    node.attributes.length > 1 ||
    !t.isMarkoAttribute(node.attributes[0]) ||
    (!node.attributes[0].default && node.attributes[0].name !== "default")
  ) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "The 'let' tag only supports the 'default' attribute."
      );
  }

  if (isOutputHTML(tag)) {
    // We still use `const` on the server to avoid mutation during render.
    const varPath = tag.get("var");
    const varBinding = Object.values(tag.scope.bindings).find(
      binding => binding.path === varPath
    )!;
    const [replacement] = tag.replaceWith(
      t.variableDeclaration("const", [
        t.variableDeclarator(node.var, node.attributes[0].value)
      ])
    );

    varBinding.path = replacement.get(
      "declarations"
    )[0] as typeof varBinding.path;
    varBinding.kind = "const";
  } else {
    tag.remove();
  }
}
