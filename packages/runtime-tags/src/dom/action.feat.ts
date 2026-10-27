import { decodeAccessor } from "../common/helpers";
import {
  AccessorPrefix,
  type EncodedAccessor,
  ReservedId,
  type Scope,
} from "../common/types";
import { navigates } from "./navigates";
import { rendering } from "./queue";
import { _resumed } from "./resume";
import { _defer_frame } from "./schedule";
import { _let, type SignalFn } from "./signals";

type Guess = { n: number; s: unknown; l: () => unknown };
type Pending = { n: number };

// The act running synchronously: what each draft it wrote does when it ends.
let act: undefined | Set<() => unknown>;
// Acts whose click or submit is still dispatching, each with the end of that wait.
let dispatched: undefined | [Event, () => void][];
// Acts whose dispatch navigated: they end when the page restores from the back/forward cache.
const held: (() => void)[] = [];

// The ends of the acts started in the dispatch the running patch started in,
// which they then wait on instead.
export function takeDispatched() {
  const taken: (() => void)[] = [];
  dispatched = dispatched?.filter(
    ([ev, end]) => ev != window.event || !taken.push(end),
  );
  return taken;
}

function listen() {
  addEventListener("click", dispatchEnd);
  addEventListener("submit", dispatchEnd);
  addEventListener("pageshow", (ev: PageTransitionEvent) => {
    if (ev.persisted) held.splice(0).forEach((end) => end());
  });
  return [] as NonNullable<typeof dispatched>;
}

function dispatchEnd(ev: Event) {
  dispatched = dispatched!.filter(
    ([e, end]) => e != ev || (navigates(ev) ? held.push(end) : end(), 0),
  );
}

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
      const ev = window.event;
      let waits = 1;
      const finish = () => {
        mine.forEach((leave) => leave());
        --pending.n || set(scope, create(scope, pending));
      };
      const end = (_?: unknown) => --waits || finish();
      let result: any;
      pending.n++ || set(scope, create(scope, pending));
      _defer_frame();
      try {
        result = (scope[fnAccessor] as Function | undefined)?.(...args);
      } catch (error) {
        finish();
        throw error;
      } finally {
        act = prev;
      }
      if (ev?.type == "click" || ev?.type == "submit") {
        waits++;
        (dispatched ||= listen()).push([ev, end]);
        // The dispatch may not reach the window (a stopped event).
        setTimeout(dispatchEnd, 0, ev);
      }
      // Observing the promise marks a rejection handled: an act reports none, by design.
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
