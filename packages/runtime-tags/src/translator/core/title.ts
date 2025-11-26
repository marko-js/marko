import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { bodyToTextLiteral } from "../util/body-to-text-literal";
import { isOutputHTML } from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import * as writer from "../util/writer";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);

    const tagVar = tag.node.var;
    if (tagVar) {
      throw tag
        .get("var")
        .buildCodeFrameError(
          "The `<title>` tag cannot expose a tag variable. Use `document.title` instead.",
        );
    }

    const referenceNodes: t.Node[] = [];
    for (const child of tag.get("body").get("body")) {
      if (child.isMarkoPlaceholder()) {
        referenceNodes.push(child.node.value);
      } else if (!child.isMarkoText()) {
        throw child.buildCodeFrameError(
          "Invalid child. Only text is allowed inside the `<title>` tag.",
        );
      }
    }

    mergeReferences(getSection(tag), tag.node, referenceNodes);
    tag.skip();
  },
  translate: {
    enter(tag) {
      if (isOutputHTML()) {
        const write = writer.writeTo(tag);
        write`<title>`;
        for (const child of tag.node.body.body) {
          if (t.isMarkoText(child)) {
            write`${child.value}`;
          } else if (t.isMarkoPlaceholder(child)) {
            write`${callRuntime("_to_text", child.value)}`;
          }
        }
        write`</title>`;
      } else {
        addStatement(
          "render",
          getSection(tag),
          tag.node.extra!.referencedBindings,
          t.expressionStatement(
            callRuntime("_title", bodyToTextLiteral(tag.node.body)),
          ),
        );
      }

      tag.remove();
    },
  },
  parseOptions: {
    text: true,
  },
  attributes: {},
} as Tag;
