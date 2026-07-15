// The compiled-merge dispatch family for persisted (single-page
// server-first) updates, driven by `createUpdate` in ./update.ts. Update
// entries are compiled merge functions that share the main template module's
// compiled pieces through the resume registry rather than duplicating them:
// - value/conditional signals are registered with `_var_resume` by persisted
//   dom builds and invoked here via `_update_signal`.
// - request-derived `<for>`s never client-construct: fresh keys build from
//   resumable fragments (`_update_for_keyed` uses a fragment-only keyed
//   diff -- see `createFragmentBranch` in dom/update-fragment.ts), matched
//   keys carrying a fragment swap in place, and everything else
//   (stable/positional loops, matched or reordered keyed items) is a plain
//   sparse merge.
//
// This module also owns the per-navigation applier context the dispatch
// reads at call time (apply pairing, fragment context, parked/pending
// tables); `createUpdate` wires it through `beginApply`/`endApply` below and
// resets the exported parked tables per navigation.
import { decodeAccessor } from "../common/helpers";
import { toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type EncodedAccessor,
  type Scope,
} from "../common/types";
import { _for_keyed, attachAwaitBranch } from "./control-flow";
import {
  _attr_details_or_dialog_open_default,
  _attr_input_checked_default,
  _attr_input_value_dynamic_default,
  _attr_select_value_default,
} from "./controllable";
import {
  _attr,
  _attr_class,
  _attr_style,
  _html,
  _text,
  _text_content,
} from "./dom";
import { run, runId, setUpdating } from "./queue";
import {
  _resume,
  enableReadyUpdates,
  getRegisteredWithScope,
  isReady,
  readyPersisted,
  registeredValues,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";
import {
  applyBoundaryBody,
  applyFragment,
  BOUNDARY_SITE_PREFIX,
  createFragmentBranch,
  type FragmentContext,
} from "./update-fragment";

type UpdateSignal = (scope: Scope, value: unknown) => void;
type UpdateMerge = (patch: Scope, live: Scope) => void;

export type FragmentEntry = [
  anchorScopeId: number,
  accessor: string,
  markerPrefix: string,
  html: string,
  // Ids of every scope the fragment serialized -- stamped into the live tree
  // so dom-less scopes (no marker reaches them) get live identity.
  scopeIds?: number[],
];
// A `<try>` placeholder boundary's body, delivered after its placeholder
// shipped (inside a fragment entry, or proven still showing by the echo);
// written by `flushScript`'s patch-mode reorder branch in html/writer.ts and
// swapped in where the placeholder branch sits. The 0 in the accessor slot
// discriminates from FragmentEntry.
export type BoundaryBodyEntry = [
  tryBranchId: number,
  kind: 0,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
];

/** Starts a persisted lazy child when its keyed resume batch arrives. */
export function _load_ready(readyId: string, load: () => Promise<unknown>) {
  _resume(readyId, () => {
    load().then(
      () => readyPersisted(readyId),
      () => 0,
    );
  });
}

/**
 * Emitted at the top of compiled merge functions for sections with effects:
 * records the patch → live scope pairing so payload effect entries (which
 * carry patch-local scope ids) can resolve their live scope.
 */
export function _update_pair(patch: Scope, live: Scope) {
  activePairs?.set(patch, live);
}

// Content-section merges register under the section's content id plus this
// suffix (a character that cannot appear in generated register ids), so
// dynamic tags can dispatch a merge from the renderer id the server
// serialized (`ConditionalRenderer:<accessor>` in the patch).
const UPDATE_MERGE_SUFFIX = "!";

/**
 * Single-branch boundary (`<await>`/`<try>` body) dispatch. When the live
 * branch is a detached await -- a fresh subtree's await whose promise compute
 * was skipped while updating -- the body's frame is the resolution: attach it
 * at its anchor, then fill it. A stashed boundary-body entry (see
 * `createUpdate`/`PENDING_BODY_KEY`) applies instead of `bodyMerge` and is
 * consumed so a re-dispatch (a streamed frame re-applying, or this function's
 * own same-frame retry) never double-applies it. Otherwise attached (or
 * non-await) branches just fill; an absent live branch sparse-skips.
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
  // A boundary body may only replace a boundary that is still pending --
  // one of the three shapes a first apply can legitimately see: a
  // fragment-walked placeholder (`PlaceholderBranch`, the "!" accessor), an
  // echo-proven document placeholder (the site stash is still a string --
  // its content is the try branch's current children), or a detached fresh
  // await (read before the attach below clears it).
  const bodyPending =
    liveBranch[AccessorProp.DetachedAwait] ||
    liveBranch[AccessorProp.PlaceholderBranch] ||
    typeof live[BOUNDARY_SITE_PREFIX + (accessor as string)] === "string";
  if (liveBranch[AccessorProp.DetachedAwait]) {
    attachAwaitBranch(live, accessor as string, liveBranch);
  }
  const bodyEntry = ((patchBranch as BranchScope)[PENDING_BODY_KEY] ||
    liveBranch[PENDING_BODY_KEY]) as BoundaryBodyEntry | undefined;
  if (bodyEntry) {
    delete (patchBranch as BranchScope)[PENDING_BODY_KEY];
    delete liveBranch[PENDING_BODY_KEY];
    if (!bodyPending) {
      // A settled boundary never receives a body (matched boundaries update
      // through ordinary fills), so this entry is a stale duplicate --
      // re-applying it would re-parse the markup over the live subtree,
      // detaching its bound scopes. Fail loudly; the router falls back to a
      // full navigation.
      throw new Error(
        MARKO_DEBUG
          ? "A persisted update delivered a boundary body for a <try> that already settled; the update cannot re-apply it."
          : "update diverged",
      );
    }
    applyBoundaryBody(
      activeUpdate!,
      liveBranch,
      bodyEntry[2],
      bodyEntry[3],
      bodyEntry[4],
      bodyEntry[0],
    );
    // The boundary is no longer pending: flip the "still showing its
    // placeholder" stash falsy so the next navigation's echo skips this site
    // and the update goes back to ordinary fills (mirrors the server tombstone
    // a document render writes when its own body resolves).
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
 * lazy chunk, registered under a register id both sides compute
 * (`<childTemplateId>` + its root `update` key, a compile constant). Loaded
 * child: dispatch directly. Still loading: park the (patch, live, id) triple
 * and replay when a load completes (the `enableReadyUpdates` hook, installed
 * on first park) -- request-derived values ride every patch, so the newest
 * parked patch per live scope is complete and supersedes earlier ones.
 */
export function _update_load(patch: Scope, live: Scope, mergeId: string) {
  // A fragment-constructed lazy child (patch IS live -- fragment subtree
  // scopes are shared objects) has nothing to merge: the fragment baked its
  // rendered values into the markup. Same suppression the typed `PatchChild:`
  // link applies inside fragment subtrees -- without it, a registered child
  // merge runs against a scope that is not a patch (undefined node-ref reads).
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
    installReadyUpdates();
    pendingLoadUpdates.push([patch, live, mergeId]);
  }
}

export function _update_dynamic(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
) {
  const rendererId = patch[rendererKey] ?? live[rendererKey];
  if (rendererId === 0) {
    const liveBranch = live[branchKey] as BranchScope | undefined;
    if (liveBranch) {
      removeAndDestroyBranch(liveBranch);
      live[branchKey] = undefined;
    }
    live[rendererKey] = 0;
    return;
  }
  if (typeof rendererId !== "string") return;
  const patchBranch = patch[branchKey] as Scope | undefined;
  const accessor = branchKey.slice(AccessorPrefix.BranchScopes.length);
  const fragment = patch[FRAGMENT_PREFIX + accessor] as
    FragmentEntry | undefined;

  if (fragment && patchBranch) {
    // The branch arrived as a fragment entry: swap it in by inserting the
    // server-rendered subtree instead of client-constructing it from a
    // registered renderer graph. Consume the entry and stop: its values are
    // baked into the HTML (the writer withholds a fragment branch's sparse
    // fills) and its resume data has initialized the new scopes, so the entry
    // is authoritative even when the live renderer already matches -- an
    // omitted or malformed possession echo makes the server ship fragments
    // for sites the page in fact holds. Later async frames contain no
    // fragment entry and take the ordinary merge path below.
    delete patch[FRAGMENT_PREFIX + accessor];
    applyFragment(
      activeUpdate!,
      live,
      accessor,
      patchBranch as BranchScope,
      fragment[2],
      fragment[3],
      fragment[4],
    );
    live[rendererKey] = rendererId;
    return;
  } else if (live[rendererKey] !== rendererId) {
    // Divergence is fragment-delivered, so a mismatch without a fragment
    // entry (eg a same-route
    // navigation changed a dynamic tag's renderer) cannot apply. Fail loudly
    // -- the router falls back to a full navigation -- rather than dispatching
    // the new content's merge against the stale branch. A mismatch with no
    // live branch has nothing to go stale: sparse-skip.
    if (live[branchKey]) {
      throw new Error(
        MARKO_DEBUG
          ? `A persisted update changed a dynamic tag's renderer (${rendererId}) without a fragment entry; persisted pages do not construct divergent content client-side.`
          : "update diverged",
      );
    }
    return;
  }

  const liveBranch = live[branchKey] as Scope | undefined;
  if (patchBranch && liveBranch) {
    if ((patchBranch as BranchScope)[AccessorProp.Renderer] === rendererId) {
      // A tag-name renderer (native-tag branch): the patch render stamps
      // the tag name onto the branch scope it links (html/dynamic-tag.ts),
      // so the discrimination is structural -- a lazy component whose
      // optimized register id happens to be a valid element localName can
      // never take this path, and a colliding registered merge can never
      // dispatch against a native branch. A native branch registers no
      // merge, and its body's content hop is runtime-created by the native
      // wrapper, so no compiled merge line exists at any level. Descend
      // generically: place the branch scope's typed captures (dynamic attrs
      // on the element), then recurse into the nested hop through the same
      // renderer-id-keyed link.
      _update_scope(patchBranch, liveBranch);
      for (const key in patchBranch) {
        if (
          key.length > AccessorPrefix.ConditionalRenderer.length &&
          key.slice(0, AccessorPrefix.ConditionalRenderer.length) ===
            AccessorPrefix.ConditionalRenderer &&
          (typeof patchBranch[key] === "string" || patchBranch[key] === 0)
        ) {
          _update_dynamic(
            patchBranch,
            liveBranch,
            key,
            AccessorPrefix.BranchScopes +
              key.slice(AccessorPrefix.ConditionalRenderer.length),
          );
        }
      }
      return;
    }
    const merge = getRegisteredWithScope(rendererId + UPDATE_MERGE_SUFFIX) as
      UpdateMerge | undefined;
    if (merge) {
      merge(patchBranch, liveBranch);
    } else {
      // The matching renderer is a lazy component whose update merge has not
      // registered yet. Keep only the newest patch for this live branch and
      // replay it when the module declares ready.
      for (const pending of pendingDynamicUpdates) {
        if (pending[1] === liveBranch && pending[2] === rendererId) {
          pending[0] = patchBranch;
          return;
        }
      }
      installReadyUpdates();
      pendingDynamicUpdates.push([patchBranch, liveBranch, rendererId]);
    }
  }
}

/**
 * A request-derived `<if>`'s update dispatch (compiled from `core/if.ts`'s
 * "if" update merge): the branch outcome itself never client-constructs.
 * The SAME branch as the live scope's dispatches its content merge by
 * index -- an ordinary sparse patch, no user code. A CHANGED branch applies
 * a resumable fragment (see `applyFragment`) instead of building it from a
 * client-registered renderer graph, mirroring `_update_dynamic`'s hop
 * handling; a mismatch with no fragment entry fails loudly rather than
 * replaying content against the stale branch.
 */
export function _update_if(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
  branchMerges?: (UpdateMerge | 0)[],
) {
  const newBranch = patch[rendererKey] as number;
  if (typeof newBranch !== "number") return;
  const patchBranch = patch[branchKey] as Scope | undefined;
  const liveBranch = live[branchKey] as Scope | undefined;
  const liveBranchIndex =
    (live[rendererKey] as number) ?? (liveBranch ? 0 : -1);

  const accessor = branchKey.slice(AccessorPrefix.BranchScopes.length);
  const fragment = patch[FRAGMENT_PREFIX + accessor] as
    FragmentEntry | undefined;
  if (fragment && patchBranch) {
    // The branch arrived as a fragment entry: swap it in by inserting the
    // server-rendered subtree instead of client-constructing it from a
    // registered renderer graph. Consume the entry and stop -- its values
    // are baked into the html (the writer withholds a fragment branch's
    // sparse fills) and its resume data has initialized the new scopes, so
    // the entry is authoritative even when the live branch already matches:
    // an omitted or malformed possession echo makes the server ship
    // fragments for branches the page in fact holds.
    delete patch[FRAGMENT_PREFIX + accessor];
    applyFragment(
      activeUpdate!,
      live,
      accessor,
      patchBranch as BranchScope,
      fragment[2],
      fragment[3],
      fragment[4],
    );
    live[rendererKey] = newBranch;
    return;
  }

  if (liveBranchIndex !== newBranch) {
    if (newBranch === -1) {
      // The outcome went from a real branch to none: nothing to deliver
      // (no fragment ever ships for a removal), so just tear down the
      // stale live branch -- the same effect `setConditionalRenderer`'s
      // client-driven path has for a state-owned conditional.
      if (liveBranch) {
        removeAndDestroyBranch(liveBranch as BranchScope);
        live[branchKey] = undefined;
      }
      live[rendererKey] = newBranch;
      return;
    }
    // Divergence is fragment-delivered, so a mismatch without a fragment
    // entry cannot apply -- fail loudly (the router falls back to a full
    // navigation) rather than dispatching the new content's merge against
    // the stale branch. A mismatch with no live branch has nothing to go
    // stale: adopt the new outcome so a later navigation compares right.
    if (liveBranch) {
      throw new Error(
        MARKO_DEBUG
          ? "A persisted update changed an <if> branch without a fragment entry; persisted pages do not construct divergent content client-side."
          : "update diverged",
      );
    }
    live[rendererKey] = newBranch;
    return;
  }

  live[rendererKey] = newBranch;
  const merge = branchMerges?.[newBranch];
  if (patchBranch && liveBranch && merge) {
    merge(patchBranch, liveBranch);
  }
}

// ---- Fragment entries ---------------------------------------------------
// A fragment delivers the diverging branch at a site -- an `<if>` branch, a
// keyed `<for>` item, a dynamic-tag hop, or a native-tag branch -- as
// resumable HTML, captured by `_fragment` in html/writer.ts (grammar in
// designs/persisted-pages-wire-format.md, "Fragment entries"): values baked
// into the markup, resume markers and branch brackets included, while its
// scope data rides the ordinary fills in the same patch id space. Applying is
// therefore: parse, walk the markers binding DOM refs onto the patch scopes
// (which join the live scope tree as-is), insert at the site's anchor, swap
// the branch bookkeeping. Reserved accessor prefix "P" carries the entry on
// the anchor's patch scope (stashed there by `createUpdate`'s frame loop in
// ./update.ts).
export const FRAGMENT_PREFIX = "P";

// A boundary-body entry stashed on the try's own patch scope (the object
// `_update_branch`'s `patchBranch` resolves to) so the compiled branch
// dispatch can apply it once pairing resolves the live branch -- see
// `applyBoundaryBody`. Bare reserved token (not a letter, so it never collides
// with an `AccessorProp`/`AccessorPrefix` key regardless of key length).
export const PENDING_BODY_KEY = "!";

// The typed patch-key prefixes hole captures serialize under: written by
// `_hole_value`/`_update_child` in html/writer.ts with keys built from the
// translator's `getPatch*Prefix` helpers (get-accessor-char.ts; reservations
// in common/accessor.ts). Optimized keys are one char + accessor, so the bare
// single-char scope props that share those letters (`Q`/`R`/`N` in
// `AccessorProp`) are excluded by key length.
const HOLE_PREFIX = MARKO_DEBUG ? "PatchHole:" : "Q";
const HTML_PREFIX = MARKO_DEBUG ? "PatchHtml:" : "R";
const ATTR_PREFIX = MARKO_DEBUG ? "PatchAttr:" : "N";
const CHILD_PREFIX = MARKO_DEBUG ? "PatchChild:" : "S";

/**
 * The generic hole applier: places every typed hole capture a patch scope
 * carries against its paired live scope -- text holes (`PatchHole:`),
 * unsafe-html holes (`PatchHtml:`), attr holes/controllables
 * (`PatchAttr:<name>:<accessor>`) -- and descends into update-generic child
 * scopes through their typed links (`PatchChild:<accessor>`, serialized by
 * `_update_child` in patch renders only), so server-only compositions need no
 * compiled dispatch at any level. Controllable semantics are recovered from
 * the live element: on their tags the controllable names always route through
 * the controllable carve-out, so `value` on an input is never a plain attr
 * hole. Fragment subtrees are inert here: their captures and child links are
 * suppressed server-side (values baked into the markup), so the shared
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
            _attr_input_value_dynamic_default(live, accessor, value);
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
// after applying. The patch key (`PatchHtml:<accessor>`) is distinct from the
// node accessor the DOM range lives under.
function _update_html(
  live: Scope,
  patch: Scope,
  key: string,
  accessor: string | number,
) {
  _html(live, patch[key], accessor as Accessor);
  delete patch[key];
}

/**
 * Applies a seed-mode state value, only into scopes created during this apply
 * (fresh subtrees cannot compute state whose initializers live behind
 * server-only expressions -- the seed IS the initial value), through the
 * binding's registered signal so downstream derivations recompute. Matched
 * (pre-existing) scopes keep their live state untouched.
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

/**
 * A `<for>` whose branch SET is compiler-proven to never change on its own
 * (a stable, render-once list; changing lists dispatch through
 * `_update_for_keyed`): dispatch reduces to
 * a plain index-paired merge -- matched items keep their live DOM, only
 * their content changes, no client construction. A patch/live branch count
 * mismatch would mean that proof was wrong, so this fails loudly (the router
 * falls back to a full navigation) instead of pairing unrelated scopes by
 * position.
 */
export function _update_for(
  patchBranches: BranchScope[] | BranchScope,
  liveBranches: BranchScope[] | BranchScope | undefined,
  merge: ((patchBranch: Scope, liveBranch: Scope) => void) | 0,
) {
  const patch = toArray(patchBranches);
  const live = toArray(liveBranches);
  // Fragment self-dispatch (see `_update_for_keyed`): a scope fragment-
  // created this same apply is its own live scope, so its branch list is
  // already the real (walker-bound) live branches -- nothing to reconcile.
  if (patch[0]?.[AccessorProp.StartNode]) {
    return;
  }
  if (patch.length !== live.length) {
    throw new Error(
      MARKO_DEBUG
        ? "A persisted update changed a stable <for> loop's item count; persisted pages expected this list to never add or remove items on its own."
        : "update diverged",
    );
  }
  if (merge) {
    for (let i = 0; i < patch.length; i++) {
      merge(patch[i], live[i]!);
    }
  }
}

/**
 * A request-derived `<for>`'s update dispatch (compiled from
 * `core/for.ts`'s "for" update merge): matched items (their key was already
 * live, per the possession echo -- see `_have` in dom/update-fragment.ts)
 * dispatch their content merge through the fragment-only keyed diff
 * (`_for_keyed` in dom/control-flow.ts) -- no client construction. A
 * fragment entry is authoritative for matched and fresh keys alike: a NEW
 * key (or positional index) joins as a resumable fragment
 * (`createFragmentBranch`), and a matched key carrying one is swapped for
 * the fragment subtree (the server withheld its sparse fills). A fresh key
 * with no fragment entry fails loudly rather than fabricating an empty
 * branch. Removed/reordered keys (and positional indices) need no
 * construction at all -- the client already has their DOM, so the diff just
 * moves/destroys it.
 */
export function _update_for_keyed(
  nodeAccessor: EncodedAccessor,
  merge: ((patchBranch: Scope, liveBranch: Scope) => void) | 0,
): UpdateSignal {
  const accessor = (
    MARKO_DEBUG ? nodeAccessor : decodeAccessor(nodeAccessor as number)
  ) as string;
  const fragmentKey = FRAGMENT_PREFIX + accessor;
  const signal = _for_keyed(
    nodeAccessor,
    (patchBranch, liveBranch) => {
      const entry = (patchBranch as Scope)[fragmentKey] as
        FragmentEntry | undefined;
      if (entry) {
        // The server shipped this matched item as a fragment (an omitted or
        // malformed possession echo hides live keys), so its sparse fills
        // were withheld. The fragment is authoritative -- the same rule as
        // `_update_dynamic`/`_update_if` -- so the live branch is swapped for
        // the fragment subtree; client state in the item is replaced, exactly
        // as in any fresh fragment branch.
        delete (patchBranch as Scope)[fragmentKey];
        return createFragmentBranch(
          activeUpdate!,
          patchBranch as BranchScope,
          liveBranch[AccessorProp.Owner] as Scope,
          entry[2],
          entry[3],
          entry[4],
        );
      }
      if (merge) merge(patchBranch as Scope, liveBranch as Scope);
    },
    (_key, args, _global, parentScope) => {
      const patchItem = args[0] as Scope;
      const entry = patchItem[fragmentKey] as FragmentEntry | undefined;
      if (!entry) {
        throw new Error(
          MARKO_DEBUG
            ? "A persisted update added a keyed <for> item without a fragment entry; persisted pages do not construct new loop items client-side."
            : "update diverged",
        );
      }
      delete patchItem[fragmentKey];
      return createFragmentBranch(
        activeUpdate!,
        patchItem as BranchScope,
        parentScope,
        entry[2],
        entry[3],
        entry[4],
      );
    },
  );
  return (scope, value) => {
    // Fragment subtrees share one object between patch and live scopes, so a
    // fragment-built loop's self-dispatch hands us the walker-bound live
    // branches as the "patch" list. There is nothing to reconcile -- and
    // reconciling would rebuild every branch from scratch against patch
    // scopes. A live branch is recognizable by its bound start node;
    // fills-path patch branches are plain data objects.
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

// ---- Per-navigation applier context ------------------------------------
// Owned here (next to the dispatch that reads it at call time) and wired by
// `createUpdate` in ./update.ts, which owns the frame loop.

/**
 * Opens one frame's apply window: installs the pairing/context the dispatch
 * family reads, and captures the apply-generation floor ("created during
 * this apply" -- boundary merges may flush mid-apply, advancing `runId`, so
 * the floor means any run window from here on). Returns that floor for the
 * caller's own effect gating; `endApply` closes the window. Also records the
 * navigation's pairing/context (idempotent across a navigation's frames) so
 * parked-entry replays (lazy modules declaring ready), which run outside any
 * apply frame but dispatch the same compiled merges, can reinstall it -- see
 * `installReadyUpdates`.
 */
export function beginApply(pairs: Map<Scope, Scope>, update: FragmentContext) {
  navPairs = activePairs = pairs;
  navUpdate = activeUpdate = update;
  return (applyGen = runId);
}

export function endApply() {
  activePairs = activeUpdate = undefined;
}

let activePairs: Map<Scope, Scope> | undefined;
let activeUpdate: FragmentContext | undefined;
let applyGen = 0;
// The newest navigation's pairing/context, reinstalled around parked-entry
// replays (see `installReadyUpdates`). Parked state is cleared when a new
// navigation's `createUpdate` starts (before its first frame parks
// anything), so parked entries always belong to the navigation these point
// at.
let navPairs: Map<Scope, Scope> | undefined;
let navUpdate: FragmentContext | undefined;

// ---- Parked/pending tables and their ready-flush hook -------------------
// The three tables are exported for `createUpdate`'s per-navigation reset;
// only this module pushes into or drains them.

export const pendingLoadUpdates: [
  patch: Scope,
  live: Scope,
  mergeId: string,
][] = [];
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

export const pendingDynamicUpdates: [
  patch: Scope,
  live: Scope,
  rendererId: string,
][] = [];
const flushPendingDynamicUpdates = () => {
  for (let i = pendingDynamicUpdates.length; i--;) {
    const [patch, live, rendererId] = pendingDynamicUpdates[i];
    const merge = registeredValues[rendererId + UPDATE_MERGE_SUFFIX] as
      UpdateMerge | undefined;
    if (merge && live[AccessorProp.Gen]) {
      pendingDynamicUpdates.splice(i, 1);
      merge(patch, live);
    } else if (!live[AccessorProp.Gen]) {
      pendingDynamicUpdates.splice(i, 1);
    }
  }
};

// Keyed resume batches parked until their lazy module declares ready (see
// `processBatch` in `createUpdate` -- each batch's fills replay through the
// apply that delivered it).
export interface ParkedReadyBatch {
  id: string;
  fills: unknown[];
  apply: (fill: unknown) => void;
}
export const parkedReadyBatches: ParkedReadyBatch[] = [];
const readyBatchDrained = (dep: string) =>
  isReady(dep) && !parkedReadyBatches.some((batch) => batch.id === dep);
// Drains a batch's fills in order, stopping at an unmet deps marker: every
// named module must be ready with its own batches drained (a dep's data
// always flushes before an entry that names it, so drained means present).
// The remainder stays parked and replays through `ready()`.
export function drainBatchFills(
  batch: ParkedReadyBatch,
  apply: (fill: unknown) => void,
) {
  let count = 0;
  for (; count < batch.fills.length; count++) {
    const fill = batch.fills[count];
    if (Array.isArray(fill)) {
      if (!(fill as string[]).every(readyBatchDrained)) break;
    } else {
      apply(fill);
    }
  }
  batch.fills.splice(0, count);
  return count;
}
const flushParkedReadyBatches = () => {
  // Fixed point: draining one module's batch may unblock another's deps
  // marker (nested lazy modules), mirroring the document walker's ready
  // loop (`render.m` in dom/resume.ts).
  for (let progress: unknown = 1; progress;) {
    progress = 0;
    for (let i = 0; i < parkedReadyBatches.length; i++) {
      const batch = parkedReadyBatches[i];
      if (!isReady(batch.id)) continue;
      if (drainBatchFills(batch, batch.apply)) progress = 1;
      if (!batch.fills.length) parkedReadyBatches.splice(i--, 1);
    }
  }
};

// Installed on the first park, never at import time -- this module must stay
// free of import-time side effects so tree-shaking of the dom runtime is
// honest. A `ready()` that fires before anything parks has nothing to flush.
let readyUpdatesInstalled: undefined | 1;
export function installReadyUpdates() {
  if (!readyUpdatesInstalled) {
    readyUpdatesInstalled = 1;
    enableReadyUpdates(() => {
      setUpdating(1, runId);
      // Replayed merges dispatch the same compiled paths as an apply frame
      // (fragment/boundary appliers, `_update_pair`), so the owning
      // navigation's context must be live for them.
      activePairs = navPairs;
      activeUpdate = navUpdate;
      try {
        // Keyed batches first: parked lazy merges may read their patch data.
        flushParkedReadyBatches();
        flushPendingLoadUpdates();
        flushPendingDynamicUpdates();
        run();
      } finally {
        setUpdating(0);
        activePairs = activeUpdate = undefined;
      }
    });
  }
}
