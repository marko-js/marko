import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import evaluate from "../util/evaluate";
import { isOutputDOM, isPatch } from "../util/marko-config";
import { getPatchFillKey, isPatchFillBinding } from "../util/patch/refresh";
import {
  BindingType,
  FORCED,
  getScopeAccessorLiteral,
  onFinalizeReferences,
  setBindingDownstream,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeExpression } from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import { addSerializeReason } from "../util/serialize-reasons";
import { addSetupExpr } from "../util/setup-statements";
import { addValue, getSignalFn, initValue } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  transform(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const valueAttr = node.attributes[0];
    if (
      !t.isIdentifier(node.var) ||
      !valueAttr ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      return;
    }
    // The source derives on its own (a `<const>` the draft reads), so a
    // patch keeps filling it while the draft itself is client state.
    const source = tag.scope.generateUidIdentifier(`${node.var.name}Source`);
    tag.insertBefore(
      t.markoTag(
        t.stringLiteral("const"),
        [t.markoAttribute("value", valueAttr.value)],
        t.markoTagBody([]),
        null,
        t.cloneNode(source),
      ),
    );
    valueAttr.value = source;
  },
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
          "The [`<draft>` tag](https://markojs.com/docs/reference/core-tag#draft) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables), e.g. `<draft/page=currentPage>`.",
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
          "The [`<draft>` tag](https://markojs.com/docs/reference/core-tag#draft) requires exactly the [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value): the source it derives from.",
        );
    }

    const valueExtra = evaluate(valueAttr.value);
    // Its own slot, never an alias of the source: a guess lands in the
    // draft while the source keeps deriving underneath. State once a guess
    // assigns it (its reads then resume), derived from the source otherwise.
    const binding = trackVarReferences(tag, BindingType.let)!;
    binding.rederives = true;
    // The derivation and the count of open guesses ride the next two slots.
    binding.reserveSize = 2;
    if (!valueExtra.nullable) binding.nullable = false;
    setBindingDownstream(binding, valueExtra);
    const tagSection = getOrCreateSection(tag);
    addSetupExpr(tagSection, valueAttr.value);
    // A guessed draft releases to the derivation it resumed with, so that
    // value ships even when nothing on the client reads it.
    onFinalizeReferences(() => {
      if (binding.assignments) {
        addSerializeReason(tagSection, FORCED, binding);
      }
    });
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const [valueAttr] = node.attributes;
      const { value } = valueAttr;

      if (isOutputDOM()) {
        const section = getSection(tag);
        const binding = node.var!.extra!.binding!;
        // A draft nothing reads is dead.
        if (binding.pruned) return tag.remove();
        const signal = initValue(binding);
        signal.forcePersist = true;
        signal.build = () =>
          // A flush seeds a scope it creates through the fill registration.
          isPatch() && isPatchFillBinding(binding)
            ? callRuntime(
                "_fill_draft",
                t.stringLiteral(getPatchFillKey(binding)),
                getScopeAccessorLiteral(binding, true, true),
                getSignalFn(signal),
              )
            : callRuntime(
                "_draft",
                getScopeAccessorLiteral(binding, true, true),
                getSignalFn(signal),
              );
        addValue(section, value.extra?.referencedBindings, signal, value);
        // An assignment is a guess: the signal's third argument.
        signal.buildAssignment = (valueSection, guess) =>
          t.callExpression(signal.identifier, [
            getScopeExpression(valueSection, signal.section),
            guess,
            t.numericLiteral(1),
          ]);
      } else {
        // A `let`: a body guesses against it, though never on the server.
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
        "Use to derive a value that accepts provisional assignments from an action or event handler.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#draft",
    },
  ],
  types: runtimeInfo.name + "/tags/draft.d.marko",
} as Tag;
