import { types as t, NodePath } from "@marko/babel-types";
import { assertNoParams, assertNoVar } from "@marko/babel-utils";
import { flushBefore, flushInto } from "../util/html-flush";
import { callRuntime } from "../util/runtime";

export function enter(tag: NodePath<t.MarkoTag>) {
  flushBefore(tag);

  const { node } = tag;
  const [defaultAttr] = node.attributes;

  if (!node.body.body.length) {
    throw tag.buildCodeFrameError(
      `The '<set>' tag requires body content that the context is forwarded through.`
    );
  }

  if (!t.isMarkoAttribute(defaultAttr) || !defaultAttr.default) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The '<set>' tag requires default attribute like '<set=val>'.`
      );
  }

  if (node.attributes.length > 1) {
    const start = node.attributes[1].loc?.start;
    const end = node.attributes[node.attributes.length - 1].loc?.end;
    const msg = `The '<set>' tag only supports a default attribute.`;

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

  tag.insertBefore(
    t.expressionStatement(
      callRuntime(
        tag,
        "pushContext",
        t.stringLiteral(tag.hub.file.metadata.marko.id),
        defaultAttr.value!
      )
    )
  );
}

export function exit(tag: NodePath<t.MarkoTag>) {
  assertNoParams(tag);
  assertNoVar(tag);
  flushInto(tag);
  tag.insertAfter(t.expressionStatement(callRuntime(tag, "popContext")));
  tag.replaceWithMultiple(tag.node.body.body);
}
