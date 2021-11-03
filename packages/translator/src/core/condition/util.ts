import { types as t } from "@marko/compiler";
import { assertNoParams, assertNoVar } from "@marko/babel-utils";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";

export function buildIfStatement(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const [defaultAttr] = node.attributes;
  const tagName = (node.name as t.StringLiteral).value;

  assertNoVar(tag);
  assertNoParams(tag);

  if (!t.isMarkoAttribute(defaultAttr) || !defaultAttr.default) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The '<${tagName}>' tag requires default attribute like '<${tagName}=condition>'.`
      );
  }

  if (node.attributes.length > 1) {
    const start = node.attributes[1].loc?.start;
    const end = node.attributes[node.attributes.length - 1].loc?.end;
    const msg = `The '<${tagName}>' tag only supports a default attribute.`;

    if (start == null || end == null) {
      throw tag.get("name").buildCodeFrameError(msg);
    } else {
      throw tag.hub.buildError(
        { loc: { start, end } } as unknown as t.Node,
        msg,
        Error
      );
    }
  }

  return t.ifStatement(
    defaultAttr.value!,
    toFirstStatementOrBlock(tag.node.body)
  );
}

export function findPreviousIfStatement(tag: t.NodePath<t.MarkoTag>) {
  const tagName = (tag.node.name as t.StringLiteral).value;
  let prev = tag.getSibling(
    (tag.key as number) - 1
  ) as t.NodePath<t.IfStatement>;

  while (prev.node.alternate) {
    prev = prev.get("alternate") as t.NodePath<t.IfStatement>;
  }

  if (!prev.isIfStatement()) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The <${tagName}> tag must be preceded by an <if> or <else-if> tag.`
      );
  }

  return prev;
}
