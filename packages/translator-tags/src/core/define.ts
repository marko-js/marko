import { type Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import attrsToObject from "../util/attrs-to-object";
import { isOutputHTML } from "../util/marko-config";
import {
  BindingType,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import { getSection, startSection } from "../util/sections";
import {
  addValue,
  getTagVarSignal,
  writeHTMLResumeStatements,
} from "../util/signals";
import translateVar from "../util/translate-var";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const tagBody = tag.get("body");
      startSection(tagBody);

      trackVarReferences(tag, BindingType.derived);
      trackParamsReferences(tagBody, BindingType.param);
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
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
        const references = node.extra?.referencedBindings;
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
  types: "@marko/translator-tags/tag-types/define.d.marko",
} as Tag;
