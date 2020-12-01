import { types as t, NodePath } from "@marko/babel-types";
import { getTagDef } from "@marko/babel-utils";
import analyzeTagName from "../../util/analyze-tag-name";
import attrsToObject from "../../util/attrs-to-object";
import { consumeHTML, flushBefore, flushInto } from "../../util/html-flush";
import { writeHTML } from "../../util/html-write";
import { callRuntime, getHTMLRuntime } from "../../util/runtime";

export function enter(tag: NodePath<t.MarkoTag>) {
  const write = writeHTML(tag);
  const name = tag.get("name");
  const attrs = tag.get("attributes");
  const tagDef = getTagDef(tag);
  const hasSpread = attrs.some(attr => attr.isMarkoSpreadAttribute());
  const { nullable } = analyzeTagName(tag);

  if (nullable) {
    flushBefore(tag);
  }

  write`<${name.node}`;

  if (hasSpread) {
    write`${callRuntime(tag, "attrs", attrsToObject(tag)!)}`;
  } else {
    for (const attr of attrs as NodePath<t.MarkoAttribute>[]) {
      const name = attr.node.name;

      if (name[0] === "o" && name[1] === "n") {
        continue;
      }

      const value = attr.get("value");
      const { confident, value: computed } = value.evaluate();

      switch (name) {
        case "class":
        case "style":
          if (confident) {
            write`${getHTMLRuntime(tag)[`${name}Attr`](computed)}`;
          } else {
            write`${callRuntime(tag, `${name}Attr`, value.node!)}`;
          }
          break;
        default:
          if (confident) {
            write`${getHTMLRuntime(tag).attr(name, computed)}`;
          } else {
            write`${callRuntime(
              tag,
              "attr",
              t.stringLiteral(name),
              value.node!
            )}`;
          }

          break;
      }
    }
  }

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
  } else {
    write`>`;
  }

  if (nullable) {
    tag.insertBefore(t.ifStatement(name.node, consumeHTML(tag)!))[0].skip();
  }
}

export function exit(tag: NodePath<t.MarkoTag>) {
  if (!getTagDef(tag)?.parseOptions?.openTagOnly) {
    const { nullable } = analyzeTagName(tag);

    if (nullable) {
      flushInto(tag);
    }

    if (tag.node.body.body.length) {
      tag.insertBefore(tag.node.body.body).forEach(child => child.skip());
    }

    writeHTML(tag)`</${tag.node.name}>`;

    if (nullable) {
      tag
        .insertBefore(t.ifStatement(tag.node.name, consumeHTML(tag)!))[0]
        .skip();
    }
  }

  tag.remove();
}
