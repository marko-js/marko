import { decodeAccessor } from "../common/helpers";
import {
  AccessorPrefix,
  type EncodedAccessor,
  ReservedId,
  type Scope,
} from "../common/types";
import { rendering } from "./queue";
import { _resumed } from "./resume";
import { _defer_frame } from "./schedule";
import { _let, type SignalFn } from "./signals";

type Guess = { n: number; s: unknown; l: () => unknown };
type Pending = { n: number };

// The act running synchronously: what each draft it wrote does when it ends.
let act: undefined | Set<() => unknown>;

export function _draft<T>(id: EncodedAccessor, fn?: SignalFn) {
  const valueAccessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);
  const guessAccessor = MARKO_DEBUG
    ? AccessorPrefix.TagVariableChange + valueAccessor
    : decodeAccessor((id as number) + ReservedId.ChangeHandler);
  const assign = _let<T>(id, fn);

  return (scope: Scope, value: T) => {
    const guess = (scope[guessAccessor] ||= {
      n: 0,
      l: () => --guess.n || assign(scope, guess.s as T),
    } as Guess) as Guess;
    if (rendering) {
      guess.s = value;
      if (
        !guess.n &&
        (scope[valueAccessor] !== value || !(valueAccessor in scope))
      ) {
        scope[valueAccessor] = value;
        fn?.(scope);
      }
    } else if (act) {
      if (!act.has(guess.l)) {
        act.add(guess.l);
        guess.n++ || (guess.s = scope[valueAccessor]);
      }
      assign(scope, value);
    } else if (MARKO_DEBUG) {
      console.warn(
        "Assigned a `<draft>` with no `<action>` running, which has no effect. Assign it inside an `<action>`, or inside a function an action calls before it awaits.",
      );
    }
    return value;
  };
}

export function _action(
  id: EncodedAccessor,
  registerId: string,
  fn?: SignalFn,
) {
  const valueAccessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);
  const fnAccessor = MARKO_DEBUG
    ? AccessorPrefix.TagVariableChange + valueAccessor
    : decodeAccessor((id as number) + ReservedId.ChangeHandler);
  const set = _let<unknown>(id, fn);
  const create = (scope: Scope, pending: Pending) => {
    const call = (...args: unknown[]) => {
      const prev = act;
      const mine = (act = new Set());
      const end = (_?: unknown) => {
        mine.forEach((leave) => leave());
        --pending.n || set(scope, create(scope, pending));
      };
      let result: any;
      pending.n++ || set(scope, create(scope, pending));
      _defer_frame();
      try {
        result = (scope[fnAccessor] as Function | undefined)?.(...args);
      } catch (error) {
        end();
        throw error;
      } finally {
        act = prev;
      }
      // A task, not a microtask: a trusted event runs microtask checkpoints between listeners.
      result?.then ? result.then(end, end) : setTimeout(end);
      return result;
    };
    call.pending = !!pending.n;
    return call;
  };

  _resumed[registerId] = (scope: Scope) => create(scope, { n: 0 });

  return (scope: Scope, value: unknown) => {
    scope[fnAccessor] = value;
    valueAccessor in scope || set(scope, create(scope, { n: 0 }));
  };
}
