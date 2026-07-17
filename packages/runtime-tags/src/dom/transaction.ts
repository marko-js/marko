import { decodeAccessor } from "../common/helpers";
import type { Accessor, EncodedAccessor, Scope } from "../common/types";
import { queueRender } from "./queue";
import { schedule } from "./schedule";
import type { Signal, SignalFn } from "./signals";

// A transaction is the client-only lifetime of a single user act: it opens when
// an `<action>` is invoked (or lazily when a draft is assigned during an event
// dispatch), is extended by the invocation's returned promise, and releases
// when all of its promises settle. Nothing here is ever serialized. Members are
// single-letter to keep the runtime small: c=outstanding promise count,
// d=touched drafts, p=pending cells, x=released; only `c` needs an initializer.
interface Transaction {
  c: number;
  d?: Set<DraftControl>;
  p?: PendingCell[];
  x?: 0 | 1;
}

// The extra per-instance state a draft only grows once a transaction assigns to
// it: the confirmed source underneath and the still-held guesses in write order.
interface DraftControl {
  scope: Scope;
  accessor: Accessor;
  key: number;
  fn: SignalFn | undefined;
  source: unknown;
  entries: Map<Transaction, unknown>;
}

interface PendingCell {
  scope: Scope;
  signal: Signal<boolean> | undefined;
  n: number;
}

interface ActionRunner {
  (this: unknown, ...args: unknown[]): unknown;
  fn: ((...args: unknown[]) => unknown) | undefined;
  cell: PendingCell;
  readonly pending: boolean;
}

let currentTransaction: Transaction | undefined;
const draftControls = new WeakMap<Scope, Map<Accessor, DraftControl>>();

// The source signal renders exactly like `<const>` (dirty-checked value +
// downstream), except a held guess intercepts source changes as truth updates
// underneath it. Draft assignments go through the attached `.d` method instead,
// so an initial render (which also runs with `rendering` unset) is never
// mistaken for one.
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
      control.source = source;
    } else if (scope[accessor] !== source || !(accessor in scope)) {
      scope[accessor] = source;
      fn?.(scope);
    }
  }) as DraftSignal<T>;

  draft.d = (scope, value) => {
    const transaction = (currentTransaction ||= ambientTransaction());
    let controls = draftControls.get(scope);
    if (!controls) draftControls.set(scope, (controls = new Map()));
    let control = controls.get(accessor);
    if (!control) {
      controls.set(
        accessor,
        (control = {
          scope,
          accessor,
          key,
          fn,
          source: scope[accessor],
          entries: new Map(),
        }),
      );
    }
    control.entries.set(transaction, value);
    (transaction.d ||= new Set()).add(control);
    writeDraft(control, value);
  };

  return draft;
}

function writeDraft(control: DraftControl, value: unknown) {
  const { scope, accessor } = control;
  if (scope[accessor] !== value) {
    scope[accessor] = value;
    if (control.fn) {
      schedule();
      queueRender(scope, control.fn, control.key);
    }
  }
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
    const cell: PendingCell = { scope, signal: pendingSignal, n: 0 };
    runner = function (this: unknown, ...args: unknown[]) {
      return invokeAction(cell, runner!.fn, this, args);
    } as ActionRunner;
    runner.cell = cell;
    Object.defineProperty(runner, "pending", { get: () => cell.n > 0 });
  }
  runner.fn = fn;
  return runner;
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
    const result = fn && fn.apply(thisArg, args);
    if (result && typeof (result as PromiseLike<unknown>).then === "function") {
      transaction.c++;
      (result as PromiseLike<unknown>).then(
        () => settle(transaction),
        () => settle(transaction),
      );
    }
    return result;
  } finally {
    currentTransaction = previous;
    settle(transaction);
    if (MARKO_DEBUG && transaction.x && transaction.d?.size) {
      console.warn(
        "An `<action>` assigned a draft but released before it could matter. " +
          "Make the body async, return a promise, or rely on a router that " +
          "extends the transaction.",
      );
    }
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
    transaction.x = 1;
    if (transaction === currentTransaction) currentTransaction = undefined;
    if (transaction.d) {
      for (const control of transaction.d) {
        control.entries.delete(transaction);
        let value = control.source;
        for (const held of control.entries.values()) value = held;
        if (!control.entries.size) {
          draftControls.get(control.scope)?.delete(control.accessor);
        }
        writeDraft(control, value);
      }
    }
    if (transaction.p) {
      for (const cell of transaction.p) setPending(cell, -1);
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
  if (cell.signal && !was !== !cell.n) {
    cell.signal(cell.scope, cell.n > 0);
  }
}
