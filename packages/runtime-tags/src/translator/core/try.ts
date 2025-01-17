import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoSpreadAttrs } from "../util/assert";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import { getAllTagReferenceNodes, mergeReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  getOrCreateSection,
  getSectionForBody,
  setSectionParentIsOwner,
} from "../util/sections";
import { writeHTMLResumeStatements } from "../util/signals";
import { propsToExpression, translateAttrs } from "../util/translate-attrs";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    assertNoSpreadAttrs(tag);
    analyzeAttributeTags(tag);
    const { node } = tag;
    const section = getOrCreateSection(tag);

    if (!node.body.body.length) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `try` tag requires body content.");
    }

    mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (!getSectionForBody(tag.get("body"))) {
          tag.remove();
          return;
        }

        setAllSectionsParentIsOwner(tag);
        writer.flushBefore(tag);
      },
      exit(tag) {
        const tagBody = tag.get("body");
        const translatedAttrs = translateAttrs(tag);

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);
        tag.insertBefore(translatedAttrs.statements);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "tryContent",
                propsToExpression(translatedAttrs.properties),
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        setAllSectionsParentIsOwner(tag);
      },
      exit(tag) {
        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description:
        "Used to capture errors and display placeholders for nested content.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#try",
    },
  ],
  types: runtimeInfo.name + "/tag-types/try.d.marko",
} as Tag;

function setAllSectionsParentIsOwner(tag: t.NodePath<t.MarkoTag>) {
  for (const attrTag of tag.get("attributeTags")) {
    if (attrTag.isMarkoTag()) {
      setAllSectionsParentIsOwner(attrTag);
    }
  }

  const bodySection = getSectionForBody(tag.get("body"));
  if (bodySection) {
    setSectionParentIsOwner(bodySection, true);
  }
}
