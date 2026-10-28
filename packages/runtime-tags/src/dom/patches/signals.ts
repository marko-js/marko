import { decodeAccessor } from "../../common/helpers";
import {
  AccessorPrefix,
  AccessorProp,
  ClosureScopesProp,
  ClosureSignalProp,
  type EncodedAccessor,
  RenderDataProp,
  type Scope,
} from "../../common/types";
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
import { depChanged, patchFills, patchRender } from "./apply";

// Installed by `patches/fill-change` where an entry depends on a value a join's
// fill sets: the fill then marks its change as a write does.
let markFillChange:
  | ((scope: Scope, valueAccessor: EncodedAccessor) => void)
  | undefined;
export function installFillChange(mark: typeof markFillChange) {
  markFillChange = mark;
}
// A changed value a fill sets, marked as a write marks it.
export function markFillChanged(scope: Scope, valueAccessor: EncodedAccessor) {
  scope[
    AccessorPrefix.PatchChanged +
      (MARKO_DEBUG ? valueAccessor : decodeAccessor(valueAccessor as number))
  ] = patchRender[RenderDataProp.StopPatch];
}
// A declaration's fill run that leaves out a join its scope inits marks its
// change for that init.
export function _fill_mark(
  valueAccessor: EncodedAccessor,
  fillFn: SignalFn | 0,
) {
  return (scope: Scope) => {
    markFillChanged(scope, valueAccessor);
    if (fillFn) fillFn(scope);
  };
}

function fillJoin<T extends SignalFn>(
  keys: string,
  valueAccessor: EncodedAccessor,
  join: T,
  dispatch: SignalFn,
): T {
  // Each of the value's keys a patch may send (space separated) runs the join;
  // those after `|` set the value alone.
  let run = dispatch;
  for (const key of keys.split(" ")) {
    if (key === "|") {
      run = (_: Scope) => 0;
    } else {
      const prevFn = patchFills[key]?._;
      if (!patchFills[key] || prevFn) {
        const keyRun = run;
        const fn: SignalFn = prevFn
          ? (scope) => {
              prevFn(scope);
              keyRun(scope);
            }
          : keyRun;
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
    }
  }
  return join;
}
// A fill runs the join, through `buildDispatch` where it runs in branches, or
// runs nothing where another key or the scope's init re-runs it.
export function _fill_join<T extends SignalFn>(
  keys: string,
  valueAccessor: EncodedAccessor,
  join: T,
  buildDispatch?: (join: SignalFn) => SignalFn,
): T {
  return fillJoin(keys, valueAccessor, join, buildDispatch?.(join) || join);
}
// Owner-side dispatch for cross-section joins over branch scopes; per-kind
// helpers keep branch-free bundles free of the other kind.
export function _fill_join_if<T extends SignalFn>(
  keys: string,
  valueAccessor: EncodedAccessor,
  join: T,
  ...hops: (EncodedAccessor | number)[]
): T {
  let dispatch: SignalFn = join;
  for (let i = hops.length; i; i -= 2) {
    dispatch = _if_closure(
      hops[i - 2] as EncodedAccessor,
      hops[i - 1] as number,
      dispatch,
    );
  }
  return fillJoin(keys, valueAccessor, join, dispatch);
}
export function _fill_join_for<T extends SignalFn>(
  keys: string,
  valueAccessor: EncodedAccessor,
  join: T,
  ...hops: EncodedAccessor[]
): T {
  let dispatch: SignalFn = join;
  for (let i = hops.length; i--;) {
    dispatch = _for_closure(hops[i], dispatch);
  }
  return fillJoin(keys, valueAccessor, join, dispatch);
}

// Deep closure positions of one key reassemble the indexed composite; a
// shaken position is simply absent.
const closureFillJoins: Record<string, SignalFn[]> = {};
export function _fill_join_closure<T extends ReturnType<typeof _closure_get>>(
  keys: string,
  valueAccessor: EncodedAccessor,
  join: T,
  index: number,
): T {
  // Client-created positions stamp this index into their scope, keeping
  // it in agreement with what the server serialized.
  join[ClosureSignalProp.Index] = index;
  // Each key keeps its own positions.
  for (const key of keys.split(" ")) {
    const signals = (closureFillJoins[key] ??= []);
    // The first position registers the fill join every position shares.
    if (!signals.length) {
      fillJoin(key, valueAccessor, join, (scope) => {
        const instances = scope[
          join[ClosureSignalProp.ScopeInstancesAccessor]
        ] as ClosureScopes | undefined;
        if (instances) {
          // A subscriber that resumes after this renders the change it missed.
          instances[ClosureScopesProp.Changed] = 1;
          for (const childScope of instances) {
            if (
              childScope[AccessorProp.Gen] > 0 &&
              childScope[AccessorProp.Gen] < runId
            ) {
              signals[
                (childScope[
                  join[ClosureSignalProp.SignalIndexAccessor]
                ] as number) || 0
              ]?.(childScope);
            }
          }
        }
      });
    }
    signals[index] = join;
  }
  return join;
}

// A join in content its owner's closure subscribers hold: the fill runs it (or
// `run`, deriving what it reads) in each subscribed scope of this closure position.
export function _fill_join_subscribers<T extends SignalFn>(
  keys: string,
  valueAccessor: EncodedAccessor,
  join: T,
  closureAccessor: EncodedAccessor,
  index: number,
  run: SignalFn = join,
) {
  const instancesAccessor = MARKO_DEBUG
    ? AccessorPrefix.ClosureScopes + closureAccessor
    : decodeAccessor(closureAccessor as number);
  const signalIndex =
    AccessorPrefix.ClosureSignalIndex +
    (MARKO_DEBUG ? closureAccessor : instancesAccessor);
  return fillJoin(keys, valueAccessor, join, (scope) => {
    const instances = scope[instancesAccessor] as ClosureScopes | undefined;
    if (instances) {
      instances[ClosureScopesProp.Changed] = 1;
      for (const childScope of instances) {
        if (
          childScope[AccessorProp.Gen] > 0 &&
          childScope[AccessorProp.Gen] < runId &&
          ((childScope[signalIndex] as number) || 0) === index
        ) {
          queueRender(childScope, run, -1);
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

// A fill's run, registered apart from its pure value signal; its unpatched key
// runs it as a join, which closures below param-selected structure chain onto.
export function _fill_run(
  key: string,
  id: EncodedAccessor,
  run: SignalFn,
  unpatchedKey?: string,
) {
  patchFills[key] = _const(id, run);
  if (unpatchedKey) fillJoin(unpatchedKey, id, run, run);
}

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

// Whether a write each live function's registration captures changed its owner.
export const liveCaptures: Record<string, (owner: Scope) => unknown> = {};

// A live function's registration (`patches/marked-bind`), keyed `id capture …`.
export function _bind_resume(key: string, factory: (owner: Scope) => unknown) {
  const [id, ...captures] = key.split(" ");
  liveCaptures[id] = (owner: Scope) => depChanged(owner, captures);
  _resumed[id] = factory;
}

// The function resume revives for an owner is that owner's, until a bind makes
// another.
export function reviveBoundFn(id: string, owner: Scope) {
  return (owner[AccessorPrefix.BoundFn + id] = [
    -1,
    (_resumed[id] as (owner: Scope) => unknown)(owner),
  ])[1];
}

export function _fill_const<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
  fillFn?: SignalFn | 0,
) {
  return fill(key, _const<T>(id, fn), id, fillFn);
}

// A join a flush runs by this init, after whatever members arrive: a created
// scope's, or a written join's where its group mixes (`patches/init`).
export function _or_resume(
  initId: string,
  id: number,
  fn: SignalFn,
  defaultPending?: number,
  scopeIdAccessor: EncodedAccessor = AccessorProp.Id,
): Signal<never> {
  const scopeIdKey =
    MARKO_DEBUG || scopeIdAccessor === AccessorProp.Id
      ? scopeIdAccessor
      : decodeAccessor(scopeIdAccessor as number);
  // Queued in the same order as the join's own renders.
  _resumed[initId] = (scope: Scope) =>
    queueRender(scope, fn, id, 0, scope[scopeIdKey]);
  return _or(id, fn, defaultPending, scopeIdAccessor);
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
export function _init_resume<T extends (scope: Scope) => void>(
  id: string,
  signal: T,
): T {
  return (_resumed[id] = signal);
}
