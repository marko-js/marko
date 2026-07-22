// Records per-section patch merges while normal DOM translation runs.
import { types as t } from "@marko/compiler";

import evaluate from "./evaluate";
import { isPersisted, isPersistedEntryBuild } from "./marko-config";
import { isMembraneLive } from "./membranes";
import { forEach } from "./optional";
import {
  type Binding,
  BindingType,
  isReferencedExtra,
  kBranchSerializeReason,
  type ReferencedExtra,
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
import { createSectionState } from "./state";

export type UpdateMerge =
  | {
      kind: "text";
      /** Prefixed patch accessor (`PatchHole:<node accessor>`). */
      patchAccessor: string;
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "html";
      /** Prefixed patch accessor (`PatchHtml:<node accessor>`). */
      patchAccessor: string;
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "attr";
      /** Prefixed patch accessor (`PatchAttr:<name>:<node accessor>`). */
      patchAccessor: string;
      name: string;
      helper: "_attr" | "_attr_class" | "_attr_style" | "_text_content";
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      kind: "controllable";
      /** Prefixed patch accessor (`PatchAttr:<name>:<node accessor>`). */
      patchAccessor: string;
      helper:
        | "_update_input_value"
        | "_update_input_value_dynamic"
        | "_attr_input_value_attribute_default"
        | "_update_input_checked"
        | "_update_input_checkedValue"
        | "_update_select_value"
        | "_update_details_or_dialog_open";
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
      anchorId?: string;
    }
  | {
      kind: "child";
      accessor: t.StringLiteral | t.NumericLiteral;
      relativePath: string;
      tagName: string;
      updateName: string;
      load?: string;
      loadReady?: { id: string; loadExpr: t.Expression };
      /** Load tags: marker accessor + child root shell key for construction. */
      loadMarker?: t.StringLiteral | t.NumericLiteral;
      loadTemplateId?: string;
    }
  | {
      kind: "dynamic";
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      /** Nucleus-free structure swapped wholesale from a response shell. */
      kind: "region";
      accessor: t.StringLiteral | t.NumericLiteral;
    }
  | {
      /** Single-branch boundary (`<await>`/`<try>` body) dispatch. */
      kind: "branch";
      accessor: t.StringLiteral | t.NumericLiteral;
      bodySection: Section;
      /** Pending boundaries construct this placeholder client-side. */
      placeholderSection?: Section;
    };

export const [getUpdateMerges] = createSectionState<UpdateMerge[]>(
  "updateMerges",
  () => [],
);

export function addUpdateMerge(section: Section, merge: UpdateMerge) {
  if (isPersistedEntryBuild() && isMembraneLive(section)) {
    getUpdateMerges(section).push(merge);
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
  if (extra && isPersistedEntryBuild() && isMembraneLive(section)) {
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

/** Returns a structural anchor's build-stable id. */
export function getUpdateAnchorRegisterId(
  section: Section,
  kind: UpdateAnchorKind,
  accessor: string | number,
) {
  return getResumeRegisterId(
    section,
    undefined,
    updateAnchorKey(kind, accessor),
  );
}

export type UpdateAnchorKind = "if" | "for" | "dynamic" | "boundary";

/** Whether a state-free request-derived dynamic tag can change navigation. */
export function isUpdateDynamicTagAnchor(
  section: Section,
  binding: Binding,
  expression?: t.Expression,
) {
  return (
    isPersisted() &&
    isMembraneLive(section) &&
    (isReasonDynamic(getSerializeReason(section, binding)) ||
      isReasonlessExpression(expression))
  );
}

export function isUpdateRequestDerivedAnchor(
  extra: t.NodeExtra,
  expressions?: t.Expression[],
) {
  return (
    isPersisted() &&
    isMembraneLive((extra as ReferencedExtra).section) &&
    (isReasonDynamic(getSerializeSourcesForExpr(extra)) ||
      expressions?.some((expression) =>
        isReasonlessExpression(expression, extra),
      ))
  );
}

export function isReasonlessExpression(
  expression?: t.Expression,
  gateExtra: t.NodeExtra | undefined = expression?.extra,
) {
  return (
    !!expression &&
    !evaluate(expression).confident &&
    !(gateExtra && getSerializeSourcesForExpr(gateExtra)) &&
    isRenderVariant(expression)
  );
}

// Untracked expressions are render-invariant (module constants, statics)
// unless something in them re-computes per render; only those can change on
// navigation, so only those need reasonless capture.
function isRenderVariant(expression: t.Node) {
  let variant = false;
  t.traverseFast(expression, (node) => {
    switch (node.type) {
      case "CallExpression":
      case "OptionalCallExpression":
      case "NewExpression":
      case "TaggedTemplateExpression":
      case "AwaitExpression":
      case "YieldExpression":
        variant = true;
    }
  });
  return variant;
}

export function isUpdateStructuralMerge(
  extra: t.NodeExtra,
  branchBodySections: (Section | undefined)[],
  expressions?: t.Expression[],
) {
  if (!isPersisted() || !isMembraneLive((extra as ReferencedExtra).section)) {
    return false;
  }
  const sources = getSerializeSourcesForExpr(extra);
  return (
    !isStateSerializeReason(sources) &&
    (isReasonDynamic(sources) ||
      expressions?.some((expression) =>
        isReasonlessExpression(expression, extra),
      ) ||
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
export function isUpdateBoundaryAnchor(tag: t.MarkoTag) {
  return isPersisted() && !!tag.extra?.attributeTags?.["@placeholder"];
}

export function updateAnchorKey(
  kind: UpdateAnchorKind,
  accessor: string | number,
) {
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
