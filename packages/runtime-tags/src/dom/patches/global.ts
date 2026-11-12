import { decodeAccessor } from "../../common/helpers";
import {
  AccessorPrefix,
  AccessorProp,
  type Accessor,
  type EncodedAccessor,
  PatchKey,
  type Scope,
} from "../../common/types";
import { queueRender } from "../queue";
import { _resumed } from "../resume";
import {
  _for_closure,
  _if_closure,
  type SignalFn,
  subscribeToScopeSet,
} from "../signals";
import { patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Global]: Record<string, unknown>;
  }
}

// A template's registration of a `$global` key by the paths read under it (`0` between
// two; none for `$global`): what a change runs on the scopes in its set and owners walked.
interface GlobalKey {
  k: (string | 0)[];
  i: Accessor;
  p: SignalFn[];
  s?: Set<Scope>;
  w: [SignalFn, { s?: Set<Scope> }][];
}

// A section's signal of a key: it subscribes the scope it runs on (`r` alone, as an
// effect reading it does), and holds the joins of the key with the section's values.
type GlobalSignal = SignalFn & {
  j: [SignalFn, number][];
  r: (scope: Scope) => void;
};

const globalKeys: GlobalKey[] = [];

export function _global_key(
  accessor: EncodedAccessor,
  ...paths: (string | 0)[]
): GlobalKey {
  // A key some shipped signal holds brings the patcher that runs it.
  patchers[PatchKey.Global] = patchGlobal;
  const key: GlobalKey = {
    k: paths,
    i: (AccessorPrefix.ClosureSignalIndex +
      (MARKO_DEBUG
        ? accessor
        : decodeAccessor(accessor as number))) as Accessor,
    p: [],
    w: [],
  };
  globalKeys.push(key);
  return key;
}

// The key's signal in a section, which enters each scope into the key's set at its
// position, as `_closure_get` does; a scope resuming by `id` subscribes too.
export function _global_closure(id: string, key: GlobalKey, fn?: SignalFn) {
  const index = key.p.length;
  const signal = ((scope: Scope) => {
    signal.r(scope);
    if (fn) queueRender(scope, fn, -1);
  }) as GlobalSignal;
  signal.r = _resumed[id] = (scope: Scope) => {
    scope[key.i] = index;
    subscribeToScopeSet(key as never, "s", scope);
  };
  signal.j = [];
  key.p.push((scope) => renderChange(scope, fn, signal.j));
  return signal;
}

// The key's signal in an `<if>` body, whose owner subscribes once and walks the branch,
// as `_if_closure` does.
export function _global_if(
  id: string,
  key: GlobalKey,
  ownerConditionalNodeAccessor: EncodedAccessor,
  branch: number,
  fn?: SignalFn,
) {
  return walkFromOwner(id, key, fn, (render) =>
    _if_closure(ownerConditionalNodeAccessor, branch, render),
  );
}

// The key's signal in a `<for>` body, whose owner subscribes once per loop instance and
// walks the rows, as `_for_closure` does: a row subscribes nothing.
export function _global_for(
  id: string,
  key: GlobalKey,
  ownerLoopNodeAccessor: EncodedAccessor,
  fn?: SignalFn,
) {
  return walkFromOwner(id, key, fn, (render) =>
    _for_closure(ownerLoopNodeAccessor, render, -1),
  );
}

function walkFromOwner(
  id: string,
  key: GlobalKey,
  fn: SignalFn | undefined,
  walk: (render: SignalFn) => SignalFn,
) {
  const owners: { s?: Set<Scope> } = {};
  const subscribe = (_resumed[id] = (owner: Scope) =>
    subscribeToScopeSet(owners, "s", owner));
  const signal = ((scope: Scope) => {
    signal.r(scope);
    if (fn) queueRender(scope, fn, -1);
  }) as GlobalSignal;
  signal.r = (scope) => subscribe(scope[AccessorProp.Owner]!);
  signal.j = [];
  key.w.push([walk((scope) => renderChange(scope, fn, signal.j)), owners]);
  return signal;
}

// A join of keys with a section's values, which their signals there run at its slot;
// a run subscribes its scope, as an effect of it does by `r`.
export function _global_or(
  slot: number,
  fn: SignalFn,
  ...signals: GlobalSignal[]
) {
  const join = ((scope: Scope) => {
    join.r(scope);
    fn(scope);
  }) as GlobalSignal;
  join.r = (scope) => {
    for (const signal of signals) signal.r(scope);
  };
  for (const signal of signals) signal.j.push([fn, slot]);
  return join;
}

function renderChange(
  scope: Scope,
  fn: SignalFn | undefined,
  joins: [SignalFn, number][],
) {
  if (fn) queueRender(scope, fn, -1);
  for (const [join, slot] of joins) queueRender(scope, join, slot);
}

// Each key a patch changes runs its signals on this render's scopes, then the globals land.
function patchGlobal(
  live: Scope,
  _accessor: string,
  value: Record<string, unknown>,
) {
  const held = live[AccessorProp.Global];
  for (const key of globalKeys) {
    if (changes(key.k, held, value)) {
      // Only this render's scopes: another render on the page reads its own `$global`.
      key.s?.forEach(
        (scope) =>
          scope[AccessorProp.Global] === held &&
          key.p[scope[key.i] as number](scope),
      );
      for (const [walk, owners] of key.w) {
        owners.s?.forEach(
          (owner) => owner[AccessorProp.Global] === held && walk(owner),
        );
      }
    }
  }
  Object.assign(held, value);
}

// A path changes where the patch carries its first key and the value at its end differs;
// `$global` itself changes with any key.
function changes(
  paths: (string | 0)[],
  held: Record<string, unknown>,
  next: Record<string, unknown>,
) {
  if (!paths.length) {
    for (const key in next) if (held[key] !== next[key]) return 1;
    return 0;
  }
  let heldValue: unknown = held;
  let nextValue: unknown = next;
  let first: string | undefined;
  for (let i = 0; i <= paths.length; i++) {
    const key = paths[i];
    if (key === 0 || key === undefined) {
      if (first! in next && heldValue !== nextValue) return 1;
      heldValue = held;
      nextValue = next;
      first = undefined;
    } else {
      first ??= key;
      heldValue = (heldValue as Record<string, unknown> | undefined)?.[key];
      nextValue = (nextValue as Record<string, unknown> | undefined)?.[key];
    }
  }
  return 0;
}
