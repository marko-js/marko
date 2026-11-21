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
  assertOnlyValueAttr,
} from "../util/assert";
import { BindingType } from "../util/bindings";
import evaluate, {
  getAllKinds,
  getValueKind,
  isNullable,
  isPure,
  KIND_FUNCTION,
} from "../util/evaluate";
import { isOutputDOM } from "../util/marko-config";
import {
  dropNodes,
  isReferenceHoisted,
  setDerivedFrom,
  trackVarReferences,
} from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import runtimeInfo from "../util/runtime-info";
import { ensureSection, getSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addValue, initValue } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertHasVar(tag, getVarHint);
    const { valueAttr } = assertOnlyValueAttr(tag, true);

    const valueExtra = (valueAttr.value.extra ??= {});
    valueExtra.pure = isPure(evaluate(valueAttr.value));
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
      assertNoHoistedTagName(tag);
      if (!isNullable(evaluate(valueAttr.value))) binding.nullable = false;
      if (aliased) {
        // Never read as written: its parts read through the aliased binding, and
        // a pattern holding a rest is declared from it.
        dropNodes(valueAttr.value);
        valueExtra.binding = aliased;
      } else {
        setDerivedFrom(binding, valueExtra);
        addSetupExpr(ensureSection(tag), valueAttr.value);
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
        if (varBinding && !varBinding.aliasOf && !value.extra?.dropped) {
          const signal = initValue(varBinding);
          addValue(section, value.extra, signal, value);
        }
      } else if (!varBinding?.pruned || !value.extra?.dropped) {
        translateVar(tag, value);
      }

      replaceWithStatements(tag);
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  types: runtimeInfo.name + "/tags/const.d.marko",
} as Tag;

// A hoisted value must be a function, which `_assert_hoist` reports at run time.
// A tag name reading one that is certainly none is reported here instead.
function assertNoHoistedTagName(tag: t.NodePath<t.MarkoTag>) {
  if (t.isIdentifier(tag.node.var)) {
    const babelBinding = tag.scope.getBinding(tag.node.var.name)!;
    for (const ref of babelBinding.referencePaths) {
      if (
        ref.parent.type === "MarkoTag" &&
        ref.parent.name === ref.node &&
        isReferenceHoisted(babelBinding.path, ref)
      ) {
        const kind = getValueKind(tag.node.attributes[0].value, tag);
        if (!(getAllKinds(kind) & KIND_FUNCTION)) {
          throw ref.buildCodeFrameError(
            "Hoisted values must be functions. The `<const>` tag variable is not one, so it may not be hoisted as a tag name. Please move the `<const>` tag prior to any tag that it names.",
          );
        }
      }
    }
  }
}

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
