// Support for compiling persisted update entries (`?update` modules; the
// `entry: "update"` dom compile). Visitors record per-section merge
// entries here while the normal dom translation runs; the update program
// exit assembles them into compiled merge functions. Persisted dom builds
// use the same predicates to register the shared pieces (value/conditional
// signals, loop branch content) so both compiles agree on register ids.
import { types as t } from "@marko/compiler";

// Cycle with known-tag.ts (via signals.ts -> this module); only function
// bodies reference it, so module init order is safe.
import { sectionHasNonGenericKnownTags } from "./known-tag";
import {
  isPersisted,
  isPersistedEntryBuild,
  isUpdateEntryBuild,
} from "./marko-config";
import { forEach } from "./optional";
import {
  type Binding,
  BindingType,
  isReferencedExtra,
  kBranchSerializeReason,
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
      /**
       * `_text_content` rides this kind under the reserved pseudo-attr name
       * `textContent` (text-only tag content replaces wholesale, and the
       * helper shares the `(el, value)` shape).
       */
      helper: "_attr" | "_attr_class" | "_attr_style" | "_text_content";
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
      /** Full patch key (`PatchAttr:<name>:<accessor>`). */
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
      branchBodySections: (Section | undefined)[];
    }
  | {
      kind: "for";
      accessor: t.StringLiteral | t.NumericLiteral;
      encodedAccessor: t.Expression;
      bodySection: Section;
      /**
       * Build-stable per-site id (present only for a request-derived loop --
       * see `getUpdateSiteRegisterId`): a genuinely new key or positional
       * index arrives as a resumable fragment instead of client-registered
       * construction material (`_update_for_keyed` in dom/update-merges.ts).
       */
      siteId?: string;
    }
  | {
      kind: "child";
      accessor: t.StringLiteral | t.NumericLiteral;
      relativePath: string;
      tagName: string;
      /**
       * The child template proved its whole `?update` module is the generic
       * interpreter (`analyzeUpdateGeneric` on its analyze data): its link
       * serializes under the typed `PatchChild:` key and the interpreter
       * descends through it, so no dispatch line compiles and the module is
       * never imported or built.
       */
      generic: boolean;
      /**
       * A `load=` lazy child: the compile-constant register id its `?update`
       * merge registers under (`<childTemplateId>` + its root section's
       * `update` key). The dispatch compiles to `_update_load` — merge when
       * the module has registered, park until it loads — and the parent's
       * update entry never imports the module (it rides the child's lazy
       * chunks instead; see custom-tag.ts's load branch).
       */
      load?: string;
      /**
       * The lazy child's asset/ready id plus its trigger-gated loader
       * expression. The update entry registers the loader under the id
       * (`_load_ready` in dom/update-merges.ts) so a patch delivering the
       * child's markup inside a fragment can start the load and replay the
       * parked keyed resume batch -- the data-driven equivalent of the
       * document's injected trigger script (see custom-tag.ts's load branch
       * and `processBatch` in dom/update.ts).
       */
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
  if (isUpdateEntryBuild()) {
    getUpdateMerges(section).push(merge);
  }
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /**
     * Analyze-time footprints `analyzeUpdateGeneric` disqualifies on where
     * nothing else records them: change handlers replay controllables
     * through a signal effect even when the handler expression registers
     * nothing (eg a plain `input.setX` reference), and dynamic tags
     * dispatch their update merge by renderer id.
     */
    hasChangeHandlers?: true;
    hasDynamicTags?: true;
  }
}

/**
 * Flags templates whose whole `?update` module would be
 * `_resume(id, _update_scope)` -- every hole applies through the generic
 * interpreter's typed patch keys and every known-tag child is itself
 * update-generic (dispatched through its typed `PatchChild:` link), with
 * no seed/value merges, no effect pairing, no structural dispatch, and no
 * `$global` re-runs. Parents consume the flag from the child's analyzed
 * program extra (the `setupEmpty` pattern) and serialize the typed link
 * the interpreter descends through, so the module is never imported or
 * built -- server-only compositions classify transitively.
 *
 * Runs at program analyze exit, after `finalizeReferences` (serialize
 * reasons and pruning are final). Everything the update entry compiles
 * from is analyze data, but the merge entries themselves are recorded at
 * translate -- so both the `?update` and persisted-entry translations
 * assert this proof and fail loudly on drift (see their tripwires).
 */
export function analyzeUpdateGeneric(program: t.NodePath<t.Program>) {
  const programExtra = program.node.extra;
  const section = programExtra.section!;
  if (
    !isPersisted() ||
    // Structural dispatch: every control-flow / content body is its own
    // section, so a lone section plus the tag footprints below rules out
    // if/for/branch, dynamic, and child merge lines.
    programExtra.sections!.length !== 1 ||
    // Effects (`_update_pair`): event handlers, `<script>`, `<lifecycle>`,
    // client scriptlets, and registered functions all mark this.
    programExtra.isInteractive ||
    programExtra.hasChangeHandlers ||
    programExtra.hasDynamicTags ||
    // Known tags whose children are themselves update-generic dispatch
    // through the typed `PatchChild:` link the interpreter descends -- so
    // server-only compositions classify transitively. Anything else on a
    // known tag (non-generic child, tag variable, `load=`) needs a
    // compiled line and disqualifies.
    sectionHasNonGenericKnownTags(section) ||
    section.hasAbortSignal
  ) {
    return;
  }
  let disqualified = false;
  forEach(section.bindings, (binding) => {
    // Mirrors the seed/value merge loops: a non-pruned `let` seeds, and any
    // other serialized non-dom binding gets a value merge line. (`$global`
    // re-runs need state mixed in, which the no-`let` requirement rules
    // out.) Conservative on the value side -- state-sourced bindings with
    // reasons emit no line but still disqualify here.
    disqualified ||=
      !binding.pruned &&
      binding.type !== BindingType.dom &&
      (binding.type === BindingType.let ||
        !!getSerializeReason(binding.section, binding));
  });
  if (!disqualified) {
    programExtra.domExports!.updateGeneric = true;
  }
}

export const [getUpdateGlobalsStatements] = createSectionState<t.Statement[]>(
  "updateGlobalsStatements",
  () => [],
);

/**
 * Statements mixing client state with `$global` can't be patched by value
 * (the server renders patch responses with fresh state, so it doesn't know
 * the live operand) and won't re-run through a value signal (nothing
 * state-side changed) -- instead the update entry re-invokes a registered
 * copy against the live scope after the patch's `$global` assign lands.
 * Collected during both the persisted-entry and update-entry compiles (the
 * same full dom translate) so the register/invoke decisions agree. Records
 * the live node -- identifier replacements (`$global` -> scope member) land
 * during traversal, after some collection sites run -- so the persisted
 * entry snapshots copies via `cloneUpdateGlobalsStatements` at program exit.
 */
export function addUpdateGlobalsStatement(
  section: Section,
  extra: t.NodeExtra | undefined,
  statement: t.Statement,
) {
  if (extra && (isPersistedEntryBuild() || isUpdateEntryBuild())) {
    const sources = getSerializeSourcesForExpr(extra);
    if (sources && sources.state && sources.global) {
      getUpdateGlobalsStatements(section).push(statement);
    }
  }
}

/**
 * Detaches the recorded statements from the dom program's AST as deep
 * clones. Must run after the translate traversal (so identifier
 * replacements have landed) and before `writeSignals` (which rewrites the
 * originals in place against their owning signal, eg substituting value
 * params the registered copies wouldn't have in scope).
 */
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

/**
 * A structural site's build-stable per-site id: a compile constant identical
 * across the document and patch renders (runtime scope ids drift -- matched
 * scopes elide), keyed off the accessor since structural dom node bindings
 * (`#text`) repeat within a section. Each kind mirrors the same recipe under
 * its own suffix so two kinds can never collide on one accessor's id.
 *
 * - `if`: the html runtime stashes it on the owner scope so a later
 *   navigation's possession echo (`_have`, dom/update-fragment.ts) can name
 *   the site; it is not a resume register id (the dom `<if>` signal itself
 *   is never registered for the update merge -- see core/if.ts).
 * - `for`: stashed directly on each matched item's own branch scope (one
 *   loop item IS one site occurrence) so the echo can tell a matched item
 *   from a genuine addition.
 * - `dynamic`: update merges replay the dynamic-tag signal to swap the
 *   branch when the patch's renderer id differs from the live one (a
 *   cross-route navigation's divergence point).
 * - `boundary`: a `<try>` placeholder boundary; the echo
 *   (`_have`/`BOUNDARY_SITE_PREFIX` in dom/update-fragment.ts) keys a
 *   still-pending matched boundary by it.
 */
export function getUpdateSiteRegisterId(
  section: Section,
  kind: UpdateSiteKind,
  accessor: string | number,
) {
  return getResumeRegisterId(section, undefined, updateSiteKey(kind, accessor));
}

export type UpdateSiteKind = "if" | "for" | "dynamic" | "boundary";

/**
 * True when a dynamic tag participates in persisted patch renders: its hop
 * scope serializes for a reason, so the renderer can differ between the
 * document and a later navigation's patch render. A reason-less dynamic tag
 * (eg `<${Tag}/>` over a static module const) renders once and can never
 * change, so it requests no site id and compiles no merge. Shared by all
 * three gates -- the analyze enumeration (preallocate-register-ids.ts), the
 * html translate's site-id argument, and the dom translate's merge -- so
 * they cannot drift apart (the register-id tripwire fires on drift).
 */
export function isUpdateDynamicTagSite(section: Section, binding: Binding) {
  return isPersisted() && !!getSerializeReason(section, binding);
}

/**
 * True when an `<if>`/`<for>`'s own controlling expression (test/list) is
 * request-derived with no client-state component: the structural outcome is
 * entirely server-owned, so a persisted build never needs (and must never
 * ship) client construction for it -- a changed outcome arrives only as a
 * resumable fragment, addressed by the construct's build-stable site id
 * (`getUpdateSiteRegisterId`; see html/dynamic-tag.ts for the analogous
 * hop). A mixed expression (state plus request-derived bits, eg `$global`)
 * stays outside this path: a legitimate client-driven change must still be
 * able to construct the branch itself. Shared by the html translate (`<if>`
 * split selection, `<for>` site-id argument), the dom translate (`<for>`
 * merge site id + construction elision), and the analyze enumeration's
 * "for" case, so they cannot drift apart.
 */
export function isUpdateRequestDerivedSite(extra: t.NodeExtra) {
  return isPersisted() && isReasonDynamic(getSerializeSourcesForExpr(extra));
}

/**
 * True when an `<if>`/`<for>` participates in persisted patch renders at
 * all (the update entry compiles a structural merge and the dom signal takes
 * an `updateGuard`): either the controlling expression is request-derived
 * and state-free (the server writes the branch outcome/list explicitly), or
 * the outcome is stable (render-once by contract) while a BRANCH carries
 * request-derived content -- body merges must still dispatch through it.
 * Client-state-driven structure stays excluded: the server never pairs into
 * it. Shared by both dom translate merge gates and the analyze enumeration's
 * "if" case, so they cannot drift apart.
 */
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

/**
 * True when a `<try>` is a persisted pending-boundary site: it can show a
 * placeholder, so it gets a build-stable site id that the possession echo
 * keys a still-pending matched boundary by (`_have`/`BOUNDARY_SITE_PREFIX`
 * in dom/update-fragment.ts). Shared by the try analyze footprint (whose
 * presence
 * drives the enumeration's "boundary" case) and the html translate's
 * site-id argument, so they cannot drift apart. Boundary MERGE participation
 * is deliberately broader -- bare `isPersisted()` in core/try.ts and
 * core/await.ts: even a statically-rendered body may hold awaits that need
 * attaching when its branch is freshly created during an apply.
 */
export function isUpdateBoundarySite(tag: t.MarkoTag) {
  return isPersisted() && !!tag.extra?.attributeTags?.["@placeholder"];
}

/**
 * The per-site register-key suffix, shared with the analyze-stage
 * enumeration (`preallocate-register-ids.ts`) so the enumerated keys and the
 * translate-time requests cannot drift apart in shape.
 */
export function updateSiteKey(kind: UpdateSiteKind, accessor: string | number) {
  return `update_${kind}_${accessor}`;
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
      !binding.sources?.state &&
      // A reason-less binding never serializes (eg a `<const>` of a module
      // call under the render-once contract), so its patch key can never
      // appear -- skip the dead merge line and its registration. Both
      // compiles derive this from the same analyze data, so the persisted
      // entry's registered signals and the update entry's merges agree.
      getSerializeReason(binding.section, binding)
    ) {
      cb(binding, bindingNeedsUpdateSignal(binding));
    }
  });
}

/**
 * State (`let`) bindings the server serializes in seed-mode (cross-route)
 * patch renders: the client will create the target subtree fresh and its
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
 * registry (`_var_resume`) so `_update_signal` can find them by id. Iterates
 * with the same helpers the `?update` merge loops and the analyze
 * enumeration use, so the registered set matches the invoked set by
 * construction (seed merges for every non-pruned `let`, value merges whose
 * dispatch must re-run the binding's signal).
 */
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
// must go through its value signal when some expression reading it must
// re-execute client-side with the patched value -- a non-effect statement
// that mixes client state, or ANY effect statement (a patched value is a
// value change, so the queue re-queues downstream effects for matched
// scopes; see `_script_shared` in dom/queue). No transitive walk is needed:
// a state-free derived reader is itself an update value binding, patched
// (and signal-invoked if needed) with its own server-computed value.
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

/**
 * True when a patch render need not capture (and the update entry need not
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
