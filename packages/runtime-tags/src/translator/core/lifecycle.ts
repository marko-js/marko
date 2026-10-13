import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { getReferencedBindings, mergeTagReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { scopeIdentifier } from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { createSectionState } from "../util/state";
import { propsToExpression, translateAttrs } from "../util/translate-attrs";

const [getIndex, setIndex] = createSectionState("lifecycleIndex", () => 0);

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    // Attribute names go unchecked: everything but the three hooks becomes the
    // `this` of those hooks, so an unrecognized `on*` is a method, not a typo.
    assertNoSpreadAttrs(tag);

    const { node } = tag;
    const section = getOrCreateSection(tag);
    for (const attr of node.attributes) {
      (attr.value.extra ??= {}).consumed = true;
    }
    const tagExtra = mergeTagReferences(section, tag.node);
    tagExtra.isEffect = true;
    // `_lifecycle` registers cleanup via `$signal` at runtime, so the scope
    // must resume with its closest branch linked.
    section.hasAbortSignal = true;

    if (node.attributes.length === 0) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<lifecycle>` tag](https://markojs.com/docs/reference/core-tag#lifecycle) requires at least one attribute.",
        );
    }

    getProgram().node.extra.isInteractive = true;
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const section = getSection(tag);
      const tagExtra = node.extra!;
      const referencedBindings = getReferencedBindings(tagExtra);

      if (isOutputDOM()) {
        const translatedAttrs = translateAttrs(tag);
        const index = getIndex(section);
        setIndex(section, index + 1);
        translatedAttrs.statements.push(
          t.expressionStatement(
            callRuntime(
              "_lifecycle",
              scopeIdentifier,
              propsToExpression(translatedAttrs.properties),
              index > 0 ? t.numericLiteral(index) : undefined,
            ),
          ),
        );
        addStatement(
          "effect",
          section,
          referencedBindings,
          translatedAttrs.statements,
        );
      } else {
        addHTMLEffectCall(section, referencedBindings);
      }

      tag.remove();
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create side effects.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#lifecycle",
    },
  ],
  types: runtimeInfo.name + "/tags/lifecycle.d.marko",
} as Tag;
