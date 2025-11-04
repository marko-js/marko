import { _el_read_error, _hoist_read_error } from "../common/errors";
import { decodeAccessor } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type EncodedAccessor,
  type Scope,
} from "../common/types";
import { $signal } from "./abort-signal";
import { queueEffect, queueRender, rendering } from "./queue";
import { _resume } from "./resume";
import { schedule } from "./schedule";

export type SignalFn = (scope: Scope) => void;
export type Signal<T> = ((scope: Scope, value: T) => void) & {
  ___subscribe?(scope: Scope): void;
};

export function _let<T>(id: EncodedAccessor, fn?: SignalFn) {
  const valueAccessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);
  const valueChangeAccessor = AccessorPrefix.TagVariableChange + valueAccessor;

  if (MARKO_DEBUG) {
    id = +valueAccessor.slice(valueAccessor.lastIndexOf("/") + 1);
  }

  return (scope: Scope, value: T, valueChange?: (v: T) => void) => {
    if (rendering) {
      if (
        ((scope[valueChangeAccessor] = valueChange) &&
          scope[valueAccessor] !== value) ||
        scope.___creating
      ) {
        scope[valueAccessor] = value;
        fn?.(scope);
      }
    } else if (scope[valueChangeAccessor]) {
      scope[valueChangeAccessor](value);
    } else if (scope[valueAccessor] !== (scope[valueAccessor] = value) && fn) {
      schedule();
      queueRender(scope, fn, id as number);
    }
    return value;
  };
}

export function _const<T>(
  valueAccessor: EncodedAccessor,
  fn?: SignalFn,
): Signal<T> {
  if (!MARKO_DEBUG) valueAccessor = decodeAccessor(valueAccessor as number);
  return (scope, value) => {
    if (!(valueAccessor in scope) || scope[valueAccessor] !== value) {
      scope[valueAccessor] = value;
      fn?.(scope);
    }
  };
}

export function _or(
  id: number,
  fn: SignalFn,
  defaultPending: number = 1,
  scopeIdAccessor: Accessor = /*@__KEY__*/ "___id",
): Signal<never> {
  return (scope) => {
    if (scope.___creating) {
      if (id in scope) {
        if (!--scope[id]) {
          fn(scope);
        }
      } else {
        scope[id] = defaultPending;
      }
    } else {
      queueRender(scope, fn, id, 0, scope[scopeIdAccessor]);
    }
  };
}

export function _for_closure(
  ownerLoopNodeAccessor: EncodedAccessor,
  fn: SignalFn,
): SignalFn {
  if (!MARKO_DEBUG)
    ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor as number);
  const loopScopeAccessor =
    AccessorPrefix.LoopScopeArray + ownerLoopNodeAccessor;
  const loopScopeMapAccessor =
    AccessorPrefix.LoopScopeMap + ownerLoopNodeAccessor;
  const ownerSignal = (ownerScope: Scope) => {
    const scopes = (ownerScope[loopScopeAccessor] ||= ownerScope[
      loopScopeMapAccessor
    ]
      ? [...ownerScope[loopScopeMapAccessor].values()]
      : []);
    const [firstScope] = scopes;
    if (firstScope) {
      queueRender(
        ownerScope,
        () => {
          for (const scope of scopes) {
            if (!scope.___creating && !scope.___destroyed) {
              fn(scope);
            }
          }
        },
        -1,
        0,
        firstScope.___id,
      );
    }
  };
  ownerSignal._ = fn;
  return ownerSignal;
}

export function _if_closure(
  ownerConditionalNodeAccessor: EncodedAccessor,
  branch: number,
  fn: SignalFn,
): SignalFn {
  if (!MARKO_DEBUG)
    ownerConditionalNodeAccessor = decodeAccessor(
      ownerConditionalNodeAccessor as number,
    );
  const scopeAccessor =
    AccessorPrefix.ConditionalScope + ownerConditionalNodeAccessor;
  const branchAccessor =
    AccessorPrefix.ConditionalRenderer + ownerConditionalNodeAccessor;
  const ownerSignal = (scope: Scope) => {
    const ifScope = scope[scopeAccessor];
    if (
      ifScope &&
      !ifScope.___creating &&
      (scope[branchAccessor] || 0) === branch
    ) {
      queueRender(ifScope, fn, -1);
    }
  };
  ownerSignal._ = fn;
  return ownerSignal;
}

export function subscribeToScopeSet(
  ownerScope: Scope,
  accessor: Accessor,
  scope: Scope,
) {
  const subscribers = (ownerScope[accessor] ||= new Set()) as Set<Scope>;
  if (!subscribers.has(scope)) {
    subscribers.add(scope);
    $signal(scope, -1).addEventListener("abort", () =>
      ownerScope[accessor].delete(scope),
    );
  }
}

export function _closure(...closureSignals: ReturnType<typeof _closure_get>[]) {
  const [{ ___scopeInstancesAccessor, ___signalIndexAccessor }] =
    closureSignals;
  for (let i = closureSignals.length; i--; ) {
    closureSignals[i].___index = i;
  }

  return (scope: Scope) => {
    if (scope[___scopeInstancesAccessor]) {
      for (const childScope of scope[___scopeInstancesAccessor] as Set<Scope>) {
        if (!childScope.___creating) {
          queueRender(
            childScope,
            closureSignals[childScope[___signalIndexAccessor]],
            -1,
          );
        }
      }
    }
  };
}

export function _closure_get(
  valueAccessor: EncodedAccessor,
  fn: SignalFn,
  getOwnerScope?: (scope: Scope) => Scope,
) {
  if (!MARKO_DEBUG) valueAccessor = decodeAccessor(valueAccessor as number);
  const closureSignal = ((scope) => {
    scope[closureSignal.___signalIndexAccessor] = closureSignal.___index;
    fn(scope);
    subscribeToScopeSet(
      getOwnerScope ? getOwnerScope(scope) : scope[AccessorProp.Owner]!,
      closureSignal.___scopeInstancesAccessor,
      scope,
    );
  }) as SignalFn & {
    ___scopeInstancesAccessor: string;
    ___signalIndexAccessor: string;
    ___index: number;
  };
  closureSignal.___scopeInstancesAccessor =
    AccessorPrefix.ClosureScopes + valueAccessor;
  closureSignal.___signalIndexAccessor =
    AccessorPrefix.ClosureSignalIndex + valueAccessor;
  return closureSignal;
}

export function _child_setup(setup: Signal<never> & { _: Signal<Scope> }) {
  setup._ = (scope, owner) => {
    scope[AccessorProp.Owner] = owner;
    queueRender(scope, setup, -1);
  };
  return setup;
}

export function _var(
  scope: Scope,
  childAccessor: EncodedAccessor,
  signal: Signal<unknown>,
) {
  scope[MARKO_DEBUG ? childAccessor : decodeAccessor(childAccessor as number)][
    AccessorProp.TagVariable
  ] = (value: unknown) => signal(scope, value);
}

export const _return = (scope: Scope, value: unknown) =>
  scope[AccessorProp.TagVariable]?.(value);

export function _return_change(
  scope: Scope,
  changeHandler?: ((value: unknown) => void) | null | false,
) {
  if (changeHandler) {
    scope[AccessorProp.TagVariableChange] = changeHandler;
  }
}
export const _var_change = MARKO_DEBUG
  ? (scope: Scope, value: unknown, name: string = "This") => {
      if (typeof scope[AccessorProp.TagVariableChange] !== "function") {
        throw new TypeError(`${name} is a readonly tag variable.`);
      }

      scope[AccessorProp.TagVariableChange](value);
    }
  : (scope: Scope, value: unknown) =>
      scope[AccessorProp.TagVariableChange]?.(value);

const tagIdsByGlobal = new WeakMap<Scope["___global"], number>();
export function _id({ $global }: Scope) {
  const id = tagIdsByGlobal.get($global) || 0;
  tagIdsByGlobal.set($global, id + 1);
  return "c" + $global.runtimeId + $global.renderId + id.toString(36);
}

export function _script(id: string, fn: (scope: Scope) => void) {
  _resume(id, fn);
  return (scope: Scope) => {
    queueEffect(scope, fn);
  };
}

export function _el_read<T>(value: T): T {
  if (rendering) {
    _el_read_error();
  }
  return value;
}

function* traverseAllHoisted(
  scope: Scope | Iterable<Scope>,
  path: Accessor[],
  curIndex: number = path.length - 1,
): IterableIterator<(...args: unknown[]) => unknown> {
  if (MARKO_DEBUG && rendering) {
    _hoist_read_error();
  }
  if (scope) {
    if (Symbol.iterator in scope) {
      for (const s of scope instanceof Map ? scope.values() : scope) {
        yield* traverseAllHoisted(s, path, curIndex);
      }
    } else if (curIndex) {
      yield* traverseAllHoisted(scope[path[curIndex]], path, curIndex - 1);
    } else {
      yield scope[path[0]];
    }
  }
}

export function _hoist(...path: Accessor[]) {
  if (!MARKO_DEBUG)
    path = path.map((p) => (typeof p === "string" ? p : decodeAccessor(p)));
  return (scope: Scope) => {
    const getOne = (...args: unknown[]) =>
      iterator()
        .next()
        .value?.(...args);
    const iterator = ((getOne as any)[Symbol.iterator] = () =>
      traverseAllHoisted(scope, path));
    return getOne;
  };
}
