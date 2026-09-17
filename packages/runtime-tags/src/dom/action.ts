import { decodeAccessor } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type EncodedAccessor,
  type Scope,
} from "../common/types";
import { queueRender, rendering, runId } from "./queue";
import { schedule } from "./schedule";
import { patchFills, type Signal, type SignalFn } from "./signals";

/** A user act: the `<action>` tag variable. */
export type Act = ((...args: unknown[]) => unknown) & {
  readonly pending: boolean;
};

// A transaction: one invocation of an act. The guesses assigned while it
// runs (its body, then each re-entry after an await) release when it settles.
type Transaction = (() => void)[];
let transaction: Transaction | undefined;

/**
 * Wraps an `<action>` body into its act: a call opens a transaction that
 * drafts assigned within join, counts as pending until the body and the
 * promise it returned settle, then releases the guesses. `gen` marks a body
 * whose awaits compiled to yields, driven here so each re-entry rejoins the
 * transaction; `signal` re-runs the tag's downstream when `pending` flips.
 */
export function _act(
  fn: (...args: unknown[]) => unknown,
  gen: 0 | 1,
  scope: Scope,
  signal: Signal<Act>,
): Act {
  let count = 0;
  const act = function (this: unknown, ...args: unknown[]) {
    const tx: Transaction = [];
    const settle = () => {
      for (const release of tx) release();
      if (!--count) notify();
    };
    if (!count++) notify();
    const prev = transaction;
    transaction = tx;
    let result: unknown;
    try {
      result = gen
        ? drive(tx, fn.apply(this, args) as Iterator<unknown>)
        : fn.apply(this, args);
    } catch (err) {
      transaction = prev;
      settle();
      throw err;
    }
    transaction = prev;
    if (isThenable(result)) result.then(settle, settle);
    else settle();
    return result;
  } as Act;
  const notify = () => {
    schedule();
    queueRender(scope, signal, -1, act);
  };
  Object.defineProperty(act, "pending", { get: () => count > 0 });
  return act;
}

// Runs a generator body like the async function it was written as, with
// the transaction current across every resumption.
function drive(tx: Transaction, it: Iterator<unknown>) {
  return new Promise((resolve, reject) => {
    const step = (method: "next" | "throw", arg: unknown) => {
      const prev = transaction;
      transaction = tx;
      let result: IteratorResult<unknown>;
      try {
        result = it[method]!(arg);
      } catch (err) {
        transaction = prev;
        reject(err);
        return;
      }
      transaction = prev;
      if (result.done) resolve(result.value);
      else
        Promise.resolve(result.value).then(
          (value) => step("next", value),
          (err) => step("throw", err),
        );
    };
    step("next", undefined);
  });
}

function isThenable(value: unknown): value is PromiseLike<unknown> {
  return !!value && typeof (value as PromiseLike<unknown>).then === "function";
}

/**
 * The `<action>` tag's storage signal: keeps the scope's first act (its
 * pending count is the instance's; a re-evaluation only keeps the body's
 * bindings persisted) and runs the downstream, its `pending` reads, on
 * every call, since a pending flip re-runs it with the same act.
 */
export function _action(id: EncodedAccessor, fn?: SignalFn): Signal<Act> {
  const valueAccessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);
  return (scope: Scope, act: Act) => {
    scope[valueAccessor] ||= act;
    fn?.(scope);
  };
}

// The fill-registered variants: a flush seeds a scope it creates through
// them, as it seeds a `<let>`.
export function _fill_action(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
): Signal<Act> {
  return (patchFills[key] = _action(id, fn) as Signal<unknown>) as Signal<Act>;
}

export function _fill_draft<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
) {
  const signal = _draft<T>(id, fn);
  patchFills[key] = signal as Signal<unknown>;
  return signal;
}

/**
 * The `<draft>` tag's signal: a derived value that takes provisional
 * assignments (`guess`). A guess shows at once and holds while the
 * transaction that made it is open; the derivation keeps landing underneath
 * (`DraftSource`), and once every holding transaction settles the draft
 * shows the derivation again, with no DOM work when the guess was right.
 * A guess outside a transaction holds only until the next derivation.
 */
export function _draft<T>(id: EncodedAccessor, fn?: SignalFn) {
  const valueAccessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);
  const sourceAccessor = MARKO_DEBUG
    ? AccessorPrefix.DraftSource + valueAccessor
    : decodeAccessor((id as number) + 1);
  const holdsAccessor = MARKO_DEBUG
    ? AccessorPrefix.DraftHolds + valueAccessor
    : decodeAccessor((id as number) + 2);
  if (MARKO_DEBUG) {
    id = +(id as string).slice((id as string).lastIndexOf("/") + 1);
  }

  const show = (scope: Scope, value: T) => {
    if (scope[valueAccessor] !== value || !(valueAccessor in scope)) {
      scope[valueAccessor] = value;
      if (fn) {
        if (rendering && scope[AccessorProp.Gen] === runId) {
          fn(scope);
        } else {
          schedule();
          queueRender(scope, fn, id as number);
        }
      }
    }
  };

  return (scope: Scope, value: T, guess?: 1) => {
    if (guess) {
      // A resumed slot is its own derivation until one lands.
      if (!(sourceAccessor in scope))
        scope[sourceAccessor] = scope[valueAccessor];
      if (transaction) {
        scope[holdsAccessor] = ((scope[holdsAccessor] as number) || 0) + 1;
        transaction.push(() => {
          if (!--(scope[holdsAccessor] as number)) {
            show(scope, scope[sourceAccessor as Accessor] as T);
          }
        });
      }
      show(scope, value);
    } else {
      scope[sourceAccessor] = value;
      if (!scope[holdsAccessor]) {
        if (scope[valueAccessor] !== value || !(valueAccessor in scope)) {
          scope[valueAccessor] = value;
          fn?.(scope);
        }
      }
    }
    return value;
  };
}
