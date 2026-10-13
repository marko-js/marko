import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertHasVar,
  assertNoBodyContent,
  assertNoTagVarMutation,
  assertValueAttr,
} from "../util/assert";
import { BindingType } from "../util/bindings";
import evaluate from "../util/evaluate";
import { isOutputDOM } from "../util/marko-config";
import {
  dropNodes,
  getReferencedBindings,
  isReferenceHoisted,
  setDerivedFrom,
  trackVarReferences,
} from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getOrCreateSection, getSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addValue, initValue } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertHasVar(tag, getVarHint);
    const valueAttr = assertValueAttr(tag, true);

    const valueExtra = (valueAttr.value.extra ??= {});
    valueExtra.pure = evaluate(valueAttr.value).pure;
    const valueBinding = t.isIdentifier(valueAttr.value)
      ? tag.scope.getBinding(valueAttr.value.name)
      : undefined;
    // A hoisted read is the variable's getter, a value of its own.
    const aliased =
      valueBinding?.identifier.extra?.binding &&
      !isReferenceHoisted(
        valueBinding.path,
        tag.get("attributes")[0].get("value"),
      )
        ? valueBinding.identifier.extra.binding
        : undefined;

    const binding = trackVarReferences(tag, BindingType.derived, aliased);

    if (binding) {
      assertNoTagVarMutation(tag);
      if (!evaluate(valueAttr.value).nullable) binding.nullable = false;
      if (aliased) {
        // Never read as written: its parts read through the aliased binding, and
        // a pattern holding a rest is declared from it.
        dropNodes(valueAttr.value);
        valueExtra.binding = aliased;
      } else {
        setDerivedFrom(binding, valueExtra);
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
        if (varBinding && !varBinding.aliasOf && !value.extra?.pruned) {
          const derivation = initValue(varBinding)!;
          addValue(
            section,
            getReferencedBindings(value.extra),
            derivation,
            value,
          );
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

function getVarHint(tag: t.NodePath<t.MarkoTag>) {
  const { attributes } = tag.node;
  const [attr] = attributes;
  return attributes.length === 1 &&
    attr.type === "MarkoAttribute" &&
    attr.name !== "value" &&
    /^[A-Za-z_$][\w$]*$/.test(attr.name)
    ? `The variable goes after a slash: \`<const/${attr.name}=...>\`. For a one time module level value, prefix a plain JavaScript statement with \`static\`.`
    : "For example: `<const/doubled=count * 2>`.";
}
