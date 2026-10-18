import { decodeAccessor } from "../../common/helpers";
import {
  AccessorPrefix,
  AccessorProp,
  ClosureScopesProp,
  ClosureSignalProp,
  type EncodedAccessor,
  PatchKey,
  type Scope,
} from "../../common/types";
import { noop } from "../load";
import { queueRender, runId } from "../queue";
import { _resumed, _var_resume } from "../resume";
import {
  _closure_get,
  _const,
  _for_closure,
  _if_closure,
  _let,
  _let_change,
  _or,
  type ClosureScopes,
  type Signal,
  type SignalFn,
} from "../signals";
import { patchers, patchFills } from "./apply";

// Installed by `patches/effect`, whose effects re-run by their reads: a fill a
// join registers then marks its change as a write does.
let markFillChange:
  | ((scope: Scope, valueAccessor: EncodedAccessor) => void)
  | undefined;
export function installFillChange(mark: typeof markFillChange) {
  markFillChange = mark;
}

function fillJoin<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  dispatch: SignalFn,
): T {
  const prev = patchFills[key];
  const prevFn = prev?._;
  // Never replace a fill-registered declaration: what derives from it
  // already reaches every consumer a join could.
  if (!prev || prevFn) {
    const fn: SignalFn = prevFn
      ? (scope) => {
          prevFn(scope);
          dispatch(scope);
        }
      : dispatch;
    // An effect reading the value re-runs from its own template's module,
    // which imports `patches/effect` before its joins register.
    (patchFills[key] = _const(
      valueAccessor,
      markFillChange
        ? (scope) => {
            markFillChange!(scope, valueAccessor);
            fn(scope);
          }
        : fn,
    ) as Signal<unknown> & { _?: SignalFn })._ = fn;
  }
  return join;
}
// A fill runs the join, through `buildDispatch` where it runs in branches.
export function _fill_join<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  buildDispatch?: (join: SignalFn) => SignalFn,
): T {
  return fillJoin(key, valueAccessor, join, buildDispatch?.(join) || join);
}
// A member of a join the patch writes, filled for other reads: its fill only
// sets the value, as the patch writes the join or the scope inits it.
export function _fill_join_value<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
): T {
  return fillJoin(key, valueAccessor, join, noop);
}
// Owner-side dispatch for cross-section joins over branch scopes; per-kind
// helpers keep branch-free bundles free of the other kind.
export function _fill_join_if<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  ...hops: (EncodedAccessor | number)[]
): T {
  let dispatch: SignalFn = join;
  for (let i = hops.length; i > 0; i -= 2) {
    dispatch = _if_closure(
      hops[i - 2] as EncodedAccessor,
      hops[i - 1] as number,
      dispatch,
    );
  }
  return fillJoin(key, valueAccessor, join, dispatch);
}
export function _fill_join_for<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  ...hops: EncodedAccessor[]
): T {
  let dispatch: SignalFn = join;
  for (let i = hops.length; i--;) {
    dispatch = _for_closure(hops[i], dispatch);
  }
  return fillJoin(key, valueAccessor, join, dispatch);
}

// Deep closure positions of one key reassemble the indexed composite; a
// shaken position is simply absent.
const closureFillJoins: Record<string, SignalFn[]> = {};
export function _fill_join_closure<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  index: number,
): T {
  const closureJoin = join as T & {
    [ClosureSignalProp.ScopeInstancesAccessor]: string;
    [ClosureSignalProp.SignalIndexAccessor]: string;
    [ClosureSignalProp.Index]: number;
  };
  // Client-created positions stamp this index into their scope, keeping
  // it in agreement with what the server serialized.
  closureJoin[ClosureSignalProp.Index] = index;
  const signals = (closureFillJoins[key] ??= []);
  // The first position registers the fill join every position shares.
  if (!signals.length) {
    fillJoin(key, valueAccessor, join, (scope) => {
      const instances = scope[
        closureJoin[ClosureSignalProp.ScopeInstancesAccessor]
      ] as ClosureScopes | undefined;
      if (instances) {
        // A subscriber that resumes after this renders the change it missed.
        instances[ClosureScopesProp.Changed] = 1;
        const signalIndex = closureJoin[ClosureSignalProp.SignalIndexAccessor];
        for (const childScope of instances) {
          if (
            childScope[AccessorProp.Gen] > 0 &&
            childScope[AccessorProp.Gen] < runId
          ) {
            // The declaration's fill on this key runs `_closure`; dispatch as it does.
            signals[(childScope[signalIndex] as number) || 0]?.(childScope);
          }
        }
      }
    });
  }
  signals[index] = join;
  return join;
}

// A join in content its owner's closure subscribers hold: the fill runs it
// in each subscribed scope of this closure position.
export function _fill_join_subscribers<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  closureAccessor: EncodedAccessor,
  index: number,
) {
  if (!MARKO_DEBUG) closureAccessor = decodeAccessor(closureAccessor as number);
  const instancesAccessor = MARKO_DEBUG
    ? AccessorPrefix.ClosureScopes + closureAccessor
    : (closureAccessor as string);
  const signalIndex = AccessorPrefix.ClosureSignalIndex + closureAccessor;
  return fillJoin(key, valueAccessor, join, (scope) => {
    const instances = scope[instancesAccessor] as ClosureScopes | undefined;
    if (instances) {
      instances[ClosureScopesProp.Changed] = 1;
      for (const childScope of instances) {
        if (
          childScope[AccessorProp.Gen] > 0 &&
          childScope[AccessorProp.Gen] < runId &&
          ((childScope[signalIndex] as number) || 0) === index
        ) {
          queueRender(childScope, join, -1);
        }
      }
    }
  });
}

// A declaration doubles as its fill; `fillFn` (renders minus what the
// flush does itself) is the fill's run when it differs, `0` when nothing is left.
function fill<T extends Signal<any>>(
  key: string,
  signal: T,
  id: EncodedAccessor,
  fillFn: SignalFn | 0 | undefined,
) {
  patchFills[key] =
    fillFn === undefined ? signal : _const(id, fillFn || undefined);
  return signal;
}
// Registers a fill only a patch's key reaches, keeping the fill and the value
// signal it wraps.
export { fill as _fill_resume };

// A dynamic tag's variable a patch writes takes the value through its own
// resume registration, under the same id.
export function _fill_var_resume<T extends Signal<unknown>>(
  id: string,
  signal: T,
): T {
  patchFills[id] = signal;
  return _var_resume(id, signal);
}
export function _fill_let<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
  fillFn?: SignalFn | 0,
) {
  return fill(
    key,
    _let<T>(id, fn),
    MARKO_DEBUG ? (id as string).slice(0, (id as string).lastIndexOf("/")) : id,
    fillFn,
  );
}
// A fill is the controller's value, never an assignment the handler takes.
export function _fill_let_change<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
  fillFn?: SignalFn | 0,
) {
  return fill(
    key,
    _let_change<T>(id, fn),
    MARKO_DEBUG ? (id as string).slice(0, (id as string).lastIndexOf("/")) : id,
    fillFn ?? fn ?? 0,
  );
}
export function _fill_const<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
  fillFn?: SignalFn | 0,
) {
  return fill(key, _const<T>(id, fn), id, fillFn);
}

// A created scope's join waits on members it seeds or never inits: the flush
// runs it by this init, after whatever does arrive.
export function _shell_or(
  initId: string,
  id: number,
  fn: SignalFn,
  defaultPending?: number,
  scopeIdAccessor: EncodedAccessor = AccessorProp.Id,
): Signal<never> {
  const or = _or(id, fn, defaultPending, scopeIdAccessor);
  const scopeIdKey =
    MARKO_DEBUG || scopeIdAccessor === AccessorProp.Id
      ? scopeIdAccessor
      : decodeAccessor(scopeIdAccessor as number);
  // Queued in the same order as the join's own renders.
  _resumed[initId] = (scope: Scope) =>
    queueRender(scope, fn, id, 0, scope[scopeIdKey]);
  return or;
}

// A join the patch writes: a patch names its init on any scope it leaves the
// join to, so the join brings the patcher that runs it.
export const _patch_or = /*@__PURE__*/ withJoinInits(_shell_or);
function withJoinInits<T>(or: T) {
  // Join inits alone, registered by `_shell_or`; `resolveSetupIds` here ships
  // `patches/shells` on every page (in `apply`, +6 B on each patch page).
  patchers[PatchKey.Init] = (scope, _key, ids) => {
    for (const id of ids.split(" ")) (_resumed[id] as SignalFn)(scope);
  };
  return or;
}

// A later closure position a flush may create carries its index, which its
// owner's `_closure` composite would stamp, so the composite need not ship.
export function _closure_index(
  index: number,
  signal: ReturnType<typeof _closure_get>,
) {
  signal[ClosureSignalProp.Index] = index;
  return signal;
}

// A created subscriber a shell or flush names by id whether or not client code
// reaches it: this registration is what ships it, and the fill join around it.
export function _closure_resume<T extends (scope: Scope, resumed: 1) => void>(
  resumeId: string,
  closureSignal: T,
): T {
  _resumed[resumeId] = (scope: Scope) => closureSignal(scope, 1);
  return closureSignal;
}

// A created scope's init registers with the signal it runs, so it lives exactly
// as long.
export function _shell_init<T extends (scope: Scope) => void>(
  id: string,
  signal: T,
): T {
  return (_resumed[id] = signal);
}

// A created call's setup a shell names by id, which no shipped code may call:
// this registration is what ships it.
export function _shell_setup<T extends (scope: Scope) => void>(
  id: string,
  setup: T,
): T {
  return (_resumed[id] = setup);
}
