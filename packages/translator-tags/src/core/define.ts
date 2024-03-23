import { type Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import attrsToObject from "../util/attrs-to-object";
import { isOutputHTML } from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import {
  addValue,
  getTagVarSignal,
  writeHTMLResumeStatements,
} from "../util/signals";
import translateVar from "../util/translate-var";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";
import customTag from "../visitors/tag/custom-tag";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      customTag.analyze.enter(tag);
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      customTag.analyze.exit(tag);
      mergeReferences(
        tag,
        tag.node.attributes.map((attr) => attr.value),
      );
    },
  },
  translate: {
    enter(tag) {
      if (!tag.node.var) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "<define> requires a variable to be specified, eg <define/NAME>.",
          );
      }
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      const { node } = tag;

      if (isOutputHTML()) {
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));
        const attrs = attrsToObject(tag, true);
        translateVar(tag, attrs);
      } else {
        const section = getSection(tag);
        const tagBody = tag.get("body");
        const tagBodySection = getSection(tagBody);
        const references = node.extra?.references;
        const derivation = getTagVarSignal(tag.get("var"))!;

        let attrsObject = attrsToObject(tag);
        if (tagBodySection !== section) {
          attrsObject ??= t.objectExpression([]);
          (attrsObject as t.ObjectExpression).properties.push(
            t.objectProperty(
              t.identifier("renderBody"),
              callRuntime(
                "bindRenderer",
                scopeIdentifier,
                writer.getRenderer(tagBodySection),
              ),
            ),
          );
        }

        addValue(section, references, derivation, attrsObject);
      }

      tag.remove();
    },
  },
  attributes: {},
  autocomplete: [
    {
      description:
        "Use to create a constant object binding that can be rendered.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#define",
    },
  ],
  template: "tag-types/define.d.marko",
} as Tag;
