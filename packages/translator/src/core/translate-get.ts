import path from "path";
import { types as t } from "@marko/compiler";
import {
  resolveTagImport,
  getTemplateId,
  assertNoParams,
} from "@marko/babel-utils";
import * as writer from "../util/writer";
import { callRuntime } from "../util/runtime";
import { assertNoBodyContent } from "../util/assert";

export default function enter(tag: t.NodePath<t.MarkoTag>) {
  assertNoParams(tag);
  assertNoBodyContent(tag);
  writer.flushBefore(tag);

  const {
    node,
    hub: { file },
  } = tag;
  const [defaultAttr] = node.attributes;

  if (!node.var) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "<get> requires a variable to be defined, eg <get/NAME>."
      );
  }

  if (
    !t.isMarkoAttribute(defaultAttr) ||
    !defaultAttr.default ||
    !t.isStringLiteral(defaultAttr.value)
  ) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The '<get>' tag requires default attribute that is a string that resolves to a Marko file like '<get/val="../file.marko">' or '<get/val="<tag-name>">'.`
      );
  }

  if (node.attributes.length > 1) {
    const start = node.attributes[1].loc?.start;
    const end = node.attributes[node.attributes.length - 1].loc?.end;
    const msg = `The '<get>' tag only supports a default attribute.`;

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

  const defaultAttrValue = tag
    .get("attributes")[0]
    .get("value") as t.NodePath<t.StringLiteral>;
  let refId: string;

  if (defaultAttr.value.value === ".") {
    // Self referencing `<get>`.
    refId = file.metadata.marko.id;
  } else {
    const relativeReferencePath = resolveTagImport(
      defaultAttrValue,
      defaultAttrValue.node.value
    );

    if (!relativeReferencePath) {
      throw defaultAttrValue.buildCodeFrameError(
        "Unable to resolve template provided to '<get>' tag."
      );
    }

    refId = getTemplateId(
      file.markoOpts.optimize,
      path.resolve(file.opts.filename as string, "..", relativeReferencePath)
    );
  }

  tag.replaceWith(
    t.variableDeclaration("const", [
      t.variableDeclarator(
        node.var,
        callRuntime(tag, "getInContext", t.stringLiteral(refId))
      ),
    ])
  );
}
