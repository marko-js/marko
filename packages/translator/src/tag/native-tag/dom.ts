/* eslint-disable @typescript-eslint/no-unused-vars */
import { types as t, NodePath } from "@marko/babel-types";
import { getTagDef } from "@marko/babel-utils";
import {
  writeHydrate,
  writeTemplate,
  writeWalks,
  Walks,
  setOnlyChild,
  clearOnlyChild
} from "../../util/dom-writer";
import { callRuntime, getHTMLRuntime } from "../../util/runtime";

export function enter(tag: NodePath<t.MarkoTag>) {
  const attrs = tag.get("attributes");
  const tagDef = getTagDef(tag);
  const hasSpread = attrs.some(attr => attr.isMarkoSpreadAttribute());
  let ofInterest = false;
  if (tagDef) {
    writeTemplate(tag, `<${tagDef.name}`);
    for (const attr of attrs as NodePath<t.MarkoAttribute>[]) {
      const name = attr.node.name;

      const value = attr.get("value");
      const { confident, value: computed } = value.evaluate();

      // special handling of class/style??
      if (confident) {
        writeTemplate(tag, getHTMLRuntime(tag).attr(name, computed));
      } else {
        if (!ofInterest) {
          ofInterest = true;
          writeWalks(tag, Walks.GET);
          writeHydrate(tag, t.expressionStatement(callRuntime(tag, "walk")));
        }
        writeHydrate(
          tag,
          t.expressionStatement(
            callRuntime(tag, "attr", t.stringLiteral(name), attr.node.value!)
          )
        );
      }
    }

    let emptyBody = false;

    if (tagDef && tagDef.parseOptions?.openTagOnly) {
      switch (tagDef.htmlType) {
        case "svg":
        case "math":
          writeTemplate(tag, `/>`);
          break;
        default:
          writeTemplate(tag, `>`);
          break;
      }
      emptyBody = true;
    } else if (tag.node.body.body.length) {
      writeTemplate(tag, `>`);
      if (tag.node.body.body.length === 1) setOnlyChild(tag);
    } else {
      writeTemplate(tag, `></${tagDef.name}>`);
      emptyBody = true;
    }

    if (emptyBody) {
      writeWalks(tag, Walks.NEXT);
      tag.remove();
    } else writeWalks(tag, Walks.ENTER);
  }
}

export function exit(tag: NodePath<t.MarkoTag>) {
  const tagDef = getTagDef(tag);
  if (tagDef && tagDef.name) writeTemplate(tag, `</${tagDef.name}>`);
  writeWalks(tag, Walks.EXIT);
  clearOnlyChild(tag);
  tag.remove();
}
