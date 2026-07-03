// Support for compiling persisted update entries (`?update` modules; the
// `persisted: "update"` dom compile). Visitors record per-section merge
// entries here while the normal dom translation runs; the update program
// exit assembles them into compiled merge functions. Persisted dom builds
// use the same predicates to register the shared pieces (value/conditional
// signals, loop branch content) so both compiles agree on register ids.
import type { types as t } from "@marko/compiler";

import { isUpdateEntryBuild } from "./marko-config";
import { forEach } from "./optional";
import { type Binding, BindingType } from "./references";
import type { Section } from "./sections";
import { getSerializeSourcesForRef } from "./serialize-reasons";
import { getResumeRegisterId, getSignals, type Signal } from "./signals";
import { createSectionState } from "./state";

export type UpdateMerge =
  | {
      kind: "text" | "html";
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "attr";
      /** Full patch key (`UpdateAttr:<name>:<accessor>`). */
      key: string;
      name: string;
      helper: "_attr" | "_attr_class" | "_attr_style";
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "if";
      accessor: t.StringLiteral | t.NumericLiteral;
      signalId: string;
      branchBodySections: (Section | undefined)[];
    }
  | {
      kind: "for";
      accessor: t.StringLiteral | t.NumericLiteral;
      encodedAccessor: t.Expression;
      contentId: string;
      bodySection: Section;
    }
  | {
      kind: "child";
      accessor: t.StringLiteral | t.NumericLiteral;
      relativePath: string;
      tagName: string;
    };

const [getUpdateMergesRaw] = createSectionState<UpdateMerge[]>(
  "updateMerges",
  () => [],
);

export function getUpdateMerges(section: Section) {
  return getUpdateMergesRaw(section);
}

export function addUpdateMerge(section: Section, merge: UpdateMerge) {
  if (isUpdateEntryBuild()) {
    getUpdateMergesRaw(section).push(merge);
  }
}

export function getUpdateContentRegisterId(bodySection: Section) {
  return getResumeRegisterId(bodySection, "content", "update");
}

export function getUpdateVarRegisterId(section: Section, binding: Binding) {
  return getResumeRegisterId(section, binding, "var");
}

// Conditional signals hang off dom node bindings whose names (`#text`)
// repeat within a section, so their register id keys off the accessor.
export function getUpdateIfRegisterId(
  section: Section,
  accessor: string | number,
) {
  return getResumeRegisterId(section, undefined, `update_if_${accessor}`);
}

/**
 * Values the server may write into an update patch for this section:
 * request-derived (state-free) input/param/derived bindings. `let` bindings
 * are deliberately excluded -- client state must survive a hostile patch.
 * The callback receives whether the merge must go through the binding's
 * value signal (some downstream statement mixes in client state, so the
 * client has to re-execute it) versus a plain scope store (all downstream
 * effects are already covered by server-computed hole/structural writes).
 */
export function forEachUpdateValueBinding(
  section: Section,
  cb: (binding: Binding, needsSignal: boolean) => void,
) {
  forEach(section.bindings, (binding) => {
    if (
      (binding.type === BindingType.input ||
        binding.type === BindingType.param ||
        binding.type === BindingType.derived) &&
      !binding.sources?.state
    ) {
      cb(binding, bindingNeedsUpdateSignal(binding));
    }
  });
}

/**
 * In persisted dom builds, flag signals the update entry invokes through the
 * registry (`_var_resume`) so `_update_signal` can find them by id.
 */
export function registerUpdateValueSignals(section: Section) {
  forEach(section.bindings, (binding) => {
    if (
      (binding.type === BindingType.input ||
        binding.type === BindingType.param ||
        binding.type === BindingType.derived) &&
      !binding.sources?.state &&
      bindingNeedsUpdateSignal(binding)
    ) {
      const signal = getSignals(section).get(binding);
      if (signal) signal.register = true;
    }
  });
}

export function bindingNeedsUpdateSignal(binding: Binding) {
  const seen = new Set<Signal>();
  let needs = false;

  const visit = (signal: Signal | undefined) => {
    if (!signal || seen.has(signal) || needs) return;
    seen.add(signal);
    if (signal !== getSignals(binding.section).get(binding)) {
      const sources = getSerializeSourcesForRef(signal.referencedBindings);
      if (sources?.state) {
        needs = true;
        return;
      }
    }
    forEach(signal.intersection, visit);
    for (const value of signal.values) visit(value.signal);
  };

  visit(getSignals(binding.section).get(binding));
  forEach(binding.closureSections, (closureSection) => {
    visit(getSignals(closureSection).get(binding));
  });

  return needs;
}
