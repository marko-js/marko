// Support for compiling persisted update entries (`?update` modules; the
// `entry: "update"` dom compile). Visitors record per-section merge
// entries here while the normal dom translation runs; the update program
// exit assembles them into compiled merge functions. Persisted dom builds
// use the same predicates to register the shared pieces (value/conditional
// signals, loop branch content) so both compiles agree on register ids.
import type { types as t } from "@marko/compiler";

import { isPersisted, isUpdateEntryBuild } from "./marko-config";
import { forEach } from "./optional";
import { type Binding, BindingType, isReferencedExtra } from "./references";
import type { Section } from "./sections";
import {
  getSerializeReason,
  getSerializeSourcesForRef,
} from "./serialize-reasons";
import { getResumeRegisterId, getSignals } from "./signals";
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
      /**
       * A controllable attr (`value` on input/select/textarea, `checked`,
       * `open`): replays through the helper's `_default` variant against
       * the live scope + node accessor (it owns default-vs-live value
       * semantics), not a plain attr write.
       */
      kind: "controllable";
      /** Full patch key (`UpdateAttr:<name>:<accessor>`). */
      key: string;
      helper:
        | "_attr_input_value_default"
        | "_attr_input_checked_default"
        | "_attr_select_value_default"
        | "_attr_textarea_value_default"
        | "_attr_details_open_default"
        | "_attr_dialog_open_default";
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
    }
  | {
      kind: "dynamic";
      accessor: t.StringLiteral | t.NumericLiteral;
      signalId: string;
    }
  | {
      /** Single-branch boundary (`<await>`/`<try>` body) dispatch. */
      kind: "branch";
      accessor: t.StringLiteral | t.NumericLiteral;
      bodySection: Section;
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

// Same for dynamic-tag signals: update merges replay them to swap the
// branch when the patch's renderer id differs from the live one (a
// cross-route navigation's divergence point).
export function getUpdateDynamicRegisterId(
  section: Section,
  accessor: string | number,
) {
  return getResumeRegisterId(section, undefined, `update_dynamic_${accessor}`);
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
 * State (`let`) bindings the server serializes in seed-mode (cross-route)
 * update renders: the client will create the target subtree fresh and its
 * `let` initializers may depend on server-only expressions, so the seed IS
 * the initial value. Applied through the binding's registered signal so
 * downstream derivations recompute, and gated client-side to scopes
 * created during the apply -- matched scopes' live state never changes.
 */
export function forEachUpdateSeedBinding(
  section: Section,
  cb: (binding: Binding) => void,
) {
  forEach(section.bindings, (binding) => {
    if (binding.type === BindingType.let) {
      cb(binding);
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
      binding.type === BindingType.let
        ? true
        : (binding.type === BindingType.input ||
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

/**
 * True when fresh branches created during an update apply must skip this
 * closure's setup-time render. Closures over request-derived (state-free)
 * bindings read raw values normal resume never serializes -- nothing can
 * re-run them client-side, so the server serializes their *rendered* holes
 * instead and the branch merge places those. The exception mirrors
 * `isUpdateCoveredByClientSignals`: when the binding's merge invokes its
 * registered signal and the raw value is serialized (it has a resume
 * reason), the server may skip capturing holes and rely on client
 * re-execution -- for a fresh branch that re-execution IS the setup-time
 * render, so it must keep firing (its inputs are guaranteed present).
 */
export function isUpdateDeliveredClosure(binding: Binding) {
  return (
    isUpdateValueBindingType(binding) &&
    !binding.sources?.state &&
    !(
      bindingNeedsUpdateSignal(binding) &&
      getSerializeReason(binding.section, binding)
    )
  );
}

// Analyze-data equivalent of walking the dom signal graph (which the html
// compile never builds, and both compiles must agree): a binding's merge
// must go through its value signal when some non-effect expression reading
// it also mixes client state -- the client has to re-execute that
// statement with the patched value. No transitive walk is needed: a
// state-free derived reader is itself an update value binding, patched (and
// signal-invoked if needed) with its own server-computed value.
export function bindingNeedsUpdateSignal(binding: Binding) {
  for (const read of binding.reads) {
    if (
      !read.isEffect &&
      getSerializeSourcesForRef(read.referencedBindings)?.state
    ) {
      return true;
    }
  }
  return false;
}

/**
 * True when an update render need not capture (and the update entry need not
 * place) this hole: every referenced binding is either live client state or
 * a patched update value, and at least one patched value's merge invokes its
 * registered signal -- re-running this statement client-side with patched
 * scope values, exactly as a CSR update would.
 */
export function isUpdateCoveredByClientSignals(extra: t.NodeExtra | undefined) {
  if (!isPersisted() || !isReferencedExtra(extra) || extra.isEffect) {
    return false;
  }
  let invoked = false;
  let covered = !!extra.referencedBindings;
  forEach(extra.referencedBindings, (binding) => {
    if (!covered) return;
    const { sources } = binding;
    if (!sources) {
      covered = false;
    } else if (sources.state && !sources.param && !sources.global) {
      // Live client-owned value; correct by definition.
    } else if (
      isUpdateValueBindingType(binding) &&
      sources.param &&
      !sources.state &&
      !sources.global &&
      getSerializeReason(binding.section, binding)
    ) {
      invoked ||= bindingNeedsUpdateSignal(binding);
    } else {
      covered = false;
    }
  });
  return covered && invoked;
}

function isUpdateValueBindingType(binding: Binding) {
  return (
    binding.type === BindingType.input ||
    binding.type === BindingType.param ||
    binding.type === BindingType.derived
  );
}
