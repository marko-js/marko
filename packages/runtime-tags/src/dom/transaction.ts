import { decodeAccessor } from "../common/helpers";
import type { Accessor, EncodedAccessor, Scope } from "../common/types";
import { queueRender } from "./queue";
import { schedule } from "./schedule";
import type { Signal, SignalFn } from "./signals";

// A transaction is the client-only lifetime of a single user act: it opens when
// an `<action>` is invoked (or lazily when a draft is assigned during an event
// dispatch), is extended by promises and navigations, and releases when all of
// them settle. Nothing here is ever serialized. Members are single-letter to
// keep the runtime small: c=outstanding count, d=touched drafts, p=pending cells.
interface Transaction {
  c: number;
  d?: Set<DraftControl>;
  p?: PendingCell[];
}

// The extra per-instance state a draft only grows once a transaction assigns to
// it: s=scope, a=accessor, k=render key, f=downstream, v=confirmed source, and
// e=still-held guesses in write order.
interface DraftControl {
  s: Scope;
  a: Accessor;
  k: number;
  f: SignalFn | undefined;
  v: unknown;
  e: Map<Transaction, unknown>;
}

// s=scope, g=pending signal, n=outstanding act count.
interface PendingCell {
  s: Scope;
  g: Signal<boolean> | undefined;
  n: number;
}

interface ActionRunner {
  (this: unknown, ...args: unknown[]): unknown;
  fn: (...args: unknown[]) => unknown;
  readonly pending: boolean;
}

let currentTransaction: Transaction | undefined;
const draftControls = new WeakMap<Scope, Map<Accessor, DraftControl>>();

// The source signal renders exactly like `<const>` (dirty-checked value +
// downstream), except a held guess intercepts source changes as truth updates
// underneath it. Draft assignments go through the attached `.d` method instead,
// so an initial render is never mistaken for one.
export interface DraftSignal<T = unknown> extends Signal<T> {
  d(scope: Scope, value: T): void;
}
export function _draft<T>(id: EncodedAccessor, fn?: SignalFn) {
  const accessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);
  const key = MARKO_DEBUG
    ? +(id as string).slice((id as string).lastIndexOf("/") + 1)
    : (id as number);

  const draft = ((scope: Scope, source: T) => {
    const control = draftControls.get(scope)?.get(accessor);
    if (control) {
      control.v = source;
    } else if (scope[accessor] !== source || !(accessor in scope)) {
      scope[accessor] = source;
      fn?.(scope);
    }
  }) as DraftSignal<T>;

  draft.d = (scope, value) => {
    if (MARKO_DEBUG && typeof value === "function") {
      console.warn(
        "Assigning a function to a draft is reserved for a future updater " +
          "form; wrap it in an object or array if a function really is the " +
          "value.",
      );
    }
    const transaction = (currentTransaction ||= ambientTransaction());
    let controls = draftControls.get(scope);
    if (!controls) draftControls.set(scope, (controls = new Map()));
    let control = controls.get(accessor);
    if (!control) {
      controls.set(
        accessor,
        (control = {
          s: scope,
          a: accessor,
          k: key,
          f: fn,
          v: scope[accessor],
          e: new Map(),
        }),
      );
    }
    // Delete first so a re-assignment moves the entry to newest in write order.
    control.e.delete(transaction);
    control.e.set(transaction, value);
    (transaction.d ||= new Set()).add(control);
    writeDraft(control, value);
  };

  return draft;
}

// A stable callable whose identity survives `.pending` flips: reused from the
// scope slot on every render so the const dirty-check never re-binds handlers.
// The live `.pending` getter keeps the compiler's property forwarding in sync;
// reactive updates come from driving `pendingSignal` directly as acts settle.
export function _action(
  scope: Scope,
  accessor: EncodedAccessor,
  pendingSignal: Signal<boolean> | undefined,
  fn: ActionRunner["fn"],
) {
  const valueAccessor = MARKO_DEBUG
    ? accessor
    : decodeAccessor(accessor as number);
  let runner = scope[valueAccessor as Accessor] as ActionRunner | undefined;
  if (!runner) {
    const cell: PendingCell = { s: scope, g: pendingSignal, n: 0 };
    runner = function (this: unknown, ...args: unknown[]) {
      return invokeAction(cell, runner!.fn, this, args);
    } as ActionRunner;
    Object.defineProperty(runner, "pending", { get: () => cell.n > 0 });
  }
  runner.fn = fn;
  return runner;
}

// Lets a navigation (or the router driving one) join the transaction of the act
// that caused it: call while that transaction is current (e.g. during the
// dispatch that assigned a draft) and invoke the returned release when the
// navigation settles — or never, when the page itself is being replaced.
export function extendTransaction() {
  let transaction: Transaction | undefined = (currentTransaction ||=
    ambientTransaction());
  transaction.c++;
  return () => {
    if (transaction) {
      settle(transaction);
      transaction = undefined;
    }
  };
}

function invokeAction(
  cell: PendingCell,
  fn: ActionRunner["fn"],
  thisArg: unknown,
  args: unknown[],
) {
  const transaction: Transaction = { c: 1 };
  setPending(cell, 1, transaction);
  const previous = currentTransaction;
  currentTransaction = transaction;
  try {
    let result = fn.apply(thisArg, args);
    if (result && typeof (result as PromiseLike<unknown>).then === "function") {
      transaction.c++;
      // Chain (rather than only observe) so a rejection the caller ignores
      // still reports as an unhandled rejection.
      result = (result as PromiseLike<unknown>).then(
        (value) => (settle(transaction), value),
        (error) => {
          settle(transaction);
          throw error;
        },
      );
    } else if (MARKO_DEBUG && transaction.c === 1 && transaction.d) {
      console.warn(
        "An `<action>` assigned a draft but released before it could matter. " +
          "Make the body async, return a promise, or rely on a router that " +
          "extends the transaction.",
      );
    }
    return result;
  } finally {
    currentTransaction = previous;
    settle(transaction);
  }
}

// A draft assigned with no ambient act (a bare inline handler) still gets a
// transaction; with nothing to extend it, it releases on the next microtask.
function ambientTransaction(): Transaction {
  const transaction: Transaction = { c: 1 };
  queueMicrotask(() => settle(transaction));
  return transaction;
}

function settle(transaction: Transaction) {
  if (!--transaction.c) {
    if (transaction === currentTransaction) currentTransaction = undefined;
    if (transaction.d) {
      for (const control of transaction.d) {
        control.e.delete(transaction);
        let value = control.v;
        for (const held of control.e.values()) value = held;
        if (!control.e.size) {
          draftControls.get(control.s)?.delete(control.a);
        }
        writeDraft(control, value);
      }
    }
    if (transaction.p) {
      for (const cell of transaction.p) setPending(cell, -1);
    }
  }
}

function writeDraft(control: DraftControl, value: unknown) {
  if (control.s[control.a] !== value) {
    control.s[control.a] = value;
    if (control.f) {
      schedule();
      queueRender(control.s, control.f, control.k);
    }
  }
}

function setPending(
  cell: PendingCell,
  delta: number,
  transaction?: Transaction,
) {
  if (transaction) (transaction.p ||= []).push(cell);
  const was = cell.n;
  cell.n += delta;
  if (cell.g && !was !== !cell.n) {
    cell.g(cell.s, cell.n > 0);
  }
}
