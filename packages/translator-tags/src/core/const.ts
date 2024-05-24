import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { BindingType, trackVarReferences } from "../util/references";
import { getSection } from "../util/sections";
import { addValue, initValue } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoParams(tag);
    assertNoBodyContent(tag);
    const { node } = tag;
    const [valueAttr] = node.attributes;

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'const' tag requires a tag variable.");
    }

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'const' tag requires a default attribute.");
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'const' tag only supports the 'default' attribute.",
        );
    }

    const upstreamAlias = t.isIdentifier(valueAttr.value)
      ? tag.scope.getBinding(valueAttr.value.name)?.identifier.extra?.binding
      : undefined;

    trackVarReferences(
      tag,
      BindingType.derived,
      upstreamAlias,
      (valueAttr.value.extra ??= {}),
    );
  },
  translate(tag) {
    const { node } = tag;
    const [valueAttr] = node.attributes;
    const { value } = valueAttr;

    if (isOutputDOM()) {
      const section = getSection(tag);
      const varBinding = node.var!.extra?.binding;

      if (varBinding && !varBinding.upstreamAlias) {
        const derivation = initValue(varBinding)!;
        addValue(section, value.extra?.referencedBindings, derivation, value);
      }
    } else {
      translateVar(tag, value);
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create an constant binding.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#const",
    },
  ],
  types: "@marko/translator-tags/tag-types/const.d.marko",
} as Tag;
