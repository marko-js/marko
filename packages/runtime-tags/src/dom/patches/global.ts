import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { queueEffect, queueRender, runId } from "../queue";
import { _resumed } from "../resume";
import { type Signal, type SignalFn, subscribeToScopeSet } from "../signals";
import { applyGlobals } from "./apply";
import { patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Globals]: Record<string, unknown>;
  }
}

// Joins reading a `$global` key, by key then join id; their scopes
// subscribe on the globals object (scope 0).
export const globalJoins: Record<string, Record<string, SignalFn>> = {};
// The nested paths a join reads under a key, by key then join id: a changed key
// re-runs the join only when one of them changed value.
let globalPaths: undefined | Record<string, Record<string, string[][]>>;

export function _fill_global_join<T extends SignalFn>(
  key: string,
  id: string,
  join: T,
): T {
  // A retained join brings the patcher that re-runs it.
  patchers[PatchKey.Globals] = patchGlobals;
  return ((globalJoins[key] ??= {})[id] = (scope: Scope) => {
    join(scope);
    subscribeToScopeSet(
      scope[AccessorProp.Global] as unknown as Scope,
      AccessorPrefix.ClosureScopes + id,
      scope,
    );
  }) as unknown as T;
}

// A join reading nested paths under `key`, each relative to it.
export function _fill_global_path_join<T extends SignalFn>(
  key: string,
  id: string,
  join: T,
  ...paths: string[][]
): T {
  ((globalPaths ||= {})[key] ||= {})[id] = paths;
  return _fill_global_join(key, id, join);
}

// Like `_script`, but runs once per run however many triggers reach it, and a
// change to one of its `$global` keys re-runs it on every scope it ran on.
export function _fill_global_script(
  id: string,
  fn: (scope: Scope) => void,
  ...keys: string[]
) {
  const effect = (_resumed[id] = (scope: Scope) => {
    const ran = (scope[AccessorProp.GlobalScriptRuns] ??= {});
    if (ran[id] !== runId) {
      ran[id] = runId;
      fn(scope);
    }
    subscribeToScopeSet(
      scope[AccessorProp.Global] as unknown as Scope,
      AccessorPrefix.ClosureScopes + id,
      scope,
    );
  });
  const queue = (scope: Scope) => queueEffect(scope, effect);
  for (const key of keys) _fill_global_join(key, id, queue);
  return queue;
}

// Like `_fill_global_script` for a script that also reads nested paths, by key:
// not pure, so its paths stay registered whenever its script does.
export function _fill_global_path_script(
  id: string,
  fn: (scope: Scope) => void,
  paths: Record<string, string[][]>,
  ...keys: string[]
) {
  const queue = _fill_global_script(id, fn, ...keys);
  for (const key in paths)
    _fill_global_path_join(key, id, queue, ...paths[key]);
  return queue;
}

// A page with `$global` joins: a key the patch changes queues its joins on each
// subscribed live scope, a join reading nested paths only if one changed value.
function patchGlobals(
  live: Scope,
  key: string,
  value: Record<string, unknown>,
) {
  const keys: string[] = [];
  for (const key in value) {
    if (
      (live[AccessorProp.Global] as unknown as Record<string, unknown>)[key] !==
      value[key]
    ) {
      keys.push(key);
    }
  }
  // An opaque `$global` read joins as `""`: any changed key re-runs it.
  if (keys.length) keys.push("");
  for (const key of keys) {
    for (const id in globalJoins[key]) {
      if (
        !globalPaths?.[key]?.[id] ||
        globalPaths[key][id].some(
          (path) =>
            readPath(
              (live[AccessorProp.Global] as unknown as Record<string, unknown>)[
                key
              ],
              path,
            ) !== readPath(value[key], path),
        )
      ) {
        (
          (live[AccessorProp.Global] as unknown as Scope)[
            (AccessorPrefix.ClosureScopes + id) as keyof Scope
          ] as Set<Scope> | undefined
        )?.forEach(
          (scope) =>
            scope[AccessorProp.Gen] &&
            queueRender(scope, globalJoins[key][id] as Signal<unknown>, -1),
        );
      }
    }
  }
  applyGlobals(live, key, value);
}

function readPath(value: unknown, path: string[]) {
  for (const key of path) {
    value = (value as Record<string, unknown> | undefined)?.[key];
  }
  return value;
}
