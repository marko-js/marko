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
  dropNodes,
  isReferenceHoisted,
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
      dropNodes(valueAttr.value);
    }

    const binding = trackVarReferences(tag, BindingType.derived, upstreamAlias);

    if (binding) {
      if (!valueExtra.nullable) binding.nullable = false;

      const babelBinding =
        node.var.type === "Identifier"
          ? tag.scope.getBinding(node.var.name)
          : undefined;

      if (babelBinding?.constantViolations.length) {
        for (const assignment of babelBinding.constantViolations) {
          if (assignment.type !== "MarkoTag") {
            // Ignore duplicate declaration violations.
            throw assignment.buildCodeFrameError(
              `${(node.var as t.Identifier).name} is readonly and cannot be mutated.`,
            );
          }
        }
      }

      if (
        babelBinding &&
        !upstreamAlias &&
        !binding.aliases.size &&
        !binding.propertyAliases.size &&
        valueExtra.confident &&
        canInlineValue(valueExtra.computed) &&
        !babelBinding.referencePaths.some((ref) =>
          isReferenceHoisted(babelBinding.path, ref),
        )
      ) {
        binding.type = BindingType.constant;
        binding.constValue = valueExtra.computed;

        for (const ref of babelBinding.referencePaths) {
          const refExtra = (ref.node.extra ??= {});
          refExtra.confident = true;
          refExtra.computed = valueExtra.computed;
          refExtra.nullable = valueExtra.nullable;
        }
      } else if (!upstreamAlias) {
        setBindingDownstream(binding, valueExtra);
      }
    }
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const [valueAttr] = node.attributes;
      const { value } = valueAttr;
      const varBinding = node.var!.extra?.binding;

      if (varBinding?.type !== BindingType.constant) {
        if (isOutputDOM()) {
          const section = getSection(tag);
          if (varBinding && !varBinding.upstreamAlias) {
            const derivation = initValue(varBinding)!;
            addValue(
              section,
              value.extra?.referencedBindings,
              derivation,
              value,
            );
          }
        } else {
          translateVar(tag, value);
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
      description: "Use to create a constant binding.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#const",
    },
  ],
  types: runtimeInfo.name + "/tags/const.d.marko",
} as Tag;

function canInlineValue(value: unknown) {
  switch (typeof value) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "undefined":
      return true;
    default:
      return value === null;
  }
}
