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
import { AccessorProp, type Scope } from "../common/types";
import { _for_of } from "./control-flow";
import { run } from "./queue";
import { getRegisteredWithScope, getUpdateRoot } from "./resume";

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
  const serializeContext = (
    data: number | (Scope | number)[],
    registryId?: string,
  ) =>
    typeof data === "number"
      ? registryId
        ? (getRegisteredWithScope(registryId, getScope(data)) as unknown)
        : getScope(data)
      : applyScopes(data);

  for (const fill of Array.isArray(fills) ? fills : [fills]) {
    const scopes = fill(serializeContext);
    if (Array.isArray(scopes)) applyScopes(scopes);
  }

  merge(getScope(1), liveRoot!);
  // Merges queue renders (intersections, closure fan-out, branch setups);
  // flush synchronously so the update settles as one batch.
  run();
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
