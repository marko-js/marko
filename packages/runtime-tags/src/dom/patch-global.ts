import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { applyGlobals } from "./patch";
import { queueEffect, queueRender, runId } from "./queue";
import { _resumed, patchers } from "./resume";
import { type Signal, type SignalFn, subscribeToScopeSet } from "./signals";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Globals]: Record<string, unknown>;
  }
}

// Joins reading a `$global` key, by key then join id; their scopes
// subscribe on the globals object (scope 0).
export const globalJoins: Record<string, Record<string, SignalFn>> = {};

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

// Like `_script`, but runs once per run however many triggers reach it.
export function _fill_global_script(id: string, fn: (scope: Scope) => void) {
  const effect = (_resumed[id] = (scope: Scope) => {
    const ran = (scope[AccessorProp.GlobalScriptRuns] ??= {});
    if (ran[id] !== runId) {
      ran[id] = runId;
      fn(scope);
    }
  });
  return (scope: Scope) => queueEffect(scope, effect);
}

// A page with `$global` joins: a changed key queues its joins for every
// subscribed live scope (the base patcher marked the change).
function patchGlobals(
  live: Scope,
  key: string,
  value: Record<string, unknown>,
) {
  applyGlobals(live, key, value);
  const keys: string[] = [];
  for (const key in value) {
    if (
      (live[AccessorProp.Global] as unknown as Scope)[
        AccessorProp.PatchChanged
      ]?.[key] === runId
    ) {
      keys.push(key);
    }
  }
  // An opaque `$global` read joins as `""`: any changed key re-runs it.
  if (keys.length) keys.push("");
  for (const key of keys) {
    for (const id in globalJoins[key]) {
      (
        (live[AccessorProp.Global] as unknown as Scope)[
          (AccessorPrefix.ClosureScopes + id) as keyof Scope
        ] as Set<Scope> | undefined
      )?.forEach(
        (scope) =>
          scope[AccessorProp.Gen] &&
          scope[AccessorProp.Gen] !== runId &&
          queueRender(scope, globalJoins[key][id] as Signal<unknown>, -1),
      );
    }
  }
}
