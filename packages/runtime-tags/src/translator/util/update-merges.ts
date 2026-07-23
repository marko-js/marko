// Records per-section patch merges while normal DOM translation runs.
import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

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
      /** State-computed capture: applies only to construct-stamped scopes. */
      constructOnly?: boolean;
    }
  | {
      kind: "html";
      /** Prefixed patch accessor (`PatchHtml:<node accessor>`). */
      patchAccessor: string;
      accessor: t.StringLiteral | t.NumericLiteral;
      constructOnly?: boolean;
    }
  | {
      kind: "attr";
      /** Prefixed patch accessor (`PatchAttr:<name>:<node accessor>`). */
      patchAccessor: string;
      name: string;
      helper: "_attr" | "_attr_class" | "_attr_style" | "_text_content";
      accessor: t.StringLiteral | t.NumericLiteral;
      constructOnly?: boolean;
    }
  | {
      kind: "controllable";
      /** Prefixed patch accessor (`PatchAttr:<name>:<node accessor>`). */
      patchAccessor: string;
      constructOnly?: boolean;
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
      /** A state-only selection's adopted branch linkage: dispatched by the
       * construct pass only, never on matched patches. */
      constructOnly?: boolean;
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

// Structural anchors (if/for/dynamic selection) treat an untracked
// expression as navigation-variant only when it visibly re-computes per
// render; captures use `isReasonlessCaptureExpression`'s safety polarity.
export function isReasonlessExpression(
  expression?: t.Expression,
  gateExtra: t.NodeExtra | undefined = expression?.extra,
) {
  return (
    isUntrackedExpression(expression, gateExtra) && hasVariantCall(expression!)
  );
}

// Capture positions (attr/hole/controllable values) invert the polarity:
// an untracked expression captures unless provably render- and
// environment-invariant — a `typeof window` branch, possibly behind an
// imported constant this compile cannot see, evaluates differently in a
// browser module than in the server render a construct must reproduce.
// Resolution only ever widens the invariant fast path; opaque captures.
export function isReasonlessCaptureExpression(
  expression?: t.Expression,
  gateExtra: t.NodeExtra | undefined = expression?.extra,
) {
  return (
    isUntrackedExpression(expression, gateExtra) &&
    !isProvablyInvariant(expression!, 0)
  );
}

function isUntrackedExpression(
  expression: t.Expression | undefined,
  gateExtra: t.NodeExtra | undefined,
): expression is t.Expression {
  return (
    !!expression &&
    !evaluate(expression).confident &&
    !(gateExtra && getSerializeSourcesForExpr(gateExtra))
  );
}

function hasVariantCall(expression: t.Node) {
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

function isProvablyInvariant(node: t.Node, depth: number): boolean {
  switch (node.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
    case "NullLiteral":
    case "BigIntLiteral":
    case "RegExpLiteral":
      return true;
    case "TemplateLiteral":
      return node.expressions.every((expr) => isProvablyInvariant(expr, depth));
    case "UnaryExpression":
      return (
        node.operator !== "delete" && isProvablyInvariant(node.argument, depth)
      );
    case "BinaryExpression":
    case "LogicalExpression":
      return (
        node.left.type !== "PrivateName" &&
        isProvablyInvariant(node.left, depth) &&
        isProvablyInvariant(node.right, depth)
      );
    case "ConditionalExpression":
      return (
        isProvablyInvariant(node.test, depth) &&
        isProvablyInvariant(node.consequent, depth) &&
        isProvablyInvariant(node.alternate, depth)
      );
    case "SequenceExpression":
      return node.expressions.every((expr) => isProvablyInvariant(expr, depth));
    case "ArrayExpression":
      return node.elements.every(
        (el) =>
          el !== null &&
          el.type !== "SpreadElement" &&
          isProvablyInvariant(el, depth),
      );
    case "ObjectExpression":
      return node.properties.every(
        (prop) =>
          prop.type === "ObjectProperty" &&
          !prop.computed &&
          isProvablyInvariant(prop.value, depth),
      );
    case "Identifier": {
      if (node.extra?.read) return false;
      switch (node.name) {
        case "undefined":
        case "NaN":
        case "Infinity":
          return true;
      }
      if (depth < 8) {
        const init = getModuleConstInit(node.name);
        if (init) return isProvablyInvariant(init, depth + 1);
      }
      return false;
    }
    default:
      return false;
  }
}

function getModuleConstInit(name: string) {
  const binding = getProgram().scope.getBinding(name);
  return binding?.constant && binding.path.isVariableDeclarator()
    ? (binding.path.node.init ?? undefined)
    : undefined;
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
