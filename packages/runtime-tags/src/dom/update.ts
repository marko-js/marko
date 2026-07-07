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
import { _attr_input_checked_default } from "./controllable-input-checked";
import { _attr_input_value_default } from "./controllable-input-value";
import { _attr_details_or_dialog_open_default } from "./controllable-open";
import { _attr_select_value_default } from "./controllable-select";
import {
  _attr,
  _attr_class,
  _attr_style,
  _html,
  _text,
  _text_content,
} from "./dom";
import { run, runEffects, runId, setUpdating } from "./queue";
import { setParentBranch } from "./renderer";
import {
  _resume,
  getRegisteredWithScope,
  getUpdateRoot,
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
type UpdateFill =
  | ((
      ctx: (data: number | (Scope | number)[], registryId?: string) => unknown,
    ) => unknown)
  // Effect entries ("registryId scopeId …", patch-local scope ids): executed
  // only against scopes freshly created during the apply — a matched live
  // scope's effects already ran at mount.
  | string
  // Fragment frame entries: a content-hop branch delivered as resumable
  // HTML (see designs/persisted-pages-at-scale.md).
  | FragmentEntry
  | BoundaryBodyEntry;

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
  fills: UpdateFill[] | Exclude<UpdateFill, FragmentEntry | BoundaryBodyEntry>,
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

  // A bare (non-array) frame value can only be a merge fill or effect entry;
  // fragment entries always arrive inside a frame array off the wire.
  return (
    fills:
      UpdateFill[] | Exclude<UpdateFill, FragmentEntry | BoundaryBodyEntry>,
  ) => {
    const effectEntries: string[] = [];
    const bodyEntries: BoundaryBodyEntry[] = [];
    for (const fill of Array.isArray(fills) ? fills : [fills]) {
      if (typeof fill === "string") {
        effectEntries.push(fill);
      } else if (Array.isArray(fill)) {
        if (fill[1] === 0) {
          // Boundary bodies apply once the update window opens below.
          bodyEntries.push(fill as BoundaryBodyEntry);
        } else {
          // Stash the fragment on its anchor's patch scope under the
          // reserved "P" prefix; the hop's merge consumes it (see
          // `_update_dynamic`).
          getScope(fill[0])[FRAGMENT_PREFIX + fill[1]] = fill;
        }
      } else {
        const scopes = fill(serializeContext);
        if (Array.isArray(scopes)) applyScopes(scopes);
      }
    }

    setUpdating(1);
    activePairs = pairs;
    activeUpdate = { getScope, stamp };
    // Boundary merges may flush mid-apply (`_update_branch`'s retry for
    // same-frame fresh creations), advancing `runId` -- "created during
    // this apply" means any run window from here on.
    applyGen = runId;
    try {
      // Boundary bodies first: their fills already landed above (shared
      // objects -- the body's scopes ARE its patch scopes), and the merge
      // dispatch below may fill into scopes the body's markup creates.
      for (const body of bodyEntries) {
        applyBoundaryBody(
          getScope(body[0]) as BranchScope,
          body[2],
          body[3],
          body[4],
        );
      }

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
 * attach it at its anchor, then fill it. Attached (or non-await) branches
 * just fill; an absent live branch sparse-skips.
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
  if (bodyMerge) bodyMerge(patchBranch, liveBranch);
}

export function _update_content(contentId: string, merge: UpdateMerge) {
  _resume(contentId + UPDATE_MERGE_SUFFIX, merge);
}

export function _update_dynamic(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
  replay?: UpdateSignal,
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
  if (merge && patchBranch && liveBranch) {
    merge(patchBranch, liveBranch);
  }
}

// ---- Fragment frames --------------------------------------------------
// (see designs/persisted-pages-at-scale.md). A fragment delivers a
// content-hop branch as resumable HTML -- values baked into the markup,
// resume markers and branch brackets included -- while its scope DATA rides
// the ordinary fills in the same patch id space. Applying is therefore:
// parse, walk the markers binding DOM refs onto the patch scopes (which
// join the live scope tree as-is), insert at the hop's anchor, swap the
// branch bookkeeping. Reserved accessor prefix "P" carries the entry on the
// anchor's patch scope (see common/accessor.ts).
const FRAGMENT_PREFIX = "P";

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
 * body, arriving after the fragment frame that shipped the placeholder.
 * The body's markup walks like a fragment (its scope data already landed
 * through the frame's fills; the await's own end bracket binds the body
 * branch onto the try branch) and swaps in where the placeholder branch
 * sits. No-ops if the try branch is gone (a later navigation already
 * swapped the subtree away) or its placeholder was already dismissed.
 */
function applyBoundaryBody(
  tryBranch: BranchScope,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
) {
  const placeholderBranch = tryBranch[AccessorProp.PlaceholderBranch];
  if (!placeholderBranch || !tryBranch[AccessorProp.Gen]) return;
  tryBranch[AccessorProp.PlaceholderBranch] = 0;
  // Give the body's dom-less scopes (state/tag-variable wiring only -- the
  // markup walk below can't reach them) live identity, exactly as the
  // fragment path stamps `fragment[4]` (see `_update_dynamic`). Without this
  // their payload effects are generation-gated out and `$global` reads on
  // them see undefined.
  stampFragmentScopes(scopeIds);
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const { touched, orphans } = walkFragment(tpl.content, markerPrefix);
  placeholderBranch[AccessorProp.StartNode].parentNode!.insertBefore(
    tpl.content,
    placeholderBranch[AccessorProp.StartNode],
  );
  removeAndDestroyBranch(placeholderBranch);
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
