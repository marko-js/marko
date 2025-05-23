import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  computeNode,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { getAccessorPrefix } from "../util/get-accessor-char";
import { isOutputDOM } from "../util/marko-config";
import {
  BindingType,
  mergeReferences,
  setBindingValueExpr,
  trackVarReferences,
} from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getScopeExpression } from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import { forceBindingSerialize } from "../util/serialize-reasons";
import {
  addValue,
  initValue,
  setBindingSerializedValue,
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

    const tagSection = getOrCreateSection(tag);
    const binding = trackVarReferences(tag, BindingType.let)!;
    setBindingValueExpr(
      binding,
      mergeReferences(tagSection, tag.node, [
        valueAttr?.value,
        valueChangeAttr?.value,
      ]),
    );

    if (valueChangeAttr) {
      // TODO: could be based on if there are actually assignments.
      forceBindingSerialize(
        tagSection,
        binding,
        getAccessorPrefix().TagVariableChange,
      );
    }
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
        translateVar(tag, valueAttr.value, "let");

        if (valueChangeAttr) {
          setBindingSerializedValue(
            section,
            binding,
            valueChangeAttr.value,
            getAccessorPrefix().TagVariableChange,
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
  types: runtimeInfo.name + "/tag-types/let.d.marko",
} as Tag;
