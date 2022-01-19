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

  let visitIndex: t.NumericLiteral | undefined;
  if (extra.reserve) {
    visitIndex = t.numericLiteral(extra.reserve.id);
    writer.visit(tag, writer.WalkCodes.Get);
  }

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
      const extra = attr.node.extra;
      const value = attr.get("value");
      const { confident, computed, valueReferences } = extra;

      switch (name) {
        case "class":
        case "style": {
          const helper = `${name}Attr` as "classAttr" | "styleAttr";
          if (confident) {
            write`${getHTMLRuntime(tag)[helper](computed)}`;
          } else if (isHTML) {
            write`${callRuntime(tag, helper, value.node)}`;
          } else {
            writer.addStatement(
              "apply",
              tag,
              valueReferences,
              t.expressionStatement(
                callRuntime(tag, helper, visitIndex!, value.node)
              )
            );
          }
          break;
        }
        default:
          if (confident) {
            write`${getHTMLRuntime(tag).attr(name, computed)}`;
          } else if (isHTML && !name.startsWith("on")) {
            write`${callRuntime(
              tag,
              "attr",
              t.stringLiteral(name),
              value.node
            )}`;
          } else {
            if (name.startsWith("on")) {
              const reserveIndex = t.numericLiteral(extra.reserve!.id);
              writer.addStatement(
                "apply",
                tag,
                valueReferences,
                t.expressionStatement(
                  callRuntime(tag, "write", reserveIndex, value.node)
                )
              );

              writer.addStatement(
                "hydrate",
                tag,
                extra.valueReferences,
                t.expressionStatement(
                  callRuntime(
                    tag,
                    "on",
                    visitIndex!,
                    t.stringLiteral(name.slice(2)),
                    callRuntime(tag, "read", reserveIndex)
                  )
                )
              );
            } else {
              writer.addStatement(
                "apply",
                tag,
                valueReferences,
                t.expressionStatement(
                  callRuntime(
                    tag,
                    "attr",
                    visitIndex!,
                    t.stringLiteral(name),
                    value.node
                  )
                )
              );
            }
          }

          break;
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
