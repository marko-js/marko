// Records per-section patch merges while normal DOM translation runs.
import { types as t } from "@marko/compiler";

import { isPersisted, isPersistedEntryBuild } from "./marko-config";
import { forEach } from "./optional";
import {
  type Binding,
  BindingType,
  getScopeAccessor,
  isReferencedExtra,
  kBranchSerializeReason,
  onFinalizeReferences,
} from "./references";
import type { Section } from "./sections";
import {
  getSerializeReason,
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
  isReasonDynamic,
  isRequestDerivedSerializeReason,
  isStateSerializeReason,
} from "./serialize-reasons";
import { getResumeRegisterId, getSignals } from "./signals";
import { createProgramState, createSectionState } from "./state";

export type UpdateMerge =
  | {
      kind: "text";
      /** Full patch key (`PatchHole:<accessor>`). */
      key: string;
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "html";
      /** Full patch key (`PatchHtml:<accessor>`). */
      key: string;
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "attr";
      /** Full patch key (`PatchAttr:<name>:<accessor>`). */
      key: string;
      name: string;
      helper: "_attr" | "_attr_class" | "_attr_style" | "_text_content";
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "controllable";
      /** Full patch key (`PatchAttr:<name>:<accessor>`). */
      key: string;
      helper:
        | "_attr_input_value_default"
        | "_attr_input_value_attribute_default"
        | "_attr_input_value_dynamic_default"
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
      branchBodySections: (Section | undefined)[];
    }
  | {
      kind: "for";
      accessor: t.StringLiteral | t.NumericLiteral;
      encodedAccessor: t.Expression;
      bodySection: Section;
      siteId?: string;
    }
  | {
      kind: "child";
      accessor: t.StringLiteral | t.NumericLiteral;
      relativePath: string;
      tagName: string;
      updateName: string;
      load?: string;
      loadReady?: { id: string; loadExpr: t.Expression };
    }
  | {
      kind: "dynamic";
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      /** Single-branch boundary (`<await>`/`<try>` body) dispatch. */
      kind: "branch";
      accessor: t.StringLiteral | t.NumericLiteral;
      bodySection: Section;
    };

export const [getUpdateMerges] = createSectionState<UpdateMerge[]>(
  "updateMerges",
  () => [],
);

export function addUpdateMerge(section: Section, merge: UpdateMerge) {
  if (isPersistedEntryBuild()) {
    getUpdateMerges(section).push(merge);
  }
}

interface UpdatePossessionLoop {
  section: Section;
  bodySection: Section;
  extra: t.NodeExtra;
  binding: Binding;
}

const [getUpdatePossessionLoops] = createProgramState(() => ({
  scheduled: false,
  sites: new WeakSet<t.NodeExtra>(),
  loops: [] as UpdatePossessionLoop[],
}));

const [getUpdatePossessionSiteIds] = createProgramState(
  () => new Set<string>(),
);

declare module "@marko/compiler" {
  export interface MarkoMeta {
    persistedPossessionSites?: string[];
    persistedPossessionRenderers?: string[];
  }
}

export function getPersistedPossessionSiteIds() {
  return getUpdatePossessionSiteIds();
}

export function recordUpdatePossessionLoop(
  section: Section,
  bodySection: Section,
  extra: t.NodeExtra,
  binding: Binding,
) {
  if (!isPersisted()) return;
  const state = getUpdatePossessionLoops();
  state.loops.push({ section, bodySection, extra, binding });
  if (!state.scheduled) {
    state.scheduled = true;
    onFinalizeReferences(() => {
      const reachable = new Set<Section>();
      for (const loop of state.loops) {
        if (!loop.section.parent) reachable.add(loop.section);
      }
      let changed: boolean;
      do {
        changed = false;
        for (const loop of state.loops) {
          if (
            reachable.has(loop.section) &&
            isUpdateRequestDerivedSite(loop.extra) &&
            !state.sites.has(loop.extra)
          ) {
            state.sites.add(loop.extra);
            getUpdateSiteRegisterId(
              loop.section,
              "for",
              getScopeAccessor(loop.binding),
            );
            if (!reachable.has(loop.bodySection)) {
              reachable.add(loop.bodySection);
              changed = true;
            }
          }
        }
      } while (changed);
    });
  }
}

export const [getUpdateGlobalsStatements] = createSectionState<t.Statement[]>(
  "updateGlobalsStatements",
  () => [],
);

export function addUpdateGlobalsStatement(
  section: Section,
  extra: t.NodeExtra | undefined,
  statement: t.Statement,
) {
  if (extra && isPersistedEntryBuild()) {
    const sources = getSerializeSourcesForExpr(extra);
    if (sources && sources.state && sources.global) {
      getUpdateGlobalsStatements(section).push(statement);
    }
  }
}

export function cloneUpdateGlobalsStatements(section: Section) {
  const statements = getUpdateGlobalsStatements(section);
  for (let i = statements.length; i--;) {
    statements[i] = t.cloneNode(statements[i], true);
  }
}

export function getUpdateGlobalsRegisterId(section: Section) {
  return getResumeRegisterId(section, undefined, "update_globals");
}

export function getUpdateVarRegisterId(section: Section, binding: Binding) {
  return getResumeRegisterId(section, binding, "var");
}

/** Returns a structural site's build-stable id and records its token slot. */
export function getUpdateSiteRegisterId(
  section: Section,
  kind: UpdateSiteKind,
  accessor: string | number,
) {
  const id = getResumeRegisterId(
    section,
    undefined,
    updateSiteKey(kind, accessor),
  );
  getUpdatePossessionSiteIds().add(id);
  return id;
}

export type UpdateSiteKind = "if" | "for" | "dynamic" | "boundary";

/** Whether a state-free request-derived dynamic tag can change navigation. */
export function isUpdateDynamicTagSite(section: Section, binding: Binding) {
  return isPersisted() && isReasonDynamic(getSerializeReason(section, binding));
}

export function isUpdateRequestDerivedSite(extra: t.NodeExtra) {
  return isPersisted() && isReasonDynamic(getSerializeSourcesForExpr(extra));
}

export function isUpdateStructuralMerge(
  extra: t.NodeExtra,
  branchBodySections: (Section | undefined)[],
) {
  if (!isPersisted()) return false;
  const sources = getSerializeSourcesForExpr(extra);
  return (
    !isStateSerializeReason(sources) &&
    (isReasonDynamic(sources) ||
      branchBodySections.some(
        (branchBodySection) =>
          branchBodySection &&
          isRequestDerivedSerializeReason(
            getSerializeReason(branchBodySection, kBranchSerializeReason),
          ),
      ))
  );
}

/** Whether a persisted `<try>` can leave a pending placeholder on the page. */
export function isUpdateBoundarySite(tag: t.MarkoTag) {
  return isPersisted() && !!tag.extra?.attributeTags?.["@placeholder"];
}

export function updateSiteKey(kind: UpdateSiteKind, accessor: string | number) {
  return `update_${kind}_${accessor}`;
}

export function forEachUpdateValueBinding(
  section: Section,
  cb: (binding: Binding, needsSignal: boolean) => void,
) {
  forEach(section.bindings, (binding) => {
    if (
      (binding.type === BindingType.input ||
        binding.type === BindingType.param ||
        binding.type === BindingType.derived) &&
      !binding.sources?.state &&
      getSerializeReason(binding.section, binding)
    ) {
      cb(binding, bindingNeedsUpdateSignal(binding));
    }
  });
}

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

export function registerUpdateValueSignals(section: Section) {
  const register = (binding: Binding) => {
    if (!binding.pruned) {
      const signal = getSignals(section).get(binding);
      if (signal) signal.register = true;
    }
  };
  forEachUpdateSeedBinding(section, register);
  forEachUpdateValueBinding(section, (binding, needsSignal) => {
    if (needsSignal) register(binding);
  });
}

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

export function bindingNeedsUpdateSignal(binding: Binding) {
  for (const read of binding.reads) {
    if (
      read.isEffect ||
      getSerializeSourcesForRef(read.referencedBindings)?.state
    ) {
      return true;
    }
  }
  return false;
}

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
