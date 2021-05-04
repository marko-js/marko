import { types as t } from "@marko/compiler";
import { assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";

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

  translateVar(tag, defaultAttr.value!);
  tag.remove();
}
