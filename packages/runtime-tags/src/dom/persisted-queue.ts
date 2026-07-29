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

/** Marks effects that refresh matched scopes from request-derived globals.
 * The registered fn arms its page-lifetime binding on EVERY run — resume,
 * construct, or wire delivery — so a scope whose group later holds (no
 * wire entry can resolve against it) still replays each apply. */
export function _script_refresh(id: string, fn: (scope: Scope) => void) {
  const armed = (scope: Scope) => {
    rememberRefresh(scope[AccessorProp.Global] as object, armed, scope);
    fn(scope);
  };
  refreshEffects.add(armed);
  _resume(id, armed);
  return _script_shared(armed);
}

/** Registered effect fns the applier re-queues for matched scopes too. */
export const refreshEffects = new WeakSet<(scope: Scope) => void>();

// Refresh bindings run once per apply for the page's lifetime: once a
// scope's group holds, no wire entry can reach it, but its
// navigation-retriggered effects (global re-seeds) must still re-run.
// Disconnected branches self-evict at replay.
const refreshBindings = new WeakMap<
  object,
  Map<(scope: Scope) => void, Set<Scope>>
>();

export function rememberRefresh(
  liveGlobal: object,
  fn: (scope: Scope) => void,
  scope: Scope,
) {
  let byFn = refreshBindings.get(liveGlobal);
  if (!byFn) refreshBindings.set(liveGlobal, (byFn = new Map()));
  let scopes = byFn.get(fn);
  if (!scopes) byFn.set(fn, (scopes = new Set()));
  scopes.add(scope);
}

export function replayRefresh(
  liveGlobal: object,
  ran: (fn: (scope: Scope) => void, scope: Scope) => boolean,
  queue: (fn: (scope: Scope) => void, scope: Scope) => void,
) {
  const byFn = refreshBindings.get(liveGlobal);
  if (byFn) {
    for (const [fn, scopes] of byFn) {
      for (const scope of scopes) {
        const branch = scope[AccessorProp.ClosestBranch];
        if (branch && !branch[AccessorProp.StartNode]?.isConnected) {
          scopes.delete(scope);
        } else if (!ran(fn, scope)) {
          queue(fn, scope);
        }
      }
    }
  }
}

/** Register-entry wrapper for effects already registered by the main module. */
export function _script_shared(fn: (scope: Scope) => void) {
  const wrapped = (scope: Scope) => {
    if (!updating || (scope[AccessorProp.Gen] as number) < updatingGen) {
      queueEffect(scope, fn);
    }
  };
  // The construct pass queues through this handle, bypassing the
  // updating-window suppression above (its wire entry was elided).
  wrapped._ = fn;
  return wrapped;
}

/** Lazy pre-built roots deliver their effects in keyed ready batches; the
 * construct pass must not queue them a second time. */
export let constructingLazy: undefined | 0 | 1;
export function setConstructingLazy(value: undefined | 0 | 1) {
  constructingLazy = value;
}

/** Queues a constructed scope's mount effect (its wire entry is elided on
 * fresh-construct serialization). */
export function _construct_effect(
  scope: Scope,
  wrapped: ReturnType<typeof _script_shared>,
) {
  if (!constructingLazy) {
    queueEffect(scope, (queued: Scope) => {
      // Live-scope guard (destroy zeroes `Gen`): a synchronous navigation
      // or state flip can remove this scope before the queue drains — a
      // removed scope's mount effect runs zero times.
      if (queued[AccessorProp.Gen]) wrapped._(queued);
    });
  }
}
