// Client runtime for persisted (single-page server-first) updates.
//
// `applyUpdate` is the merge driver: it deserializes an update-render payload
// (plain resume-format fills, patch-local scope ids) through a patch-aware
// variant of resume's serialize context, merges the patch `$global` partial
// onto the live one, dispatches the page's compiled merge function
// (`?update` module default export) against the live root scope, and flushes
// the render queue so intersections/closures the merge triggered settle
// before the navigation completes.
//
// Update entries are compiled merge functions that apply a server patch to
// live scopes; they share the main template module's compiled pieces through
// the resume registry instead of duplicating them:
// - value/conditional signals are registered with `_var_resume` by persisted
//   dom builds and invoked here via `_update_signal`.
// - loop branch content (`[template, walks, setup]`) is registered with
//   `_resume` so `_update_for` can build a `_for_of` instance whose params
//   signal is the update entry's own body merge function (the main loop
//   signal's params render from real items, which a patch scope is not).
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import { _for_of, attachAwaitBranch } from "./control-flow";
import { _attr_input_checked_default } from "./controllable/input-checked";
import { _attr_input_value_default } from "./controllable/input-value";
import { _attr_details_or_dialog_open_default } from "./controllable/open";
import { _attr_select_value_default } from "./controllable/select";
import {
  _attr,
  _attr_class,
  _attr_style,
  _html,
  _text,
  _text_content,
  removeChildNodes,
} from "./dom";
import { run, runEffects, runId, setUpdating } from "./queue";
import { setParentBranch } from "./renderer";
import {
  _resume,
  bumpNavEpoch,
  enableReadyUpdates,
  getRegisteredWithScope,
  getUpdateRoot,
  isReady,
  registeredValues,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";
import { getDebugKey } from "./walker";

type UpdateSignal = (scope: Scope, value: unknown) => void;
type FragmentEntry = [
  anchorScopeId: number,
  accessor: string,
  markerPrefix: string,
  html: string,
  // Ids of every scope the fragment serialized -- stamped into the live
  // tree so dom-less scopes (no marker can reach them) get live identity.
  scopeIds?: number[],
];
// A `<try>` placeholder boundary's body, resolved after its fragment
// frame shipped the placeholder: swapped in where the placeholder branch
// sits (the 0 in the accessor slot discriminates from FragmentEntry).
type BoundaryBodyEntry = [
  tryBranchId: number,
  kind: 0,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
];
// A `<@placeholder by=>` recede: the matched try's stale body is replaced
// by its placeholder (bracketed markup binding `PlaceholderBranch`) ahead
// of the body's own later entry (the 1 in the kind slot discriminates from
// BoundaryBodyEntry; fragment entries carry an accessor string there).
type PlaceholderResetEntry = [
  tryBranchId: number,
  kind: 1,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
];
// A lazy module's resume batch, keyed by the module's asset/ready id (a
// string in slot 0 -- fragment and boundary-body entries start with a
// number). Parked until the module declares ready, exactly like a
// document's blocking `.b` channel; arrival also fires the module's
// registered load trigger (see `_load_ready` in dom/load.ts). Inner fills
// are the standard shapes plus deps markers (string arrays naming other
// lazy modules whose batches must drain first).
type ReadyBatchEntry = [readyId: string, ...fills: unknown[]];
type UpdateFill =
  | ((
      ctx: (data: number | (Scope | number)[], registryId?: string) => unknown,
    ) => unknown)
  // Effect entries ("registryId scopeId …", patch-local scope ids): executed
  // only against scopes freshly created during the apply — a matched live
  // scope's effects already ran at mount.
  | string
  // Fragment frame entries: a content-hop branch delivered as resumable
  // HTML (see designs/persisted-pages-architecture.md, "Fragment frames").
  | FragmentEntry
  | BoundaryBodyEntry
  | PlaceholderResetEntry
  | ReadyBatchEntry;

/**
 * The possession echo (`x-marko-have`): what renderer the live page currently
 * holds at each dynamic-tag hop, so a same-route navigation whose update
 * renders a different renderer there ships a fragment for exactly that hop
 * (see the html writer's `possessed` / `_dynamic_tag`) instead of failing the
 * apply into a full navigation. Walks the resumed scope tree collecting, per
 * hop, a **build-stable site id** -> renderer id from the string-valued
 * `ConditionalRenderer:` keys -- dynamic tags serialize a renderer id string
 * there, while `<if>`/loop branches store a numeric branch index, so control
 * flow is excluded for free. The site id itself is read back off a sibling
 * key the html runtime stashed under the reserved `HOP_SITE_PREFIX` ("Z")
 * prefix: the compiler's per-site register id (`getUpdateDynamicRegisterId`),
 * not the runtime scope id -- the document and update renders number scopes
 * differently (the update elides matched scopes and omits the shell), so a
 * scope-id key would silently miss, while the register id is a compile
 * constant identical in both renders (see the "Possession echo" section of
 * designs/persisted-pages-architecture.md). A hop repeated across a keyed `<for>`
 * shares one site id, so the key appends the iteration's loop key
 * (`siteId + " " + loopKey`, read off the branch scope's `LoopKey`) to
 * disambiguate instances; positional loops expose no loop key and still
 * collide on the bare site id. Returns the map JSON-encoded for the request
 * header, or "" when the page holds no hops (the common case: the header is
 * then omitted).
 *
 * The same walk also collects **pending `<try>` boundaries**: a matched
 * boundary whose placeholder shipped in the document carries its
 * build-stable site id stashed under the reserved `BOUNDARY_SITE_PREFIX`
 * ("T") prefix (see `tryPlaceholder` in html/writer.ts), tombstoned to `0`
 * once the body's first content ships or an update-delivered body applies
 * (`_update_branch`) -- so a STRING value here means "still showing its
 * placeholder", and a resolved boundary reads falsy. These echo into the
 * SAME flat map under a `"!"`-prefixed key (the reserved placeholder token,
 * so it can never collide with a hop's site-id key) with sentinel value
 * `"1"` -- the server delivers the matching try's body as a boundary-body
 * entry instead of ordinary fills (see the "Correctness" section of
 * designs/persisted-pages-roadmap.md).
 *
 * `root` defaults to the resumed render's root; callers that already hold it
 * (the router pairs the root once for the apply) pass it to avoid re-pairing.
 */
export function _have(root: Scope | undefined = getUpdateRoot()): string {
  if (!root) return "";
  const prefix = AccessorPrefix.ConditionalRenderer;
  const possessed: Record<string, string> = {};
  const seen = new Set<Scope>();
  const stack: Scope[] = [root];
  let found: undefined | 1;
  while (stack.length) {
    const scope = stack.pop()!;
    if (seen.has(scope)) continue;
    seen.add(scope);
    for (const key in scope) {
      const value = scope[key];
      if (
        typeof value === "string" &&
        key.length > prefix.length &&
        key.slice(0, prefix.length) === prefix
      ) {
        // Key by the site's build-stable id (stashed by the html runtime),
        // not the runtime scope id -- the document and update renders number
        // scopes differently, but this id is a compile constant common to
        // both. A hop with no stashed id (should not happen in a persisted
        // build) is skipped -- at worst its swap falls back to a full nav.
        const siteId = scope[HOP_SITE_PREFIX + key.slice(prefix.length)];
        if (typeof siteId === "string") {
          found = 1;
          // Repeated hops (in a keyed `<for>`) share the site id, so append
          // the iteration's loop key to distinguish them -- the server does
          // the same from its live loop key (see `_dynamic_tag`).
          const loopKey = scope[AccessorProp.LoopKey];
          possessed[loopKey === undefined ? siteId : siteId + " " + loopKey] =
            value;
        }
      } else if (
        typeof value === "string" &&
        key.length > BOUNDARY_SITE_PREFIX.length &&
        key.slice(0, BOUNDARY_SITE_PREFIX.length) === BOUNDARY_SITE_PREFIX
      ) {
        found = 1;
        const loopKey = scope[AccessorProp.LoopKey];
        possessed["!" + value + (loopKey === undefined ? "" : " " + loopKey)] =
          "1";
      } else if (
        typeof value === "string" &&
        key.length > BOUNDARY_BY_PREFIX.length &&
        key.slice(0, BOUNDARY_BY_PREFIX.length) === BOUNDARY_BY_PREFIX
      ) {
        // `<@placeholder by=>` identity (`<siteId> <identity>`): echoed as
        // `"=" + identity` under the same "!"-keyed entry the pending half
        // uses. Pending's sentinel `"1"` wins when both exist -- a boundary
        // still showing its placeholder gets its body delivered as markup
        // regardless of identity (there is no stale body to recede).
        found = 1;
        const sep = value.indexOf(" ");
        const loopKey = scope[AccessorProp.LoopKey];
        const entryKey =
          "!" +
          value.slice(0, sep) +
          (loopKey === undefined ? "" : " " + loopKey);
        if (possessed[entryKey] !== "1") {
          possessed[entryKey] = "=" + value.slice(sep + 1);
        }
      } else if (value && typeof value === "object") {
        // Follow scope links (child/owner/branch scopes carry a numeric id)
        // and scope collections (`#BranchScopes` set, closure-scope arrays);
        // dom nodes and plain data terminate. `seen` guards the owner cycle.
        if (typeof (value as Scope)[AccessorProp.Id] === "number") {
          stack.push(value as Scope);
        } else if (value instanceof Set || Array.isArray(value)) {
          for (const child of value as Iterable<unknown>) {
            if (child && typeof child === "object") {
              stack.push(child as Scope);
            }
          }
        }
      }
    }
  }
  return found ? JSON.stringify(possessed) : "";
}

/**
 * Applies an update-render payload to a live (resumed) render.
 *
 * `merge` is the page template's compiled merge function (the `?update`
 * module's default export) and `liveRoot` the live scope it pairs with
 * (defaults to pairing the first render's root by convention). The
 * patch root is scope 1 by convention (the first scope the update render
 * allocates -- the root template's). Patch scopes are plain objects in a
 * patch-local id space; `_(id, registryId)` references inside values resolve
 * the same way resume fills do, against patch scopes. Scope 0 partials are
 * the update's `$global` values and merge onto the live `$global`.
 */
export function applyUpdate(
  merge: (patch: Scope, live: Scope) => void,
  fills:
    | UpdateFill[]
    | Exclude<
        UpdateFill,
        | FragmentEntry
        | BoundaryBodyEntry
        | PlaceholderResetEntry
        | ReadyBatchEntry
      >,
  liveRoot = getUpdateRoot(),
) {
  createUpdate(merge, liveRoot)(fills);
}

/**
 * The per-navigation form of `applyUpdate`: update responses are a stream of
 * serializer frames, and the returned function applies one frame's fills at
 * a time against a shared patch-scope space -- early frames settle in the
 * page before slow async boundaries resolve, exactly like a streamed MPA
 * render. Each call re-dispatches the root merge: sparse presence checks
 * pick up the keys the new frame added (later frames extend earlier scopes,
 * e.g. an `<await>` body's branch link), while already-applied keys re-apply
 * through value/DOM primitives that all no-op on unchanged input.
 */
export function createUpdate(
  merge: (patch: Scope, live: Scope) => void,
  liveRoot = getUpdateRoot(),
) {
  if (MARKO_DEBUG && !liveRoot) {
    throw new Error(
      "applyUpdate could not pair a live root scope (is the page resumed?)",
    );
  }
  // A persisted apply is beginning: epoch-gate the document's own reorder
  // runtime (see `bumpNavEpoch`) before any frame applies, so a still-
  // pending reorder chunk captured before this navigation no-ops instead
  // of landing pre-navigation content in the post-navigation page.
  bumpNavEpoch();
  const liveGlobal = liveRoot![AccessorProp.Global] as unknown as Scope;
  const patchScopes: Record<number, Scope> = { 0: liveGlobal };
  const getScope = (id: number) => (patchScopes[id] ||= {} as Scope);
  const applyScopes = (partials: (Scope | number)[]) => {
    let scopeId = partials[0] as number;
    for (let i = 1; i < partials.length; i++) {
      const partial = partials[i];
      if (typeof partial === "number") {
        scopeId += partial;
      } else {
        if (scopeId) {
          patchScopes[scopeId] = Object.assign(
            patchScopes[scopeId] || (partial as Scope),
            partial,
          );
        } else {
          Object.assign(liveGlobal, partial);
        }
        scopeId++;
      }
    }
  };
  const serializeContext = Object.assign(
    (data: number | (Scope | number)[], registryId?: string) =>
      typeof data === "number"
        ? registryId
          ? // Unlike document resume, update payloads may reference
            // registrations the build intentionally dropped: fragment-first
            // builds ship no content renderers (divergence arrives as
            // fragment frames), yet a matched scope's spine still
            // serializes renderer values by registry id. Resolve to
            // undefined -- nothing construction-related reads them in
            // those builds -- instead of invoking a missing registration.
            registryId in registeredValues
            ? (getRegisteredWithScope(registryId, getScope(data)) as unknown)
            : undefined
          : getScope(data)
        : applyScopes(data),
    // Fills reference registered values directly as `_._[id]`.
    { _: registeredValues },
  );

  const pairs = new Map<Scope, Scope>();
  // Fragment scopes ARE their live scopes: the walker binds DOM refs onto
  // the patch scope objects and they join the live scope tree, so stamping
  // gives them live-scope identity (generation, global, self-pairing for
  // payload effect entries).
  const stamp = (scope: Scope, id: number) => {
    if (scope[AccessorProp.Gen]) return false;
    scope[AccessorProp.Id] = id;
    scope[AccessorProp.Gen] = runId;
    scope[AccessorProp.Global] = liveGlobal as Scope[AccessorProp.Global];
    pairs.set(scope, scope);
    return true;
  };

  // A lazy module's keyed resume batch (see `ReadyBatchEntry`). Module
  // already ready: drain inline -- scope data lands before this frame's
  // merge dispatch reads it (a matched child's `_update_load` runs during
  // the merge) and effect entries join the frame's ordinary gated effect
  // path, which runs after the merge has walked any fragment markup and
  // bound the subtree's node refs. Still loading: park the batch and fire
  // the module's registered load trigger (`_load_ready`); the parked
  // closure carries THIS apply's patch-scope space, so fills resolve
  // against it whenever `ready()` replays them. Replayed effect entries
  // run only against scopes with live identity -- fragment/boundary-
  // stamped subtrees; a matched subtree's plain patch scopes never get
  // one, matching the main effect loop's pairing gate -- and skip
  // destroyed subtrees (`Gen` zeroed) for free.
  const processBatch = (entry: ReadyBatchEntry, effectEntries: string[]) => {
    const batch: ParkedReadyBatch = {
      id: entry[0],
      fills: entry.slice(1),
      apply: (fill) => {
        if (typeof fill === "string") {
          const effects: unknown[] = [];
          let fn: unknown;
          for (const token of fill.split(" ")) {
            if (/\D/.test(token)) {
              fn = registeredValues[token];
            } else {
              const scope = patchScopes[+token];
              if (fn && scope && scope[AccessorProp.Gen]) {
                effects.push(fn, scope);
              }
            }
          }
          runEffects(effects);
        } else {
          const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
          if (Array.isArray(scopes)) applyScopes(scopes);
        }
      },
    };
    if (isReady(batch.id)) {
      let count = 0;
      for (; count < batch.fills.length; count++) {
        const fill = batch.fills[count];
        if (Array.isArray(fill)) {
          // An unmet deps marker (another lazy module's batch must drain
          // first): the remainder parks and replays through `ready()`.
          if (!(fill as string[]).every(readyBatchDrained)) break;
        } else if (typeof fill === "string") {
          effectEntries.push(fill);
        } else {
          const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
          if (Array.isArray(scopes)) applyScopes(scopes);
        }
      }
      if (count === batch.fills.length) return;
      batch.fills.splice(0, count);
      parkedReadyBatches.push(batch);
    } else {
      parkedReadyBatches.push(batch);
      (registeredValues[batch.id] as undefined | (() => void))?.();
    }
  };

  // A bare (non-array) frame value can only be a merge fill or effect entry;
  // fragment entries always arrive inside a frame array off the wire.
  return (
    fills:
      | UpdateFill[]
      | Exclude<
          UpdateFill,
          FragmentEntry | BoundaryBodyEntry | ReadyBatchEntry
        >,
  ) => {
    const effectEntries: string[] = [];
    for (const fill of Array.isArray(fills) ? fills : [fills]) {
      if (typeof fill === "string") {
        effectEntries.push(fill);
      } else if (Array.isArray(fill)) {
        if (typeof fill[0] === "string") {
          // A lazy module's keyed resume batch: drained inline when the
          // module is ready, parked until it declares ready otherwise (its
          // markup, if any, rides this same frame's fragment/boundary-body
          // entry).
          processBatch(fill as ReadyBatchEntry, effectEntries);
        } else if (fill[1] === 0) {
          // Stash the boundary body on the try's own patch scope (the same
          // object the compiled branch dispatch's `patchBranch` resolves to
          // -- see `_update_branch`), which applies it once top-down
          // pairing (fresh or matched) resolves the live branch. Matched
          // boundaries pair no differently than any other matched scope, so
          // applying here -- before that pairing exists -- would silently
          // no-op; deferring to the compiled dispatch is what lets a
          // same-frame (synchronously resolved) or later-frame (still
          // pending) entry apply identically either way.
          getScope(fill[0])[PENDING_BODY_KEY] = fill;
        } else if (fill[1] === 1) {
          // A `<@placeholder by=>` recede's placeholder-reset entry --
          // same stash-and-dispatch discipline as the body entry above,
          // consumed by `_update_branch` before any body stash.
          getScope(fill[0])[PENDING_PLACEHOLDER_KEY] = fill;
        } else {
          // Stash the fragment on its anchor's patch scope under the
          // reserved "P" prefix; the hop's merge consumes it (see
          // `_update_dynamic`).
          getScope(fill[0])[FRAGMENT_PREFIX + fill[1]] = fill;
        }
      } else {
        const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
        if (Array.isArray(scopes)) applyScopes(scopes);
      }
    }

    setUpdating(1);
    activePairs = pairs;
    activeUpdate = {
      getScope,
      stamp,
      // Adopt a live scope AS a patch id (`applyBoundaryBody`'s matched
      // path): from here on the walk binds refs onto it and later frames'
      // scope data merges onto it directly -- the fragment-subtree model
      // ("patch scope IS live scope") applied to a boundary that matched.
      adopt: (id, scope) => (patchScopes[id] = scope),
    };
    // Boundary merges may flush mid-apply (`_update_branch`'s retry for
    // same-frame fresh creations), advancing `runId` -- "created during
    // this apply" means any run window from here on.
    applyGen = runId;
    try {
      // Boundary bodies apply from inside the compiled branch dispatch
      // (`_update_branch`), once it resolves this frame's pairing --
      // fragment-created boundaries are already self-paired from an
      // earlier frame, and matched boundaries pair through this very
      // top-down walk, same as any other matched scope.
      merge(getScope(1), liveRoot!);

      // Fresh-subtree effects: merges paired patch scopes to live scopes
      // (`_update_pair`); an entry runs iff its scope's live pair was
      // created during this apply (resumed/pre-existing scopes carry older
      // generation stamps, destroyed scopes `0`). Matched scopes never
      // replay.
      if (effectEntries.length) {
        const effects: unknown[] = [];
        for (const entry of effectEntries) {
          let fn: unknown;
          for (const token of entry.split(" ")) {
            if (/\D/.test(token)) {
              fn = registeredValues[token];
            } else {
              const live = pairs.get(patchScopes[+token]);
              if (fn && live && live[AccessorProp.Gen] >= applyGen) {
                effects.push(fn, live);
              }
            }
          }
        }
        runEffects(effects);
      }

      // Merges queue renders (intersections, closure fan-out, branch
      // setups); flush synchronously so each frame settles as one batch.
      run();
    } finally {
      setUpdating(0);
      activePairs = undefined;
      activeUpdate = undefined;
    }
  };
}

let activePairs: Map<Scope, Scope> | undefined;
let activeUpdate:
  | {
      getScope: (id: number) => Scope;
      stamp: (scope: Scope, id: number) => boolean;
      adopt: (id: number, scope: Scope) => Scope;
    }
  | undefined;

/**
 * Emitted at the top of compiled merge functions for sections with effects:
 * records the patch → live scope pairing so payload effect entries (which
 * carry patch-local scope ids) can resolve their live scope.
 */
export function _update_pair(patch: Scope, live: Scope) {
  activePairs?.set(patch, live);
}

let applyGen = 0;

// Content-section merges register under the section's content id plus this
// suffix (a character that cannot appear in generated register ids), so
// dynamic tags can dispatch a merge from the renderer id the server
// serialized (`ConditionalRenderer:<accessor>` in the patch).
const UPDATE_MERGE_SUFFIX = "!";
type UpdateMerge = (patch: Scope, live: Scope) => void;

/**
 * Single-branch boundary (`<await>`/`<try>` body) dispatch. When the live
 * branch is a detached await — a fresh subtree's await whose promise
 * compute was skipped while updating — the body's frame is the resolution:
 * attach it at its anchor, then fill it. A stashed boundary-body entry (see
 * `createUpdate`/`PENDING_BODY_KEY`) -- a fragment-created boundary's second
 * frame, or a client-pending matched boundary's body delivered as markup
 * because no live branch exists to merge fills into -- applies instead of
 * `bodyMerge` and is consumed so a later re-dispatch (a streamed frame
 * re-applying, or this function's own same-frame retry) never double-
 * applies it. Otherwise attached (or non-await) branches just fill; an
 * absent live branch sparse-skips.
 */
export function _update_branch(
  patch: Scope,
  live: Scope,
  accessor: Accessor,
  bodyMerge: UpdateMerge | 0,
) {
  const branchKey = AccessorPrefix.BranchScopes + accessor;
  const patchBranch = patch[branchKey] as Scope | undefined;
  if (!patchBranch) return;
  let liveBranch = live[branchKey] as BranchScope | undefined;
  if (!liveBranch) {
    // The boundary may sit in a subtree created earlier in this same
    // apply whose structural renders are still queued (a same-frame fresh
    // creation) -- flush and retry once.
    run();
    liveBranch = live[branchKey] as BranchScope | undefined;
    if (!liveBranch) return;
  }
  if (liveBranch[AccessorProp.DetachedAwait]) {
    attachAwaitBranch(live, accessor as string, liveBranch);
  }
  // The `<@placeholder by=>` identity stash rides every update's fills;
  // copying it here is what keeps the NEXT navigation's echo comparing
  // against the latest identity (fast in-place fills included).
  const byKey = BOUNDARY_BY_PREFIX + (accessor as string);
  if (typeof patch[byKey] === "string") {
    live[byKey] = patch[byKey];
  }
  // Entry stashes are read through BOTH the patch branch and the live
  // branch: a placeholder reset adopts the live branch as the patch id
  // (below), so a LATER frame's body entry stashes onto the live branch
  // while this dispatch's `patchBranch` still resolves the pre-adoption
  // patch object.
  const resetEntry = ((patchBranch as BranchScope)[PENDING_PLACEHOLDER_KEY] ||
    liveBranch[PENDING_PLACEHOLDER_KEY]) as PlaceholderResetEntry | undefined;
  if (resetEntry) {
    delete (patchBranch as BranchScope)[PENDING_PLACEHOLDER_KEY];
    delete liveBranch[PENDING_PLACEHOLDER_KEY];
    applyPlaceholderReset(
      liveBranch,
      resetEntry[2],
      resetEntry[3],
      resetEntry[4],
      resetEntry[0],
    );
    // The boundary is genuinely pending again -- restore the pending-echo
    // stash (site id parsed off the identity stash) so a navigation that
    // supersedes this one before the body arrives takes the existing
    // markup-delivery path for a client-side placeholder.
    const by = live[byKey] as string | undefined;
    if (by) {
      live[BOUNDARY_SITE_PREFIX + (accessor as string)] = by.slice(
        0,
        by.indexOf(" "),
      );
    }
  }
  const bodyEntry = ((patchBranch as BranchScope)[PENDING_BODY_KEY] ||
    liveBranch[PENDING_BODY_KEY]) as BoundaryBodyEntry | undefined;
  if (bodyEntry) {
    delete (patchBranch as BranchScope)[PENDING_BODY_KEY];
    delete liveBranch[PENDING_BODY_KEY];
    applyBoundaryBody(
      liveBranch,
      bodyEntry[2],
      bodyEntry[3],
      bodyEntry[4],
      bodyEntry[0],
    );
    // The boundary is no longer pending: flip the "still showing its
    // placeholder" stash falsy so the NEXT navigation's echo skips this
    // site and the update goes back to ordinary fills (mirrors the server
    // tombstone a document render writes when its own body resolves).
    live[BOUNDARY_SITE_PREFIX + (accessor as string)] = 0;
  } else if (bodyMerge) {
    bodyMerge(patchBranch, liveBranch);
  }
}

export function _update_content(contentId: string, merge: UpdateMerge) {
  _resume(contentId + UPDATE_MERGE_SUFFIX, merge);
}

/**
 * `load=` lazy-child dispatch. The child's `?update` merge module rides its
 * lazy chunk (the load-entry wrapper and the CSR setup virtual module both
 * import it in persisted builds), registered under a register id both sides
 * compute (`<childTemplateId>` + its root `update` key — a compile
 * constant). Loaded child: dispatch directly. Still loading: park the
 * (patch, live, id) triple and replay when a load completes
 * (`enableLoadUpdates`/`enableReadyUpdates` hooks below) — request-derived
 * values ride every update, so the NEWEST parked patch per live scope is
 * complete and supersedes earlier ones.
 */
export function _update_load(patch: Scope, live: Scope, mergeId: string) {
  // A fragment-constructed lazy child (patch IS live -- fragment subtree
  // scopes are shared objects) has nothing to merge: the fragment baked its
  // rendered values into the markup, and its hole data rides the ready
  // channel against scopes the fragment walk owns, not a patch to dispatch.
  // Same suppression rule the typed `UpdateChild:` link applies inside
  // fragment subtrees -- without it, a registered child merge runs against
  // a scope that is not a patch (undefined node-ref reads).
  if (patch === live) return;
  const merge = registeredValues[mergeId] as UpdateMerge | undefined;
  if (merge) {
    merge(patch, live);
  } else {
    for (const pending of pendingLoadUpdates) {
      if (pending[1] === live) {
        pending[0] = patch;
        return;
      }
    }
    pendingLoadUpdates.push([patch, live, mergeId]);
  }
}

const pendingLoadUpdates: [patch: Scope, live: Scope, mergeId: string][] = [];
const flushPendingLoadUpdates = () => {
  for (let i = pendingLoadUpdates.length; i--;) {
    const [patch, live, mergeId] = pendingLoadUpdates[i];
    const merge = registeredValues[mergeId] as UpdateMerge | undefined;
    // Skip destroyed scopes (a later navigation removed the subtree).
    if (merge && live[AccessorProp.Gen]) {
      pendingLoadUpdates.splice(i, 1);
      merge(patch, live);
    } else if (!live[AccessorProp.Gen]) {
      pendingLoadUpdates.splice(i, 1);
    }
  }
};

// Keyed resume batches parked until their lazy module declares ready (see
// `parkBatch` in `createUpdate` -- each batch's fills replay through the
// apply that delivered it).
interface ParkedReadyBatch {
  id: string;
  fills: unknown[];
  apply: (fill: unknown) => void;
}
const parkedReadyBatches: ParkedReadyBatch[] = [];
const readyBatchDrained = (dep: string) =>
  isReady(dep) && !parkedReadyBatches.some((batch) => batch.id === dep);
const flushParkedReadyBatches = () => {
  // Fixed point: draining one module's batch may unblock another's deps
  // marker (nested lazy modules), mirroring the document walker's ready
  // loop (`render.m` in dom/resume.ts).
  for (let progress: unknown = 1; progress;) {
    progress = 0;
    for (let i = 0; i < parkedReadyBatches.length; i++) {
      const batch = parkedReadyBatches[i];
      if (!isReady(batch.id)) continue;
      let count = 0;
      for (; count < batch.fills.length; count++) {
        const fill = batch.fills[count];
        if (Array.isArray(fill)) {
          // Deps marker: every named module must be ready with its own
          // batches drained (a dep's data always flushes before an entry
          // that names it, so drained means present).
          if (!(fill as string[]).every(readyBatchDrained)) break;
        } else {
          batch.apply(fill);
        }
      }
      if (count) {
        progress = 1;
        batch.fills.splice(0, count);
      }
      if (!batch.fills.length) parkedReadyBatches.splice(i--, 1);
    }
  }
};

enableReadyUpdates(() => {
  // Keyed batches first: a parked lazy-child merge below may read patch
  // data the batch carries.
  flushParkedReadyBatches();
  flushPendingLoadUpdates();
});

export function _update_dynamic(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
  replay?: UpdateSignal | 0,
) {
  const rendererId = patch[rendererKey];
  if (typeof rendererId !== "string") return;
  const patchBranch = patch[branchKey] as Scope | undefined;
  const accessor = branchKey.slice(AccessorPrefix.BranchScopes.length);
  const fragment = patch[FRAGMENT_PREFIX + accessor] as
    FragmentEntry | undefined;

  if (fragment && patchBranch && live[rendererKey] !== rendererId) {
    // The divergence point arrived as a fragment frame: swap the branch by
    // inserting the server-rendered subtree instead of client-constructing
    // it from a registered renderer graph. Consume the entry -- streamed
    // frames re-dispatch this merge -- then fall through to the ordinary
    // merge dispatch: fragment subtrees share one object between patch and
    // live scopes, so the merge's fills self-apply idempotently (seeds and
    // links reference the walker-built scopes themselves; hole-value keys
    // live in their own `UpdateHole:`/`UpdateAttr:` namespace and were
    // suppressed during capture), and later frames (async boundary bodies)
    // dispatch through the same path into the fragment's scopes.
    delete patch[FRAGMENT_PREFIX + accessor];
    stampFragmentScopes(fragment[4]);
    applyFragment(
      live,
      accessor,
      patchBranch as BranchScope,
      fragment[2],
      fragment[3],
    );
    live[rendererKey] = rendererId;
  } else if (replay && live[rendererKey] !== rendererId) {
    // The patch rendered a different renderer than the live page holds --
    // a cross-route navigation's divergence point. Resolve the registered
    // renderer (persisted builds register all content; the target route's
    // modules are loaded before applying) bound to the patch branch's own
    // owner scope -- its values are the update's data, so the fresh
    // branch's closures read correct values (client-state reactivity from
    // the owner into a swapped branch is inert; acceptable for stateless
    // pass-through owners like route wrappers) -- and replay the dynamic
    // tag's own signal: the runtime swaps in a fresh branch built from the
    // renderer's static parts, and the merge below fills it from the
    // patch. An unresolved id (target code not loaded) leaves the live
    // branch untouched -- the sparse skip.
    const renderer = getRegisteredWithScope(
      rendererId,
      (patchBranch?.[AccessorProp.Owner] as Scope) ||
        (live[AccessorProp.Owner] as Scope) ||
        live,
    );
    if (!renderer) return;
    replay(live, renderer);
  } else if (live[rendererKey] !== rendererId) {
    // Fragment-first builds compile no replay: divergence is fragment-
    // delivered, so a mismatch without a fragment entry (eg a same-route
    // navigation changed a dynamic tag's renderer) cannot apply. Fail the
    // apply loudly -- the router falls back to a full navigation -- rather
    // than dispatching the new content's merge against the stale branch.
    // A mismatch with no live branch has nothing to go stale: sparse-skip.
    if (live[branchKey]) {
      throw new Error(
        MARKO_DEBUG
          ? `A persisted update changed a dynamic tag's renderer (${rendererId}) without a fragment entry; fragment-first builds cannot construct it client-side.`
          : "update diverged",
      );
    }
    return;
  }

  const merge = getRegisteredWithScope(rendererId + UPDATE_MERGE_SUFFIX) as
    UpdateMerge | undefined;
  const liveBranch = live[branchKey] as Scope | undefined;
  if (patchBranch && liveBranch) {
    if (merge) {
      merge(patchBranch, liveBranch);
    } else {
      // A tag-name renderer (native-tag branch) registers no merge --
      // every content renderer does, update-generic ones as the bare
      // interpreter -- and its body's content hop is runtime-created by
      // the native wrapper (html/dynamic-tag.ts), so no compiled merge
      // line can exist at any level. Descend generically: place the
      // branch scope's typed captures (dynamic attrs on the element),
      // then recurse into the nested hop through the same
      // renderer-id-keyed link. Fragment subtrees are inert here as
      // everywhere (patch IS live: captures suppressed, renderer keys
      // already equal). The known misfire is a `_load_template` lazy
      // dynamic-tag target, whose merge is genuinely unregistered until
      // it loads -- see agent-feedback/bugs.md.
      _update_scope(patchBranch, liveBranch);
      for (const key in patchBranch) {
        if (
          key.length > AccessorPrefix.ConditionalRenderer.length &&
          key.slice(0, AccessorPrefix.ConditionalRenderer.length) ===
            AccessorPrefix.ConditionalRenderer &&
          typeof patchBranch[key] === "string"
        ) {
          _update_dynamic(
            patchBranch,
            liveBranch,
            key,
            AccessorPrefix.BranchScopes +
              key.slice(AccessorPrefix.ConditionalRenderer.length),
            0,
          );
        }
      }
    }
  }
}

// ---- Fragment frames --------------------------------------------------
// (see designs/persisted-pages-architecture.md, "Fragment frames"). A fragment delivers a
// content-hop branch as resumable HTML -- values baked into the markup,
// resume markers and branch brackets included -- while its scope DATA rides
// the ordinary fills in the same patch id space. Applying is therefore:
// parse, walk the markers binding DOM refs onto the patch scopes (which
// join the live scope tree as-is), insert at the hop's anchor, swap the
// branch bookkeeping. Reserved accessor prefix "P" carries the entry on the
// anchor's patch scope (see common/accessor.ts).
const FRAGMENT_PREFIX = "P";

// The build-stable per-site id the possession echo (`_have`) reads is stashed
// on each hop scope by the html runtime under this reserved prefix ("Z", not
// an AccessorPrefix enum member so it stays out of client bundles). Matches
// `HOP_SITE_PREFIX` in html/dynamic-tag; same MARKO_DEBUG gate so the document
// (server) and live (client) builds agree within a build.
const HOP_SITE_PREFIX = MARKO_DEBUG ? "HopSite:" : "Z";

// A `<try>` placeholder boundary's build-stable site id, stashed on its
// parent scope when a document render's placeholder ships and tombstoned to
// `0` once the boundary resolves (server-side at the body's first flush --
// see `tryPlaceholder`/`Chunk.boundarySite` in html/writer.ts -- or
// client-side in `_update_branch` when an update-delivered body applies).
// A string value is what `_have` reads as "still pending". Reserved prefix
// "T", mirroring `HOP_SITE_PREFIX`'s reasoning.
const BOUNDARY_SITE_PREFIX = MARKO_DEBUG ? "BoundarySite:" : "T";

// A `<@placeholder by=>` boundary's identity stash (`<siteId> <identity>`
// on the parent scope; reserved "U" -- see common/accessor.ts). `_have`
// echoes it as `"=" + identity` under the same "!"-keyed entry the pending
// half uses (pending's `"1"` wins); the server recedes the boundary to its
// placeholder when a navigation's newly-evaluated identity differs. Kept
// current by `_update_branch`, which copies the patch's stash onto the
// live scope on every dispatch. See designs/persisted-pages-recede.md.
const BOUNDARY_BY_PREFIX = MARKO_DEBUG ? "BoundaryBy:" : "U";

// A boundary-body entry stashed directly on the try's own patch scope (the
// same object `_update_branch`'s `patchBranch` resolves to) so the compiled
// branch dispatch can apply it once pairing (fresh or matched) resolves the
// live branch -- see `_update_branch`/`applyBoundaryBody`. Bare reserved
// token (not a letter, so it can never collide with an `AccessorProp`/
// `AccessorPrefix` key on the same scope regardless of key length).
const PENDING_BODY_KEY = "!";

// A `<@placeholder by=>` recede's placeholder-reset entry, stashed the same
// way and consumed by `_update_branch` before any body stash. Same bare
// reserved-token rule as "!".
const PENDING_PLACEHOLDER_KEY = "?";

// Every scope a fragment (or boundary body) serialized joins the live tree
// -- including dom-less scopes (state and tag-variable wiring only) the
// markup walk can never reach. Stamping gives them live identity: $global,
// generation (their payload effects run), and self-pairing.
function stampFragmentScopes(ids: number[] | undefined) {
  if (ids) {
    const { getScope, stamp } = activeUpdate!;
    for (const id of ids) {
      stamp(getScope(id), id);
    }
  }
}

function applyFragment(
  live: Scope,
  accessor: string,
  branch: BranchScope,
  markerPrefix: string,
  html: string,
) {
  const { stamp } = activeUpdate!;
  const marker = live[accessor] as ChildNode;
  const old = live[AccessorPrefix.BranchScopes + accessor] as
    BranchScope | undefined;
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const { touched, orphans } = walkFragment(tpl.content, markerPrefix);
  // Branch boundary nodes must be owned by the branch, so bookend the
  // content with empty text nodes (the resume walker's discipline). The
  // fragment's edge nodes can be marker comments the runtime later
  // consumes -- e.g. a single-node conditional toggling on replaces its
  // marker -- which would leave the boundary dangling and send a later
  // branch removal running past the fragment.
  const first = tpl.content.insertBefore(new Text(), tpl.content.firstChild);
  const last = tpl.content.appendChild(new Text());
  marker.parentNode!.insertBefore(tpl.content, marker);
  if (old) removeAndDestroyBranch(old);
  stamp(branch, 0);
  branch[AccessorProp.StartNode] = first;
  branch[AccessorProp.EndNode] = last;
  branch[AccessorProp.Owner] ||= live;
  setParentBranch(
    branch,
    live[AccessorProp.ClosestBranch] as BranchScope | undefined,
  );
  live[AccessorPrefix.BranchScopes + accessor] = branch;
  // Top-level inner branches join the hop branch's tree so destroy
  // cascades reach them; scopes with no enclosing bracket link coarsely to
  // the hop branch. (The resume walker's deferred-owner precision is the
  // unification follow-up.)
  for (const orphan of orphans) {
    if (!orphan[AccessorProp.ParentBranch]) {
      setParentBranch(orphan, branch);
    }
  }
  for (const scope of touched) {
    scope[AccessorProp.ClosestBranch] ||= branch;
  }
}

/**
 * Applies a boundary-body entry: a `<try>` placeholder boundary's resolved
 * body. Two shapes reach here (see `_update_branch`):
 *
 * - **Fragment-created**: the body arrives after the fragment frame that
 *   shipped the placeholder, bracketed as a dedicated `PlaceholderBranch`
 *   (the reserved "!" accessor token -- see `walkFragment`). The new markup
 *   swaps in where that placeholder branch sits, which is then destroyed.
 * - **Matched (document-resumed)**: no separate placeholder branch was ever
 *   built client-side -- a document render's placeholder resumes as the
 *   try's own branch (there is no marker distinguishing "placeholder" from
 *   "real content" in that format), so the still-pending try's OWN
 *   Start/EndNode range IS what shows the placeholder. The new markup
 *   replaces that range's contents wholesale, keeping the branch's own
 *   boundary nodes so its identity survives the swap.
 *
 * In both cases the body's markup walks like a fragment (its scope data
 * already landed through this frame's fills). No-ops if the try branch is
 * gone or destroyed (a later navigation already superseded or removed this
 * boundary) -- `_update_branch` already resolved a live, paired branch
 * before calling this, so that only guards a race within the same apply.
 */
function applyBoundaryBody(
  tryBranch: BranchScope,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
  patchBranchId?: number,
) {
  if (!tryBranch[AccessorProp.Gen]) return;
  const placeholderBranch = tryBranch[AccessorProp.PlaceholderBranch];
  // Adopt the LIVE try branch as the patch id the body's markup references
  // (matched boundaries: the update render numbered this try in its own id
  // space, and the walk below must bind node refs and the body's branch
  // wiring -- the await end bracket's `scope[BranchScopes + acc] = branch`
  // -- onto the live scope graph, or the next navigation's fills dispatch
  // into stale placeholder-era links and sparse-skip). Fragment-created
  // boundaries already ARE their patch scope, so the adopt is a no-op
  // there; either way this frame's later fills and streamed follow-up
  // frames for this id now merge onto the live branch directly (the
  // fragment-subtree model).
  if (patchBranchId) activeUpdate!.adopt(patchBranchId, tryBranch);
  // Give the body's dom-less scopes (state/tag-variable wiring only -- the
  // markup walk below can't reach them) live identity, exactly as the
  // fragment path stamps `fragment[4]` (see `_update_dynamic`). Without this
  // their payload effects are generation-gated out and `$global` reads on
  // them see undefined.
  stampFragmentScopes(scopeIds);
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const { touched, orphans } = walkFragment(tpl.content, markerPrefix);
  if (placeholderBranch) {
    tryBranch[AccessorProp.PlaceholderBranch] = 0;
    placeholderBranch[AccessorProp.StartNode].parentNode!.insertBefore(
      tpl.content,
      placeholderBranch[AccessorProp.StartNode],
    );
    removeAndDestroyBranch(placeholderBranch);
  } else {
    const start = tryBranch[AccessorProp.StartNode];
    const end = tryBranch[AccessorProp.EndNode];
    if (start !== end && start.nextSibling !== end) {
      removeChildNodes(
        start.nextSibling as ChildNode,
        end.previousSibling as ChildNode,
      );
    }
    end.parentNode!.insertBefore(tpl.content, end);
  }
  for (const orphan of orphans) {
    if (!orphan[AccessorProp.ParentBranch]) {
      setParentBranch(orphan, tryBranch);
    }
  }
  for (const scope of touched) {
    scope[AccessorProp.ClosestBranch] ||= tryBranch;
  }
}

/**
 * Applies a `<@placeholder by=>` recede: the matched try's identity changed
 * and its new body is still pending, so the stale body is replaced by the
 * boundary's placeholder ahead of the body's own entry. The markup is
 * bracketed exactly like a fragment-shipped pending boundary's placeholder
 * (the reserved "!" accessor token), so the walk below binds it to
 * `PlaceholderBranch` on the adopted live try branch -- from there the body
 * entry swaps it out through `applyBoundaryBody`'s existing placeholder
 * path with no new machinery. Content replacement keeps the try branch's
 * own boundary nodes (its identity survives, like the matched body swap);
 * the receded body's scopes share that path's recorded teardown edge (see
 * the roadmap's matched-path note) -- `by=` is also the author's
 * declaration that state inside the boundary does not survive a key
 * change.
 */
function applyPlaceholderReset(
  tryBranch: BranchScope,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
  patchBranchId?: number,
) {
  if (!tryBranch[AccessorProp.Gen]) return;
  // Adopt the live branch as the patch id the placeholder's brackets
  // reference, exactly as `applyBoundaryBody`'s matched path does -- the
  // "!" bracket's parent token is this try's update-render id, and
  // `PlaceholderBranch` must bind onto the live scope graph.
  if (patchBranchId) activeUpdate!.adopt(patchBranchId, tryBranch);
  stampFragmentScopes(scopeIds);
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const { touched, orphans } = walkFragment(tpl.content, markerPrefix);
  const start = tryBranch[AccessorProp.StartNode];
  const end = tryBranch[AccessorProp.EndNode];
  if (start !== end && start.nextSibling !== end) {
    removeChildNodes(
      start.nextSibling as ChildNode,
      end.previousSibling as ChildNode,
    );
  }
  end.parentNode!.insertBefore(tpl.content, end);
  for (const orphan of orphans) {
    if (!orphan[AccessorProp.ParentBranch]) {
      setParentBranch(orphan, tryBranch);
    }
  }
  for (const scope of touched) {
    scope[AccessorProp.ClosestBranch] ||= tryBranch;
  }
}

// A sync-only port of the resume walker's visit processing
// (dom/resume.ts `render.m` + `createVisitBranches`) against patch scopes:
// node visits bind element/text refs (continuation form included), branch
// brackets establish start/end nodes, owners, branch lists, and the parent
// branch tree, plus the placeholder bracket ("!") for pending boundary
// bodies. No await counters or reorder anchors -- async content is only
// supported behind placeholder boundaries (each body arrives as its own
// entry). Unifying this with the resume walker is the non-spike follow-up.
function walkFragment(root: ParentNode, prefix: string) {
  const { getScope, stamp } = activeUpdate!;
  const visits: Comment[] = [];
  const treeWalker = document.createTreeWalker(root, 128 /* comments */);
  for (let node; (node = treeWalker.nextNode());) {
    if ((node as Comment).data.startsWith(prefix)) {
      visits.push(node as Comment);
    }
  }

  const touched: Scope[] = [];
  const scopeOf = (id: string) => {
    const scope = getScope(+id);
    if (stamp(scope, +id)) touched.push(scope);
    return scope;
  };

  const branchStarts: Comment[] = [];
  const branchScopesStack: (BranchScope[] | undefined)[] = [];
  const orphanBranches: BranchScope[] = [];
  let curBranchScopes: BranchScope[] | undefined;
  let lastNodeScopeId = "";
  let visitText = "";
  let tokenIndex = 0;
  let lastToken = "";
  const nextToken = () =>
    (lastToken = visitText.slice(
      tokenIndex,
      (tokenIndex =
        visitText.indexOf(" ", tokenIndex) + 1 || visitText.length + 1) - 1,
    ));

  for (const visit of visits) {
    visitText = visit.data;
    tokenIndex = prefix.length;
    const visitType = visitText[tokenIndex++] as ResumeSymbol;

    if (visitType === ResumeSymbol.Node) {
      const scopeId = nextToken();
      const scope = scopeOf(
        scopeId ? (lastNodeScopeId = scopeId) : lastNodeScopeId,
      );
      const accessor = nextToken();
      const prev = visit.previousSibling;
      scope[accessor] =
        prev && (prev.nodeType < 8 || (prev as Comment).data)
          ? prev
          : visit.parentNode!.insertBefore(new Text(), visit);
      continue;
    }

    lastNodeScopeId = "";
    let visitScope: Scope | undefined;
    let accessor: string | undefined;
    let singleNode = false;
    let endedBranches: BranchScope[] | undefined;
    let startVisit: ChildNode = visit;
    const parent = visit.parentNode!;

    if (visitType !== ResumeSymbol.BranchStart) {
      visitScope = scopeOf(nextToken());
      if (nextToken() === "!") {
        // A placeholder bracket (see the server's `flushPlaceholder`): the
        // ended branch is the try branch's placeholder branch -- swapped
        // out when the boundary body's entry arrives -- and there is no
        // node ref to bind.
        accessor = AccessorProp.PlaceholderBranch;
      } else {
        visitScope[lastToken] =
          visitType === ResumeSymbol.BranchEndOnlyChildInParent ||
          visitType === ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
            ? parent
            : visit;
        accessor = AccessorPrefix.BranchScopes + lastToken;
      }
      singleNode =
        visitType !== ResumeSymbol.BranchEnd &&
        visitType !== ResumeSymbol.BranchEndOnlyChildInParent;
      nextToken();
    } else {
      // For starts the first token is the optional first ended branch id
      // (loop-iteration flush markers).
      nextToken();
    }

    let i = orphanBranches.length;
    let branchId: number;
    while ((branchId = +lastToken)) {
      const branch = scopeOf(lastToken) as BranchScope;
      (endedBranches ||= []).push(branch);

      if (singleNode) {
        while (
          startVisit.previousSibling &&
          ~visits.indexOf((startVisit = startVisit.previousSibling) as Comment)
        );
        branch[AccessorProp.Owner] ??= visitScope!;
        branch[AccessorProp.EndNode] = branch[AccessorProp.StartNode] =
          startVisit;
        if (visitType === ResumeSymbol.BranchEndNativeTag) {
          branch[MARKO_DEBUG ? getDebugKey(0, startVisit) : "a"] = startVisit;
        }
      } else {
        curBranchScopes = curBranchScopes
          ? (curBranchScopes.push(branch), curBranchScopes)
          : [branch];
        if (accessor) {
          visitScope![accessor] =
            curBranchScopes.length > 1 ? curBranchScopes : curBranchScopes[0];
          for (const scope of curBranchScopes) {
            scope[AccessorProp.Owner] ??= visitScope!;
          }
          curBranchScopes = branchScopesStack.pop();
        }
        startVisit = branchStarts.pop()!;
        if (parent !== startVisit.parentNode) {
          parent.prepend(startVisit);
        }
        branch[AccessorProp.StartNode] = startVisit;
        branch[AccessorProp.EndNode] =
          visit.previousSibling === startVisit
            ? startVisit
            : parent.insertBefore(new Text(), visit);
      }

      while (i && orphanBranches[--i][AccessorProp.Id] > branchId) {
        setParentBranch(orphanBranches.pop()!, branch);
      }

      nextToken();
    }

    if (endedBranches) {
      for (const ended of endedBranches) orphanBranches.push(ended);
      if (singleNode) {
        visitScope![accessor!] =
          endedBranches.length > 1 ? endedBranches.reverse() : endedBranches[0];
      }
    }

    if (visitType === ResumeSymbol.BranchStart) {
      if (!endedBranches) {
        branchScopesStack.push(curBranchScopes);
        curBranchScopes = undefined;
      }
      branchStarts.push(visit);
    }
  }

  return { touched, orphans: orphanBranches };
}

// The typed patch-key prefixes hole captures serialize under (mirrors of
// the translator's `getUpdateHolePrefix`/`getUpdateHtmlPrefix`/
// `getUpdateAttrPrefix`; reservations in common/accessor.ts). Optimized
// keys are one char + accessor, so the bare single-char scope props that
// share those letters (`Q`/`R`/`N` in `AccessorProp`) are excluded by
// key length.
const HOLE_PREFIX = MARKO_DEBUG ? "UpdateHole:" : "Q";
const HTML_PREFIX = MARKO_DEBUG ? "UpdateHtml:" : "R";
const ATTR_PREFIX = MARKO_DEBUG ? "UpdateAttr:" : "N";
const CHILD_PREFIX = MARKO_DEBUG ? "UpdateChild:" : "S";

/**
 * The generic hole applier: places every typed hole capture a patch scope
 * carries against its paired live scope -- text holes (`UpdateHole:`),
 * unsafe-html holes (`UpdateHtml:`), and attr holes/controllables
 * (`UpdateAttr:<name>:<accessor>`) -- replacing the per-template merge
 * lines those keys used to compile to, and descends into update-generic
 * child scopes through their typed links (`UpdateChild:<accessor>`,
 * serialized by `_update_child` in update renders only) so server-only
 * compositions need no compiled dispatch at any level. Controllable
 * semantics are recovered from the live element: on their tags the
 * controllable names always route through the controllable carve-out, so
 * `value` on an input is never a plain attr hole. Fragment subtrees are
 * naturally inert here: their captures and child links are suppressed
 * server-side (values are baked into the markup), so the shared
 * patch/live object carries no prefixed keys.
 */
export function _update_scope(patch: Scope, live: Scope) {
  for (const key in patch) {
    if (key.length > 1) {
      if (key.startsWith(HOLE_PREFIX)) {
        _text(live[key.slice(HOLE_PREFIX.length)], patch[key]);
      } else if (key.startsWith(HTML_PREFIX)) {
        _update_html(live, patch, key, key.slice(HTML_PREFIX.length));
      } else if (key.startsWith(CHILD_PREFIX)) {
        // The key only exists for children whose whole update module is
        // this interpreter, so recursing IS the child's merge (the live
        // link rides the plain accessor, from resume or the child's dom
        // setup).
        _update_scope(
          patch[key] as Scope,
          live[key.slice(CHILD_PREFIX.length)] as Scope,
        );
      } else if (key.startsWith(ATTR_PREFIX)) {
        const sep = key.indexOf(":", ATTR_PREFIX.length);
        const name = key.slice(ATTR_PREFIX.length, sep);
        const accessor = key.slice(sep + 1);
        const value = patch[key];
        if (name === "class") {
          _attr_class(live[accessor] as Element, value);
        } else if (name === "style") {
          _attr_style(live[accessor] as Element, value);
        } else if (name === "textContent") {
          _text_content(live[accessor] as Element, value);
        } else {
          const tag = (live[accessor] as Element).tagName;
          if (name === "value" && (tag === "INPUT" || tag === "TEXTAREA")) {
            _attr_input_value_default(live, accessor, value);
          } else if (name === "value" && tag === "SELECT") {
            _attr_select_value_default(live, accessor, value);
          } else if (name === "checked" && tag === "INPUT") {
            _attr_input_checked_default(live, accessor, value);
          } else if (
            name === "open" &&
            (tag === "DETAILS" || tag === "DIALOG")
          ) {
            _attr_details_or_dialog_open_default(live, accessor, value);
          } else {
            _attr(live[accessor] as Element, name, value);
          }
        }
      }
    }
  }
}

// Unsafe-html holes replace their DOM range unconditionally, so a streamed
// re-dispatch (each frame re-runs the root merge) must consume the patch key
// after applying -- a leaf value nothing else descends through. The patch
// key (`UpdateHtml:<accessor>`) is distinct from the node accessor the DOM
// range lives under (see `getUpdateHtmlPrefix` in the translator).
export function _update_html(
  live: Scope,
  patch: Scope,
  key: string,
  accessor: string | number,
) {
  _html(live, patch[key], accessor as Accessor);
  delete patch[key];
}

/**
 * Applies a seed-mode state value: only into scopes created during this
 * apply (fresh subtrees cannot compute state whose initializers live
 * behind server-only expressions -- the seed IS the initial value), through
 * the binding's registered signal so downstream derivations recompute.
 * Matched (pre-existing) scopes keep their live state untouched.
 */
export function _update_seed(
  live: Scope,
  signal: UpdateSignal,
  value: unknown,
) {
  if (live[AccessorProp.Gen] >= applyGen) signal(live, value);
}

export function _update_signal(id: string): UpdateSignal {
  return (scope, value) =>
    (getRegisteredWithScope(id, scope) as (value: unknown) => void)(value);
}

export function _update_for(
  nodeAccessor: string | number,
  contentId: string,
  merge: (branchScope: Scope, args: unknown[]) => void,
): UpdateSignal {
  let signal: UpdateSignal | undefined;
  return (scope, value) => {
    if (!signal) {
      const content = getRegisteredWithScope(contentId) as [any, any, any];
      signal = _for_of(
        nodeAccessor as string,
        content[0],
        content[1],
        content[2],
        merge as any,
      ) as UpdateSignal;
    }
    // Fragment subtrees share one object between patch and live scopes,
    // so a fragment-built loop's self-dispatch hands us the walker-bound
    // live branches as the "patch" list. There is nothing to reconcile --
    // and reconciling anyway is destructive for positional loops, whose
    // walker branches carry no keys (the reconcile would rebuild every
    // branch from the registered template against patch scopes). A live
    // branch is recognizable by its bound start node; fills-path patch
    // branches are plain data objects.
    let branches = (value as unknown[])[0] as BranchScope[] | BranchScope;
    if (branches && !Array.isArray(branches)) {
      // A fragment-walked lone branch binds bare (resume-form, which the
      // shared scope must keep for the live loop signal); the fills path
      // always serializes arrays.
      branches = (value as unknown[])[0] = [branches] as BranchScope[];
    }
    if ((branches as BranchScope[])?.[0]?.[AccessorProp.StartNode]) {
      return;
    }
    signal(scope, value);
  };
}
