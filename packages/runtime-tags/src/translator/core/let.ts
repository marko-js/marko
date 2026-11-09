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
  coreTagLink,
} from "../util/assert";
import { BindingType, getDebugAccess, reserveId } from "../util/bindings";
import evaluate from "../util/evaluate";
import { hasEmittedAssignment } from "../util/finalize-references";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { isOptimize, isOutputDOM } from "../util/marko-config";
import { addReason } from "../util/reasons";
import {
  mergeReferences,
  onFinalizeReferences,
  setDerivedFrom,
  trackVarReferences,
} from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import runtimeInfo from "../util/runtime-info";
import { getScopeExpression } from "../util/scope-read";
import { ensureSection, getSection } from "../util/sections";
import {
  addValue,
  initValue,
  setSectionDebugVar,
  signalHasWork,
  writeSlot,
} from "../util/signals";
import { findSlot, ensureSlot, SlotKind } from "../util/slots";
import { ALWAYS } from "../util/sources";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const tagVar = node.var;
    assertNoSpreadAttrs(tag);
    const { valueAttr, valueChangeAttr } = assertOnlyValueAttr(
      tag,
      false,
      true,
      tagVar ? undefined : getDeclarationHint,
    );
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertHasVar(tag, "For example: `<let/count=0>`.");
    assertIdentifierVar(tag);

    if (valueChangeAttr && evaluate(valueChangeAttr.value).computed) {
      throw tag
        .get("attributes")
        .find((attr) => attr.node === valueChangeAttr)!
        .get("value")
        .buildCodeFrameError(
          `The ${coreTagLink(tag)} [\`valueChange=\` attribute](https://markojs.com/docs/reference/core-tag#controllable-let) must be a function.`,
        );
    }

    const tagSection = ensureSection(tag);
    const binding = trackVarReferences(tag, BindingType.let)!;
    const tagExtra = mergeReferences(tagSection, tag.node, [
      valueAttr?.value,
      valueChangeAttr?.value,
    ]);

    setDerivedFrom(binding, tagExtra);

    if (valueChangeAttr) {
      const changeSlot = ensureSlot(binding, SlotKind.ChangeHandler);
      // The runtime reads the change handler at the value's reserved id.
      reserveId(binding, ReservedId.ChangeHandler);
      tagExtra.retained = true;
      tagExtra.pure =
        (!valueAttr || evaluate(valueAttr.value).pure) &&
        evaluate(valueChangeAttr.value).pure;
      // Only an assignment to the tag variable calls the change handler, so
      // nothing reads it when nothing assigns.
      onFinalizeReferences(() => {
        if (binding.assignments) {
          addReason(changeSlot, ALWAYS);
        }
      });
    } else {
      // An uncontrolled `<let>` keeps its state, yet its initializer re-runs and
      // keeps its reads (serialized) as any value does; an unread let drops it.
      tagExtra.initialValue = true;
      tagExtra.pure = !valueAttr || evaluate(valueAttr.value).pure;
    }
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      // Nothing reads or assigns it and its value was dropped.
      if (node.extra?.dropped) {
        replaceWithStatements(tag);
        return;
      }
      const tagVar = node.var!;
      const { value, valueChange } = getKnownAttrValues(node);
      const section = getSection(tag);
      const binding = tagVar.extra!.binding!;

      // Nothing reads or assigns it, so it holds no slot.
      const unused = binding.pruned && !hasEmittedAssignment(binding);

      if (isOutputDOM()) {
        const tagExtra = tag.node.extra;
        if (unused) {
          // Its impure values run only for what they do, inline as an unread
          // `<const>`'s.
          for (const expr of [value, valueChange]) {
            if (expr && !evaluate(expr).pure) {
              addValue(section, tagExtra, initValue(binding)!, expr);
            }
          }
          replaceWithStatements(tag);
          return;
        }

        const signal = initValue(binding, true);

        addValue(section, tagExtra, signal, value);

        if (valueChange) {
          signal.extraArgs = [valueChange];
        }

        signal.buildAssignment = (valueSection, assignedValue) => {
          if (valueChange || signalHasWork(signal)) {
            return t.callExpression(signal.identifier, [
              getScopeExpression(valueSection, signal.section),
              assignedValue,
            ]);
          }
        };
      } else {
        translateVar(tag, value || t.buildUndefinedNode(), "let");

        if (unused) {
          if (valueChange && !evaluate(valueChange).pure) {
            replaceWithStatements(tag, [t.expressionStatement(valueChange)]);
          }
        } else if (valueChange) {
          const accessor = writeSlot(
            findSlot(binding, SlotKind.ChangeHandler),
            t.logicalExpression("||", valueChange, t.buildUndefinedNode()),
          );
          // Named after the author's binding; other slots are described
          // generically by the serializer instead.
          if (accessor && !isOptimize()) {
            const { root, access } = getDebugAccess(binding, false, toAccess);
            setSectionDebugVar(
              section,
              accessor,
              `${root.name + access}Change`,
              root.loc,
            );
          }
        }
      }

      replaceWithStatements(tag);
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create a mutable binding.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#let",
    },
  ],
  types: runtimeInfo.name + "/tags/let.d.marko",
} as Tag;

// Written like a JS declaration (`let count = 0;` or `<let count=0>`).
function getDeclarationHint(attr: t.MarkoAttribute) {
  if (/^[A-Za-z_$][\w$]*$/.test(attr.name)) {
    return `To declare reactive state, the variable goes after a slash: \`<let/${attr.name}=...>\`. For a one time module level value, prefix a plain JavaScript statement with \`static\`.`;
  }
}
