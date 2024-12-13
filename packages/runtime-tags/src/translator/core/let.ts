import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  computeNode,
  type Tag,
} from "@marko/compiler/babel-utils";
import { AccessorChar } from "@marko/runtime-tags/common/types";

import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import {
  BindingType,
  getScopeAccessorLiteral,
  mergeReferences,
  trackVarReferences,
} from "../util/references";
import { getScopeExpression } from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import {
  addValue,
  getSerializedScopeProperties,
  initValue,
} from "../util/signals";
import translateVar from "../util/translate-var";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    static?: boolean;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const tagVar = node.var;
    let valueAttr: t.MarkoAttribute | undefined;
    let valueChangeAttr: t.MarkoAttribute | undefined;
    for (const attr of node.attributes) {
      if (t.isMarkoAttribute(attr)) {
        if (attr.name === "value") {
          valueAttr = attr;
        } else if (attr.name === "valueChange") {
          valueChangeAttr = attr;
        } else {
          const start = attr.loc?.start;
          const end = attr.loc?.end;
          const msg =
            "The `let` tag only supports the `value` attribute and its change handler.";

          if (start == null || end == null) {
            throw tag.get("name").buildCodeFrameError(msg);
          } else {
            throw tag.hub.buildError(
              { loc: { start, end } } as unknown as t.Node,
              msg,
              Error,
            );
          }
        }
      }
    }

    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoSpreadAttrs(tag);

    if (!tagVar) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `let` tag requires a tag variable.");
    }

    if (!t.isIdentifier(tagVar)) {
      throw tag
        .get("var")
        .buildCodeFrameError("The `let` tag variable cannot be destructured.");
    }

    if (valueChangeAttr && computeNode(valueChangeAttr.value)) {
      throw tag
        .get("attributes")
        .find((attr) => attr.node === valueChangeAttr)!
        .get("value")
        .buildCodeFrameError(
          "The `let` tag `valueChange` attribute must be a function.",
        );
    }

    mergeReferences(getOrCreateSection(tag), tag.node, [
      valueAttr?.value,
      valueChangeAttr?.value,
    ]);

    trackVarReferences(tag, BindingType.let, undefined, tag.node.extra);
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const tagVar = node.var!;
      const valueAttr =
        node.attributes.find(
          (attr) =>
            t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
        ) ?? t.markoAttribute("value", t.identifier("undefined"));
      const valueChangeAttr = node.attributes.find(
        (attr) => t.isMarkoAttribute(attr) && attr.name === "valueChange",
      );
      const section = getSection(tag);
      const binding = tagVar.extra!.binding!;

      if (isOutputDOM()) {
        const signal = initValue(binding, "state");
        const referencedBindings = tag.node.extra!.referencedBindings;

        addValue(section, referencedBindings, signal, valueAttr.value);

        if (valueChangeAttr) {
          signal.extraArgs = [valueChangeAttr.value];
        }

        signal.buildAssignment = (valueSection, value) => {
          const scope = getScopeExpression(valueSection, signal.section);

          return t.callExpression(signal.identifier, [scope, value]);
        };
      } else {
        translateVar(tag, valueAttr.value);

        if (valueChangeAttr) {
          getSerializedScopeProperties(section).set(
            t.stringLiteral(
              getScopeAccessorLiteral(binding).value +
                AccessorChar.TagVariableChange,
            ),
            valueChangeAttr.value,
          );
        }
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
      description: "Use to create a mutable binding.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#let",
    },
  ],
  types: "@marko/runtime-tags/tag-types/let.d.marko",
} as Tag;
