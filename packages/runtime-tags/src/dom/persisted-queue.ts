import { AccessorProp, type Scope } from "../common/types";
import { queueEffect } from "./queue";
import { _resume } from "./resume";

/** Patch-apply flag shared without retaining the applier in main bundles. */
export let updating: undefined | 0 | 1;
export { updating as _updating };
/** The apply's generation floor: scopes created during the apply carry
 * `Gen >= updatingGen` (see `applyGen` in dom/update). */
export let updatingGen = 0;

export function setUpdating(value: 0 | 1, gen?: number) {
  updating = value;
  if (gen !== undefined) updatingGen = gen;
}

/** Skips setup effects already carried by freshly created patch scopes. */
export function _script_update(id: string, fn: (scope: Scope) => void) {
  _resume(id, fn);
  return _script_shared(fn);
}

/** Marks effects that refresh matched scopes from request-derived globals. */
export function _script_refresh(id: string, fn: (scope: Scope) => void) {
  refreshEffects.add(fn);
  return _script_update(id, fn);
}

/** Registered effect fns the applier re-queues for matched scopes too. */
export const refreshEffects = new WeakSet<(scope: Scope) => void>();

/** Register-entry wrapper for effects already registered by the main module. */
export function _script_shared(fn: (scope: Scope) => void) {
  return (scope: Scope) => {
    if (!updating || (scope[AccessorProp.Gen] as number) < updatingGen) {
      queueEffect(scope, fn);
    }
  };
}
