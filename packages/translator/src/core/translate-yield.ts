import { types as t } from "@marko/compiler";
import { assertNoVar, assertNoParams } from "@marko/babel-utils";
import { flushBefore } from "../util/html-flush";
import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";

const RETURN_IDENTIFIERS = new WeakMap<t.BabelFile, t.Identifier>();

export function enter(tag: t.NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  assertNoParams(tag);
  assertNoBodyContent(tag);
  assertNoSpreadAttrs(tag);
  flushBefore(tag);

  const {
    node,
    hub: { file }
  } = tag;
  const [defaultAttr, onNextAttr] = node.attributes;

  if (!t.isMarkoAttribute(defaultAttr) || !defaultAttr.default) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The '<yield>' tag requires default attribute like '<yield=VALUE>'.`
      );
  }

  if (onNextAttr && (onNextAttr as t.MarkoAttribute).name === "onnext") {
    if (isOutputHTML(tag)) {
      tag.get("attributes")[1].remove();
    }
  }

  if (node.attributes.length > 1) {
    const start = node.attributes[1].loc?.start;
    const end = node.attributes[node.attributes.length - 1].loc?.end;
    const msg = `The '<yield>' tag only supports a default attribute.`;

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

  let returnId = RETURN_IDENTIFIERS.get(file);

  if (!returnId) {
    const program = file.path;
    RETURN_IDENTIFIERS.set(
      file,
      (returnId = program.scope.generateDeclaredUidIdentifier("return"))
    );
    program.pushContainer("body", t.returnStatement(returnId))[0].skip();
  }

  if (isOutputHTML(tag)) {
    tag
      .replaceWith(t.assignmentExpression("=", returnId, defaultAttr.value!))[0]
      .skip();
  }
}
