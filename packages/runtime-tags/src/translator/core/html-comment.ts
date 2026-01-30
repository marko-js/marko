import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { bodyToTextLiteral } from "../util/body-to-text-literal";
import { isOutputHTML } from "../util/marko-config";
import {
  type Binding,
  BindingType,
  createBinding,
  mergeReferences,
  trackDomVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { createScopeReadExpression } from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../util/serialize-reasons";
import { addStatement } from "../util/signals";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const kNodeBinding = Symbol("comment tag binding");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNodeBinding]?: Binding;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);

    const tagVar = tag.node.var;
    let needsBinding = false;
    if (tagVar) {
      if (!t.isIdentifier(tagVar)) {
        throw tag
          .get("var")
          .buildCodeFrameError(
            "The [`<html-comment>` tag](https://markojs.com/docs/reference/core-tag#html-comment) tag variable cannot be destructured.",
          );
      }
      needsBinding = true;
    }

    const referenceNodes: t.Node[] = [];
    for (const child of tag.get("body").get("body")) {
      if (child.isMarkoPlaceholder()) {
        referenceNodes.push(child.node.value);
        needsBinding = true;
      } else if (!child.isMarkoText()) {
        throw child.buildCodeFrameError(
          "Invalid child. Only text is allowed inside an html comment.",
        );
      }
    }
    if (needsBinding) {
      const tagSection = getOrCreateSection(tag);
      const tagExtra = mergeReferences(tagSection, tag.node, referenceNodes);
      const nodeBinding = (tagExtra[kNodeBinding] = createBinding(
        "#comment",
        BindingType.dom,
        tagSection,
        undefined,
        undefined,
        undefined,
        undefined,
        !!tagVar,
      ));

      trackDomVarReferences(tag, nodeBinding);

      addSerializeExpr(tagSection, !!tagVar || tagExtra, nodeBinding);
    }
    tag.skip();
  },
  translate: {
    enter(tag) {
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];

      if (nodeBinding) {
        walks.visit(tag, WalkCode.Get);
      }

      walks.enter(tag);
      writer.writeTo(tag)`<!--`;
    },
    exit(tag) {
      const tagSection = getSection(tag);
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];
      const write = writer.writeTo(tag);

      // TODO: If the tag is completely empty, make the marker node the same as the comment node.
      if (isOutputHTML()) {
        for (const child of tag.node.body.body) {
          if (t.isMarkoText(child)) {
            write`${child.value}`;
          } else if (t.isMarkoPlaceholder(child)) {
            write`${callRuntime("_escape_text", child.value)}`;
          }
        }
      } else {
        const textLiteral = bodyToTextLiteral(tag.node.body);

        if (t.isStringLiteral(textLiteral)) {
          write`${textLiteral}`;
        } else {
          addStatement(
            "render",
            getSection(tag),
            tagExtra.referencedBindings,
            t.expressionStatement(
              callRuntime(
                "_text",
                createScopeReadExpression(nodeBinding!),
                textLiteral,
              ),
            ),
          );
        }
      }

      walks.exit(tag);
      write`-->`;

      if (nodeBinding) {
        writer.markNode(
          tag,
          nodeBinding,
          getSerializeReason(tagSection, nodeBinding),
        );
      }

      tag.remove();
    },
  },
  parseOptions: {
    text: true,
  },
  types: runtimeInfo.name + "/tags/html-comment.d.marko",
  autocomplete: [
    {
      description:
        "Use to create an html comment that is not stripped from the output.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#html-comment",
    },
  ],
} as Tag;
