import path from "path";
import { types as t, NodePath } from "@marko/babel-types";
import { assertNoParams, assertNoVar } from "@marko/babel-utils";
import { assertNoSpreadAttrs } from "../util/assert";

export function enter(tag: NodePath<t.MarkoTag>) {
  const {
    hub: { file }
  } = tag;

  assertNoVar(tag);
  assertNoParams(tag);
  assertNoSpreadAttrs(tag);

  let type = "text/css";
  const attrs = tag.get("attributes");

  const base = path.basename(file.opts.sourceFileName as string);
  const typeAttr = attrs.find(
    attr => attr.isMarkoAttribute() && attr.node.name === "type"
  );

  if (typeAttr) {
    const typeValue = typeAttr.get("value");
    if (typeValue.isStringLiteral()) {
      type = typeValue.node.value;
    } else {
      throw typeValue.buildCodeFrameError(
        `<style> "type" attribute can only be a string literal.`
      );
    }
  }

  if (type === "text/css") {
    type = "css";
  }

  const body = tag.get("body").get("body");
  const markoText = body[0]!;

  if (body.length !== 1 || !markoText.isMarkoText()) {
    throw (markoText.isMarkoText() ? body[1] : body[0]).buildCodeFrameError(
      "The '<style>' tag currently only supports static content."
    );
  }

  file.metadata.marko.deps.push(({
    type,
    code: markoText.node.value,
    startPos: markoText.node.start!,
    endPos: markoText.node.end!,
    path: `./${base}`,
    style: `./${base}.${type}`
  } as unknown) as typeof file.metadata.marko.deps[0]);

  tag.remove();
}
