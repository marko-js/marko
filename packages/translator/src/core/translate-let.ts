import { types as t } from "@marko/compiler";
import { assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";
import * as writer from "../util/writer";

export default function enter(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const [defaultAttr] = node.attributes;

  assertNoParams(tag);
  assertNoBodyContent(tag);

  if (!node.var) {
    throw tag
      .get("name")
      .buildCodeFrameError("The 'let' tag requires a tag variable.");
  }

  if (!t.isIdentifier(node.var)) {
    throw tag
      .get("var")
      .buildCodeFrameError("The 'let' cannot be destructured.");
  }

  if (!defaultAttr) {
    throw tag
      .get("name")
      .buildCodeFrameError("The 'let' tag requires a default attribute.");
  }

  if (
    node.attributes.length > 1 ||
    !t.isMarkoAttribute(defaultAttr) ||
    (!defaultAttr.default && defaultAttr.name !== "default")
  ) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "The 'let' tag only supports the 'default' attribute."
      );
  }

  if (isOutputDOM(tag)) {
    const bindings = defaultAttr.extra?.references?.value?.bindings;
    // TODO: add defined guard if bindings exist.
    writer.addStatement(
      "apply",
      tag,
      bindings,
      t.expressionStatement(
        t.callExpression(
          writer.ensureBinding("apply", tag, node.var.name),
          [defaultAttr.value]
        )
      )
    );
  } else {
    translateVar(tag, defaultAttr.value);
  }

  tag.remove();
}
