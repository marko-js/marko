import { types as t, NodePath } from "@marko/babel-types";
import { assertNoArgs, assertNoParams, assertNoVar } from "@marko/babel-utils";
import toBlockStatementIfMultiple from "../../util/to-block-statement-if-multiple";

export function buildIfStatement(tag: NodePath<t.MarkoTag>) {
  const { node } = tag;
  const [defaultAttr] = node.attributes;
  const tagName = (node.name as t.StringLiteral).value;

  assertNoVar(tag);
  assertNoArgs(tag);
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
    const msg = `The '<${tagName}>' only supports a default attribute.`;

    if (start == null || end == null) {
      throw tag.get("name").buildCodeFrameError(msg);
    } else {
      throw tag.hub.buildError(
        ({ loc: { start, end } } as unknown) as t.Node,
        msg,
        Error
      );
    }
  }

  return t.ifStatement(
    defaultAttr.value!,
    toBlockStatementIfMultiple(tag.node.body.body)
  );
}

export function findPreviousIfStatement(tag: NodePath<t.MarkoTag>) {
  const tagName = (tag.node.name as t.StringLiteral).value;
  let prev = tag.getSibling((tag.key as number) - 1) as NodePath<t.IfStatement>;

  while (prev.node.alternate) {
    prev = prev.get("alternate") as NodePath<t.IfStatement>;
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
