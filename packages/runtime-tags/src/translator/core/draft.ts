import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { ReservedId } from "../../common/types";
import {
  assertHasVar,
  assertIdentifierVar,
  assertNoBodyContent,
  assertNoSpreadAttrs,
  assertOnlyValueAttr,
} from "../util/assert";
import { BindingType, reserveId } from "../util/bindings";
import evaluate from "../util/evaluate";
import { isOutputDOM } from "../util/marko-config";
import { addAlwaysReason } from "../util/reasons";
import {
  mergeReferences,
  onFinalizeReferences,
  setDerivedFrom,
  trackVarReferences,
} from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getScopeExpression } from "../util/scope-read";
import { ensureSection, getSection } from "../util/sections";
import { addValue, initValue, signalHasWork } from "../util/signals";
import { ensureSlot, SlotKind } from "../util/slots";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoSpreadAttrs(tag);
    const valueAttr = assertOnlyValueAttr(tag, true);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertHasVar(tag, "For example: `<draft/liked=input.liked>`.");
    assertIdentifierVar(tag);

    const binding = trackVarReferences(tag, BindingType.let)!;
    const tagExtra = mergeReferences(ensureSection(tag), tag.node, [
      valueAttr.value,
    ]);

    setDerivedFrom(binding, tagExtra);
    // A patch fills a draft's source as it fills a controlled `<let>`'s.
    ensureSlot(binding, SlotKind.ChangeHandler);
    // The runtime keeps the draft's guess where a controlled `<let>` keeps its change handler.
    reserveId(binding, ReservedId.ChangeHandler);
    tagExtra.retained = true;
    tagExtra.pure = evaluate(valueAttr.value).pure;
    // An act's guess drops back to the value the client holds.
    onFinalizeReferences(() => {
      if (binding.assignments) addAlwaysReason(binding);
    });
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      if (node.extra?.dropped) {
        tag.remove();
        return;
      }
      const [valueAttr] = node.attributes;
      const binding = node.var!.extra!.binding!;

      if (isOutputDOM()) {
        const signal = initValue(binding, "_draft");
        addValue(getSection(tag), node.extra, signal, valueAttr.value);
        signal.buildAssignment = (valueSection, value) => {
          if (signalHasWork(signal)) {
            return t.callExpression(signal.identifier, [
              getScopeExpression(valueSection, signal.section),
              value,
            ]);
          }
        };
      } else {
        translateVar(tag, valueAttr.value, "let");
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
        "Use to create a value that an action can change ahead of its source.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#draft",
    },
  ],
  types: runtimeInfo.name + "/tags/draft.d.marko",
} as Tag;
