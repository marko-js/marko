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
import { type Accessor, AccessorProp, type Scope } from "../common/types";
import { _for_of } from "./control-flow";
import { _html } from "./dom";
import { run } from "./queue";
import {
  _resume,
  getRegisteredWithScope,
  getUpdateRoot,
  registeredValues,
} from "./resume";

type UpdateSignal = (scope: Scope, value: unknown) => void;
type UpdateFill = (
  ctx: (data: number | (Scope | number)[], registryId?: string) => unknown,
) => unknown;

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
  fills: UpdateFill | UpdateFill[],
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
          ? (getRegisteredWithScope(registryId, getScope(data)) as unknown)
          : getScope(data)
        : applyScopes(data),
    // Fills reference registered values directly as `_._[id]`.
    { _: registeredValues },
  );

  return (fills: UpdateFill | UpdateFill[]) => {
    for (const fill of Array.isArray(fills) ? fills : [fills]) {
      const scopes = fill(serializeContext);
      if (Array.isArray(scopes)) applyScopes(scopes);
    }

    merge(getScope(1), liveRoot!);
    // Merges queue renders (intersections, closure fan-out, branch setups);
    // flush synchronously so each frame settles as one batch.
    run();
  };
}

// Content-section merges register under the section's content id plus this
// suffix (a character that cannot appear in generated register ids), so
// dynamic tags can dispatch a merge from the renderer id the server
// serialized (`ConditionalRenderer:<accessor>` in the patch).
const UPDATE_MERGE_SUFFIX = "!";
type UpdateMerge = (patch: Scope, live: Scope) => void;

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

  if (replay && live[rendererKey] !== rendererId) {
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
  }

  const merge = getRegisteredWithScope(rendererId + UPDATE_MERGE_SUFFIX) as
    | UpdateMerge
    | undefined;
  const liveBranch = live[branchKey] as Scope | undefined;
  if (merge && patchBranch && liveBranch) {
    merge(patchBranch, liveBranch);
  }
}

// Unsafe-html holes replace their DOM range unconditionally, so a streamed
// re-dispatch (each frame re-runs the root merge) must consume the patch key
// after applying -- a leaf value nothing else descends through.
export function _update_html(
  live: Scope,
  patch: Scope,
  accessor: string | number,
) {
  _html(live, patch[accessor], accessor as Accessor);
  delete patch[accessor];
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
    signal(scope, value);
  };
}
