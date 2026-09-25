import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertNoTagVarMutation } from "../util/assert";
import * as ValueKind from "../util/constants/value-kind";
import evaluate, { getPossibleValues, getValueKinds } from "../util/evaluate";
import { isOutputDOM } from "../util/marko-config";
import {
  BindingType,
  untrackNode,
  setBindingDownstream,
  trackVarReferences,
} from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getOrCreateSection, getSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-statements";
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
      const looksLikeDeclaration =
        !node.attributes.some(
          (attr) =>
            t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
        ) &&
        node.attributes.length === 1 &&
        t.isMarkoAttribute(node.attributes[0]) &&
        /^[A-Za-z_$][\w$]*$/.test(node.attributes[0].name);
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The [\`<const>\` tag](https://markojs.com/docs/reference/core-tag#const) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables)${
            looksLikeDeclaration
              ? `; the variable goes after a slash: \`<const/${(node.attributes[0] as t.MarkoAttribute).name}=...>\`. For a one time module level value, prefix a plain JavaScript statement with \`static\`.`
              : ", e.g. `<const/doubled=count * 2>`."
          }`,
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
      // The alias reads through its upstream; the value itself stays as is.
      untrackNode(valueAttr.value);
    }

    const binding = trackVarReferences(tag, BindingType.derived, upstreamAlias);

    if (binding) {
      assertNoTagVarMutation(tag);
      const values = getPossibleValues(
        (tag.get("attributes")[0] as t.NodePath<t.MarkoAttribute>).get("value"),
      );
      if (!(getValueKinds(values) & ValueKind.Nullish))
        binding.nullable = false;
      if (!upstreamAlias) {
        // Keep unread initializers because their expressions may have side effects;
        // downstream minification can discard proven-pure values.
        setBindingDownstream(binding, valueExtra);
        addSetupExpr(getOrCreateSection(tag), valueAttr.value);
      }
    }
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const [valueAttr] = node.attributes;
      const { value } = valueAttr;

      const varBinding = node.var!.extra?.binding;

      if (isOutputDOM()) {
        const section = getSection(tag);

        // An unread pure value was dropped, so there is nothing to derive.
        if (varBinding && !varBinding.upstreamAlias && !value.extra?.pruned) {
          const derivation = initValue(varBinding)!;
          addValue(section, value.extra?.referencedBindings, derivation, value);
        }
      } else if (!varBinding?.pruned || !value.extra?.pruned) {
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
      description: "Use to create a constant binding.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#const",
    },
  ],
  types: runtimeInfo.name + "/tags/const.d.marko",
} as Tag;
