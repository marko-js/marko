import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import evaluate from "../util/evaluate";
import { isOutputDOM } from "../util/marko-config";
import {
  BindingType,
  getScopeAccessorLiteral,
  setBindingDownstream,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeExpression } from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-statements";
import { addValue, getSignalFn, initValue } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoSpreadAttrs(tag);
    const { node } = tag;
    const [valueAttr] = node.attributes;

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<draft>` tag](https://markojs.com/docs/reference/core-tag#draft) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables), e.g. `<draft/cart=$global.data.cart>`.",
        );
    }

    if (!t.isIdentifier(node.var)) {
      throw tag
        .get("var")
        .buildCodeFrameError(
          "The [`<draft>` tag](https://markojs.com/docs/reference/core-tag#draft) variable cannot be destructured.",
        );
    }

    if (
      !valueAttr ||
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<draft>` tag](https://markojs.com/docs/reference/core-tag#draft) only supports the [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    const valueExtra = evaluate(valueAttr.value);
    // A draft keeps its own slot even when the source is a plain binding, so
    // provisional assignments never write the source.
    const binding = trackVarReferences(tag, BindingType.derived);

    if (binding) {
      if (!valueExtra.nullable) binding.nullable = false;
      setBindingDownstream(binding, valueExtra);
      addSetupExpr(getOrCreateSection(tag), valueAttr.value);
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

        if (varBinding) {
          const signal = initValue(varBinding)!;
          // The runtime stores the effective value in the scope slot and its
          // downstream reads it back, so the value is never inlined away.
          signal.hasSideEffect = signal.forcePersist = true;
          signal.build = () =>
            callRuntime(
              "_draft",
              getScopeAccessorLiteral(varBinding, true, true),
              getSignalFn(signal),
            );
          signal.buildAssignment = (valueSection, valueExpr) =>
            t.callExpression(
              t.memberExpression(signal.identifier, t.identifier("d")),
              [getScopeExpression(valueSection, signal.section), valueExpr],
            );
          addValue(section, value.extra?.referencedBindings, signal, value);
        }
      } else {
        // `let` so the draft assignments in a (server-inert) action body stay
        // valid; on the server the draft simply is its source.
        translateVar(tag, value, "let");
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
      description:
        "Use to declare a view of server truth that accepts provisional assignments.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#draft",
    },
  ],
  types: runtimeInfo.name + "/tags/draft.d.marko",
} as Tag;
