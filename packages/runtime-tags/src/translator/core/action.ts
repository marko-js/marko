import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { ReservedId } from "../../common/types";
import { toAccess } from "../../html/serializer";
import {
  assertHasVar,
  assertIdentifierVar,
  assertNoBodyContent,
  assertNoSpreadAttrs,
  assertOnlyValueAttr,
} from "../util/assert";
import { BindingType, getDebugAccess, reserveId } from "../util/bindings";
import evaluate from "../util/evaluate";
import { isOptimize, isOutputDOM } from "../util/marko-config";
import { addReason } from "../util/reasons";
import {
  mergeReferences,
  onFinalizeReferences,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  ensureSection,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import {
  addValue,
  getResumeRegisterId,
  initValue,
  setSectionDebugVar,
  writeSlot,
} from "../util/signals";
import { ensureSlot, findSlot, SlotKind } from "../util/slots";
import { ALWAYS } from "../util/sources";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoSpreadAttrs(tag);
    const valueAttr = assertOnlyValueAttr(tag, false);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertHasVar(tag, "For example: `<action/save=saveFn>`.");
    assertIdentifierVar(tag);

    const binding = trackVarReferences(tag, BindingType.let)!;
    // Its value is its own source: the runtime replaces it when `pending` flips.
    const tagExtra = mergeReferences(
      ensureSection(tag),
      tag.node,
      valueAttr ? [valueAttr.value] : [],
    );
    const fnSlot = ensureSlot(binding, SlotKind.ChangeHandler);

    // The runtime reads the function at the value's reserved id, where a controlled `<let>` keeps its change handler.
    reserveId(binding, ReservedId.ChangeHandler);
    tagExtra.retained = true;
    tagExtra.pure = !valueAttr || evaluate(valueAttr.value).pure;
    onFinalizeReferences(() => {
      if (!binding.pruned) addReason(fnSlot, ALWAYS);
    });
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      if (node.extra?.dropped) {
        tag.remove();
        return;
      }
      const valueAttr = node.attributes[0] as t.MarkoAttribute | undefined;
      const value = valueAttr?.value || t.buildUndefinedNode();
      const binding = node.var!.extra!.binding!;
      const section = getSection(tag);

      if (isOutputDOM()) {
        if (!binding.pruned) {
          addValue(section, node.extra, initValue(binding, "_action"), value);
        }
      } else if (!binding.pruned) {
        translateVar(
          tag,
          callRuntime(
            "_action",
            getScopeIdIdentifier(section),
            t.stringLiteral(getResumeRegisterId(section, binding, "action")),
          ),
        );
        const accessor = writeSlot(
          findSlot(binding, SlotKind.ChangeHandler),
          t.logicalExpression("||", value, t.buildUndefinedNode()),
        );
        if (accessor && !isOptimize()) {
          const { root, access } = getDebugAccess(binding, false, toAccess);
          setSectionDebugVar(
            section,
            accessor,
            `${root.name + access}Fn`,
            root.loc,
          );
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
      description:
        "Use to create a function whose changes to `<draft>` values last while it runs.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#action",
    },
  ],
  types: runtimeInfo.name + "/tags/action.d.marko",
} as Tag;
