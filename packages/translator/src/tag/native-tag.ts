import { types as t } from "@marko/compiler";
import { getTagDef } from "@marko/babel-utils";
import { isOutputHTML } from "../util/marko-config";
import attrsToObject from "../util/attrs-to-object";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import translateVar from "../util/translate-var";
import * as writer from "../util/writer";

export function enter(tag: t.NodePath<t.MarkoTag>) {
  const { extra } = tag.node;
  const isHTML = isOutputHTML(tag);
  const name = tag.get("name");
  const attrs = tag.get("attributes");
  const tagDef = getTagDef(tag);
  const hasSpread = attrs.some((attr) => attr.isMarkoSpreadAttribute());
  const write = writer.writeTo(tag);

  if (isHTML) {
    if (extra.tagNameNullable) {
      writer.flushBefore(tag);
    }
    translateVar(tag, t.unaryExpression("void", t.numericLiteral(0)));
  }

  const visitIndex = writer.visit(tag, writer.WalkCodes.Get);

  write`<${name.node}`;

  if (hasSpread) {
    const attrsCallExpr = callRuntime(tag, "attrs", attrsToObject(tag)!);

    if (isHTML) {
      write`${attrsCallExpr}`;
    } else {
      tag.insertBefore(t.expressionStatement(attrsCallExpr));
    }
  } else {
    // TODO: this should iterate backward and filter out duplicated attrs.
    for (const attr of attrs as t.NodePath<t.MarkoAttribute>[]) {
      const name = attr.node.name;

      if (isHTML && name[0] === "o" && name[1] === "n") {
        continue;
      }

      const extra = attr.node.extra;
      const value = attr.get("value");
      const { confident, computed } = extra;
      let staticContent: string | undefined;
      let dynamicExpr: t.Expression | undefined;

      switch (name) {
        case "class":
        case "style":
          if (confident) {
            staticContent = getHTMLRuntime(tag)[`${name}Attr`](computed);
          } else {
            dynamicExpr = isHTML
              ? callRuntime(
                  tag,
                  `${name}Attr` as "classAttr" | "styleAttr",
                  value.node
                )
              : callRuntime(
                  tag,
                  `${name}Attr` as "classAttr" | "styleAttr",
                  t.numericLiteral(visitIndex!),
                  value.node
                );
          }
          break;
        default:
          if (confident) {
            staticContent = getHTMLRuntime(tag).attr(name, computed);
          } else {
            dynamicExpr = isHTML
              ? callRuntime(tag, "attr", t.stringLiteral(name), value.node)
              : callRuntime(
                  tag,
                  "attr",
                  t.numericLiteral(visitIndex!),
                  t.stringLiteral(name),
                  value.node
                );
          }

          break;
      }

      if (isHTML || staticContent !== undefined) {
        write`${dynamicExpr || staticContent!}`;
      } else {
        writer.addStatement(
          "apply",
          tag,
          extra.valueReferences,
          t.expressionStatement(dynamicExpr!)
        );
      }
    }
  }

  let emptyBody = false;

  if (tagDef && tagDef.parseOptions?.openTagOnly) {
    switch (tagDef.htmlType) {
      case "svg":
      case "math":
        write`/>`;
        break;
      default:
        write`>`;
        break;
    }

    emptyBody = true;
  } else if (tag.node.body.body.length) {
    write`>`;
  } else {
    write`></${name.node}>`;
    emptyBody = true;
  }

  if (isHTML && extra.tagNameNullable) {
    tag
      .insertBefore(t.ifStatement(name.node, writer.consumeHTML(tag)!))[0]
      .skip();
  }

  if (emptyBody) {
    writer.enterShallow(tag);
    tag.remove();
  } else {
    writer.enter(tag);
  }
}

export function exit(tag: t.NodePath<t.MarkoTag>) {
  const { extra } = tag.node;
  const isHTML = isOutputHTML(tag);

  if (isHTML && extra.tagNameNullable) {
    writer.flushInto(tag);
  }

  tag.insertBefore(tag.node.body.body).forEach((child) => child.skip());

  writer.writeTo(tag)`</${tag.node.name}>`;

  if (isHTML && extra.tagNameNullable) {
    tag
      .insertBefore(t.ifStatement(tag.node.name, writer.consumeHTML(tag)!))[0]
      .skip();
  }

  tag.remove();
  writer.exit(tag);
}
