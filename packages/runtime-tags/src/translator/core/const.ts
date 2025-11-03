import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import evaluate from "../util/evaluate";
import { isOutputDOM } from "../util/marko-config";
import {
  BindingType,
  setBindingDownstream,
  trackVarReferences,
} from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getSection } from "../util/sections";
import { addValue, initValue } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    const { node } = tag;
    const [valueAttr] = node.attributes;

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<const>` tag](https://markojs.com/docs/reference/core-tag#const) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables).",
        );
    }

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<const>` tag](https://markojs.com/docs/reference/core-tag#const) requires a [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<const>` tag](https://markojs.com/docs/reference/core-tag#const) only supports the [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    const valueExtra = evaluate(valueAttr.value);
    const upstreamAlias = t.isIdentifier(valueAttr.value)
      ? tag.scope.getBinding(valueAttr.value.name)?.identifier.extra?.binding
      : undefined;

    if (upstreamAlias) {
      valueExtra.pruned = true;
    }

    const binding = trackVarReferences(tag, BindingType.derived, upstreamAlias);

    if (binding) {
      if (node.var!.type === "Identifier") {
        const assignment = tag.scope.getBinding(node.var.name)
          ?.constantViolations?.[0];
        if (assignment) {
          throw assignment.buildCodeFrameError(
            `${node.var.name} is readonly and cannot be mutated.`,
          );
        }
      }
      if (!valueExtra.nullable) binding.nullable = false;
      if (!upstreamAlias) setBindingDownstream(binding, valueExtra);
    }
  },
  translate: {
    exit(tag) {
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
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create an constant binding.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#const",
    },
  ],
  types: runtimeInfo.name + "/tags/const.d.marko",
} as Tag;
