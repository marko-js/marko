import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  computeNode,
  getProgram,
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
import { hasEmittedAssignment } from "../util/finalize-references";
import { isOptimize, isOutputDOM, isPatch } from "../util/marko-config";
import { getLetChanges } from "../util/patch/writers";
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

    if (valueChangeAttr && computeNode(valueChangeAttr.value)?.value) {
      throw tag
        .get("attributes")
        .find((attr) => attr.node === valueChangeAttr)!
        .get("value")
        .buildCodeFrameError(
          "The [`<let>` tag](https://markojs.com/docs/reference/core-tag#let) [`valueChange=` attribute](https://markojs.com/docs/reference/core-tag#controllable-let) must be a function.",
        );
    }

    const tagSection = ensureSection(tag);
    const binding = trackVarReferences(tag, BindingType.let)!;
    const tagExtra = mergeReferences(tagSection, tag.node, [
      valueAttr?.value,
      valueChangeAttr?.value,
    ]);

    setDerivedFrom(binding, tagExtra);
    // A patch build ships every `<let>` as if a handler assigned it.
    if (isPatch()) getProgram().node.extra.isInteractive = true;

    if (valueChangeAttr) {
      valueChangeAttr.value.extra!.changeHandler = true;
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
      const valueAttr =
        node.attributes.find(
          (attr) =>
            t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
        ) ?? t.markoAttribute("value", t.identifier("undefined"));
      const valueChangeAttr = node.attributes.find(
        (attr) => t.isMarkoAttribute(attr) && attr.name === "valueChange",
      );
      const section = getSection(tag);
      const binding = tagVar.extra!.binding!;

      // Nothing reads or assigns it, so it holds no slot.
      const unused = binding.pruned && !hasEmittedAssignment(binding);

      if (isOutputDOM()) {
        const tagExtra = tag.node.extra;
        if (unused) {
          // Its impure values run only for what they do, inline as an unread
          // `<const>`'s.
          for (const attr of [valueAttr, valueChangeAttr]) {
            if (attr && !evaluate(attr.value).pure) {
              addValue(section, tagExtra, initValue(binding)!, attr.value);
            }
          }
          replaceWithStatements(tag);
          return;
        }

        const signal = initValue(binding, true);

        addValue(section, tagExtra, signal, valueAttr.value);

        if (valueChangeAttr) {
          signal.extraArgs = [valueChangeAttr.value];
        }

        signal.buildAssignment = (valueSection, value) => {
          if (valueChangeAttr || signalHasWork(signal)) {
            return t.callExpression(signal.identifier, [
              getScopeExpression(valueSection, signal.section),
              value,
            ]);
          }
        };
      } else {
        translateVar(tag, valueAttr.value, "let");

        if (unused) {
          if (valueChangeAttr && !evaluate(valueChangeAttr.value).pure) {
            replaceWithStatements(tag, [
              t.expressionStatement(valueChangeAttr.value),
            ]);
          }
        } else if (valueChangeAttr) {
          const handler = t.logicalExpression(
            "||",
            valueChangeAttr.value,
            t.buildUndefinedNode(),
          );
          const accessor = writeSlot(
            findSlot(binding, SlotKind.ChangeHandler),
            handler,
          );
          // A patch's fill reads whether the handler is set: a function always is.
          if (isPatch()) {
            getLetChanges(section).set(
              binding,
              accessor
                ? handler
                : t.isFunction(valueChangeAttr.value)
                  ? t.numericLiteral(1)
                  : valueChangeAttr.value,
            );
          }
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
