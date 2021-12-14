import { types as t } from "@marko/compiler";
import { assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";
import * as writer from "../util/writer";
import type { Reference } from "../analyze/util/references";

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
    // TODO: add defined guard if bindings exist.
    writer.addStatement(
      "apply",
      tag,
      defaultAttr.extra?.valueReferences,
      t.expressionStatement(
        t.callExpression(writer.getApplyId(tag, node.var.extra as Reference), [
          defaultAttr.value,
        ])
      )
    );
  } else {
    translateVar(tag, defaultAttr.value);
  }

  tag.remove();
}
