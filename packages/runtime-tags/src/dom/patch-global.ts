import { AccessorPrefix, AccessorProp, type Scope } from "../common/types";
import { queueEffect, runId } from "./queue";
import { _resume } from "./resume";
import { type Signal, type SignalFn, subscribeToScopeSet } from "./signals";

// Joins reading a `$global` key, by key then join id; their scopes
// subscribe on the globals object (scope 0).
export const globalJoins: Record<string, Record<string, SignalFn>> = {};

export function _global_join<T extends Signal<any>>(
  key: string,
  id: string,
  join: T,
): T {
  return ((globalJoins[key] ??= {})[id] = (scope: Scope, value?: unknown) => {
    (join as Signal<unknown>)(scope, value);
    subscribeToScopeSet(
      scope[AccessorProp.Global] as unknown as Scope,
      AccessorPrefix.ClosureScopes + id,
      scope,
    );
  }) as unknown as T;
}

// Like `_script`, but runs once per run however many triggers reach it.
export function _global_script(id: string, fn: (scope: Scope) => void) {
  const effect = _resume(id, (scope: Scope) => {
    const ran = (scope[AccessorProp.PatchChanged] ??= {});
    if (ran[id] !== runId) {
      ran[id] = runId;
      fn(scope);
    }
  });
  return (scope: Scope) => queueEffect(scope, effect);
}
