import { type Accessor, AccessorChar, type Scope } from "../common/types";
import { getAbortSignal } from "./abort-signal";
import { queueEffect, queueRender, rendering } from "./queue";
import { register } from "./resume";
import { schedule } from "./schedule";

export type SignalFn<T> = (scope: Scope, value?: T) => void;
export type Signal<T> = SignalFn<T> & {
  ___subscribe?(scope: Scope): void;
};

export function state<T>(valueAccessor: Accessor, fn: SignalFn<T>) {
  if (MARKO_DEBUG) {
    // eslint-disable-next-line no-var
    var id = +(valueAccessor as string).slice(
      (valueAccessor as string).lastIndexOf("/") + 1,
    );
    valueAccessor = (valueAccessor as string).slice(
      0,
      (valueAccessor as string).lastIndexOf("/"),
    );
  }

  const valueChangeAccessor = valueAccessor + AccessorChar.TagVariableChange;
  const update = (scope: Scope, value?: T) => {
    if (scope[valueAccessor] !== value) {
      scope[valueAccessor] = value;
      fn(scope, value);
    }
  };

  return (scope: Scope, value: T, valueChange?: (v: T) => void) => {
    if (rendering) {
      if (
        ((scope[valueChangeAccessor] = valueChange) &&
          scope[valueAccessor] !== value) ||
        !(valueAccessor in scope)
      ) {
        scope[valueAccessor] = value;
        fn(scope, value);
      }
    } else if (scope[valueChangeAccessor]) {
      scope[valueChangeAccessor](value);
    } else {
      schedule();
      queueRender(
        scope,
        update,
        MARKO_DEBUG ? id : (valueAccessor as number),
        value,
      );
    }
    return value;
  };
}

export function value<T>(
  valueAccessor: Accessor,
  fn: SignalFn<T> = () => {},
): Signal<T> {
  return (scope, value) => {
    if (!(valueAccessor in scope) || scope[valueAccessor] !== value) {
      scope[valueAccessor] = value;
      fn(scope, value);
    }
  };
}

let accessorId = 0;

export function intersection(
  id: number,
  fn: SignalFn<never>,
  defaultPending: number = 1,
  scopeIdAccessor: Accessor = /*@__KEY__*/ "___id",
): Signal<never> {
  return (scope) => {
    if (scope.___pending) {
      if (scope[id] === undefined) {
        scope[id] = defaultPending;
      } else if (!--scope[id]) {
        fn(scope);
      }
    } else {
      queueRender(scope, fn as any, id, 0, scope[scopeIdAccessor]);
    }
  };
}

export function intersectionWithLast(
  id: number,
  fn: SignalFn<never>,
  scopeIdAccessor: Accessor = /*@__KEY__*/ "___id",
): Signal<never> {
  return (scope, isLast?: 1) => {
    if (scope.___pending) {
      if (isLast) {
        fn(scope);
      }
    } else {
      queueRender(scope, fn as any, id, 0, scope[scopeIdAccessor], isLast);
    }
  };
}

export function loopClosure<T>(
  valueAccessor: Accessor,
  ownerLoopNodeAccessor: Accessor,
  fn: SignalFn<T>,
): SignalFn<T> {
  const childSignal = closure(valueAccessor, fn);
  const loopScopeAccessor = ownerLoopNodeAccessor + AccessorChar.LoopScopeArray;
  const loopScopeMapAccessor =
    ownerLoopNodeAccessor + AccessorChar.LoopScopeMap;
  const ownerSignal = (ownerScope: Scope) => {
    const scopes =
      ownerScope[loopScopeAccessor] ||
      ownerScope[loopScopeMapAccessor]?.values() ||
      [];
    const [firstScope] = scopes;
    if (firstScope) {
      queueRender(
        ownerScope,
        () => {
          for (const scope of scopes) {
            if (!scope.___pending && !scope.___destroyed) {
              childSignal(scope);
            }
          }
        },
        -1,
        0,
        firstScope.___id,
      );
    }
  };
  ownerSignal._ = childSignal;
  return ownerSignal;
}

export function conditionalClosure<T>(
  valueAccessor: Accessor,
  ownerConditionalNodeAccessor: Accessor,
  branch: number,
  fn: SignalFn<T>,
): SignalFn<T> {
  const childSignal = closure(valueAccessor, fn);
  const scopeAccessor =
    ownerConditionalNodeAccessor + AccessorChar.ConditionalScope;
  const branchAccessor =
    ownerConditionalNodeAccessor + AccessorChar.ConditionalRenderer;
  const ownerSignal = (scope: Scope) => {
    const ifScope = scope[scopeAccessor];
    if (ifScope && !ifScope.___pending && scope[branchAccessor] === branch) {
      queueRender(ifScope, childSignal, -1);
    }
  };
  ownerSignal._ = childSignal;
  return ownerSignal;
}

export function subscribeToScopeSet(
  ownerScope: Scope,
  accessor: Accessor,
  scope: Scope,
) {
  const subscribers = (ownerScope[accessor] ||= new Set<Scope>());
  if (!subscribers.has(scope)) {
    subscribers.add(scope);
    getAbortSignal(scope, -1).addEventListener("abort", () =>
      ownerScope[accessor].delete(scope),
    );
  }
}

export function dynamicClosure<T>(
  valueAccessor: Accessor,
  fn: Signal<T>,
  getOwnerScope?: (scope: Scope) => Scope,
) {
  const subscribersAccessor = AccessorChar.Dynamic + accessorId++;
  const childSignal = closure(valueAccessor, fn, getOwnerScope);
  const ownerSignal = (ownerScope: Scope) => {
    const subscribers = ownerScope[subscribersAccessor] as Set<Scope>;
    if (subscribers) {
      for (const subscriber of subscribers) {
        if (!subscriber.___pending) {
          queueRender(subscriber, childSignal, -1);
        }
      }
    }
  };
  const subscribe = (ownerSignal.___subscribe = (scope: Scope) =>
    subscribeToScopeSet(
      getOwnerScope ? getOwnerScope(scope) : scope._!,
      subscribersAccessor,
      scope,
    ));
  ownerSignal._ = (scope: Scope) => {
    childSignal(scope);
    subscribe(scope);
  };
  return ownerSignal;
}

export function registerDynamicClosure<T>(
  registryId: string,
  valueAccessor: Accessor,
  fn: Signal<T>,
  getOwnerScope?: (scope: Scope) => Scope,
) {
  const signal = dynamicClosure(valueAccessor, fn, getOwnerScope);
  register(registryId, signal.___subscribe);
  return signal;

  // TODO: we need to handle the async case - DO NOT REMOVE UNTIL WE DO
  // const ownerMarkAccessor = ownerValueAccessor + AccessorChars.MARK;
  // const ownerSubscribersAccessor =
  //   ownerValueAccessor + AccessorChars.SUBSCRIBERS;

  // register(id, (subscriberScope: Scope) => {
  //   const ownerScope = getOwnerScope(subscriberScope);
  //   const boundSignal = bindFunction(subscriberScope, signal);
  //   const ownerMark = ownerScope[ownerMarkAccessor];
  //   (ownerScope[ownerSubscribersAccessor] ||= new Set()).add(boundSignal);

  //   // TODO: if the mark is not undefined, it means the value was updated clientside
  //   // before this subscriber was flushed.
  //   if (ownerMark === 0) {
  //     // the value has finished updating
  //     // we should trigger an update to `signal`
  //   } else if (ownerMark >= 1) {
  //     // the value is queued for update
  //     // we should mark `signal` and let it be updated when the owner is updated
  //   }
  // });
}

function closure<T>(
  valueAccessor: Accessor,
  fn: SignalFn<T>,
  getOwnerScope?: (scope: Scope) => Scope,
): (scope: Scope) => void {
  return (scope) => {
    fn(scope, (getOwnerScope ? getOwnerScope(scope) : scope._!)[valueAccessor]);
  };
}

export function setTagVar(
  scope: Scope,
  childAccessor: Accessor,
  tagVarSignal: Signal<unknown>,
) {
  scope[childAccessor][AccessorChar.TagVariable] = (value: unknown) =>
    tagVarSignal(scope, value);
}

export const tagVarSignal = (scope: Scope, value: unknown) =>
  scope[AccessorChar.TagVariable]?.(value);

export function setTagVarChange(
  scope: Scope,
  changeHandler: (value: unknown) => void,
) {
  scope[AccessorChar.TagVariableChange] = changeHandler;
}
export const tagVarSignalChange = (scope: Scope, value: unknown) =>
  scope[AccessorChar.TagVariableChange]?.(value);

const tagIdsByGlobal = new WeakMap<Scope["___global"], number>();
export function nextTagId({ $global }: Scope) {
  const id = tagIdsByGlobal.get($global) || 0;
  tagIdsByGlobal.set($global, id + 1);
  return "c" + $global.runtimeId + $global.renderId + id.toString(36);
}

export function effect(id: string, fn: (scope: Scope) => void) {
  register(id, fn);
  return (scope: Scope) => {
    queueEffect(scope, fn);
  };
}

function* traverseAllHoisted(
  scope: Scope | Iterable<Scope>,
  path: Accessor[],
  curIndex: number = path.length - 1,
): IterableIterator<(...args: unknown[]) => unknown> {
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

export function hoist(...path: Accessor[]) {
  return (scope: Scope) => {
    const getOne = (...args: unknown[]) =>
      iterator()
        .next()
        .value(...args);
    const iterator = ((getOne as any)[Symbol.iterator] = () =>
      traverseAllHoisted(scope, path));
    return getOne;
  };
}
