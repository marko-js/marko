import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertNoBodyContent,
  assertNoSpreadAttrs,
  assertNoTagVarMutation,
} from "../util/assert";
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
import { getOrCreateSection, getSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-statements";
import {
  addValue,
  initValue,
  setRegisteredFnReturnWrapper,
} from "../util/signals";
import translateVar from "../util/translate-var";
import { scopeIdentifier } from "../visitors/program";

export default {
  // Normalize the value to always be a function literal, so every act resumes
  // through a registered factory: no value defaults to identity (making
  // `act(promise)` extend the transaction), and any other expression is read
  // when the act is invoked.
  transform: [
    (tag) => {
      const { node } = tag;
      const [valueAttr] = node.attributes;
      if (!valueAttr) {
        node.attributes = [
          t.markoAttribute(
            "value",
            t.arrowFunctionExpression(
              [t.identifier("act")],
              t.identifier("act"),
            ),
          ),
        ];
      } else if (
        node.attributes.length === 1 &&
        t.isMarkoAttribute(valueAttr) &&
        (valueAttr.default || valueAttr.name === "value") &&
        !t.isFunction(valueAttr.value)
      ) {
        valueAttr.value = t.arrowFunctionExpression(
          [t.restElement(t.identifier("args"))],
          t.optionalCallExpression(
            valueAttr.value,
            [t.spreadElement(t.identifier("args"))],
            true,
          ),
        );
      }
    },
  ],
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
          "The [`<action>` tag](https://markojs.com/docs/reference/core-tag#action) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables), e.g. `<action/save() { ... }>`.",
        );
    }

    if (!t.isIdentifier(node.var)) {
      throw tag
        .get("var")
        .buildCodeFrameError(
          "The [`<action>` tag](https://markojs.com/docs/reference/core-tag#action) variable cannot be destructured.",
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
          "The [`<action>` tag](https://markojs.com/docs/reference/core-tag#action) only supports the [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    const binding = trackVarReferences(tag, BindingType.derived);

    if (binding) {
      // The action variable and its `.pending` property are both readonly.
      assertNoTagVarMutation(tag);
      // `.pending` is runtime-written client state, so it resumes like a
      // `<let>` rather than a re-derived value: promote the property alias to a
      // rootless `let` binding (its own state source) while leaving it
      // registered under the action for `.pending` read resolution.
      const pendingBinding = binding.propertyAliases.get("pending");
      if (pendingBinding) {
        pendingBinding.type = BindingType.let;
        pendingBinding.upstreamAlias = undefined;
        pendingBinding.property = undefined;
      }
      setBindingDownstream(binding, evaluate(valueAttr.value));
      addSetupExpr(getOrCreateSection(tag), valueAttr.value);
      // The `_action` wrapper is reconstructed from the scope on resume, so
      // the registered function must always be scope-reading.
      if (t.isFunction(valueAttr.value)) {
        ((valueAttr.value.extra ??= {}) as t.FunctionExtra).referencesScope =
          true;
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
        if (varBinding) {
          const section = getSection(tag);
          const actionSignal = initValue(varBinding)!;
          const pendingBinding = varBinding.propertyAliases.get("pending");
          let pendingArg: t.Expression = t.numericLiteral(0);

          if (pendingBinding) {
            // `.pending` is runtime-written state, not a derived value: force
            // the slot to persist and its downstream to read it back.
            const pendingSignal = initValue(pendingBinding, true)!;
            pendingSignal.hasSideEffect = pendingSignal.forcePersist = true;
            pendingArg = pendingSignal.identifier;
          }

          // Wrap the closure the registered factory returns so the `_action`
          // runner is rebuilt on resume, not only during fresh-render setup.
          setRegisteredFnReturnWrapper(value as t.Function, (fn) =>
            callRuntime(
              "_action",
              scopeIdentifier,
              getScopeAccessorLiteral(varBinding, true),
              pendingArg,
              fn,
            ),
          );
          addValue(
            section,
            value.extra?.referencedBindings,
            actionSignal,
            value,
          );
        }
      } else {
        translateVar(tag, callRuntime("_action", value));
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
        "Use to declare a user act and expose whether it is in flight.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#action",
    },
  ],
  types: runtimeInfo.name + "/tags/action.d.marko",
} as Tag;
