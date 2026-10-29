import { decodeAccessor } from "../../common/helpers";
import { toArray } from "../../common/opt";
import {
  AccessorPrefix,
  AccessorProp,
  type EncodedAccessor,
  PatchKey,
  type Scope,
} from "../../common/types";
import { queueEffect, queueRender } from "../queue";
import { _resumed } from "../resume";
import { type SignalFn, subscribeToScopeSet } from "../signals";
import { patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Globals]: Record<string, unknown>;
  }
}

// Signals reading `$global`, by id, with the keys each reads (`""`: the whole object;
// a `0` ends each member where one is nested).
const globalSignals: Record<string, [SignalFn, (string | 0)[]]> = {};
// The scopes subscribed to each signal, by its id, from every render on the page.
const globalScopes: Record<string, Set<Scope> | undefined> = {};

export function _fill_global(
  id: string,
  signal: SignalFn,
  ...keys: (string | 0)[]
): SignalFn {
  // A retained signal brings the patcher that re-runs it.
  patchers[PatchKey.Globals] = patchGlobals;
  // A scope the document subscribes does so on resume, unless an effect of this id
  // registered first: it subscribes as it runs.
  _resumed[id] ||= (scope: Scope) =>
    subscribeToScopeSet(globalScopes, id, scope);
  return (globalSignals[id] = [
    (scope: Scope) => {
      signal(scope);
      subscribeToScopeSet(globalScopes, id, scope);
    },
    keys,
  ])[0];
}

// A signal a loop's rows read: the loop's owner subscribes once and a changed member
// walks its rows, as a loop closure does, so a row the client creates subscribes to none.
export function _fill_global_for(
  id: string,
  ownerLoopNodeAccessor: EncodedAccessor,
  signal: SignalFn,
  ...keys: (string | 0)[]
): SignalFn {
  const rows =
    AccessorPrefix.BranchScopes +
    (MARKO_DEBUG
      ? ownerLoopNodeAccessor
      : decodeAccessor(ownerLoopNodeAccessor as number));
  _fill_global(
    id,
    (owner: Scope) => {
      for (const row of toArray(owner[rows as keyof Scope] as Scope))
        signal(row);
    },
    ...keys,
  );
  return (scope: Scope) => {
    signal(scope);
    subscribeToScopeSet(globalScopes, id, scope[AccessorProp.Owner]!);
  };
}

// Like `_script`, but a change to a `$global` member it reads re-runs it on every
// scope it ran on.
export function _fill_global_script(
  id: string,
  fn: (scope: Scope) => void,
  ...keys: (string | 0)[]
) {
  const effect = (_resumed[id] = (scope: Scope) => {
    fn(scope);
    subscribeToScopeSet(globalScopes, id, scope);
  });
  const queue = (scope: Scope) => queueEffect(scope, effect);
  _fill_global(id, queue, ...keys);
  return queue;
}

// Registrations with a nested member, each member ending in `0`: only a page
// with one checks paths, and only on such registrations.
export function _fill_global_path(
  id: string,
  signal: SignalFn,
  ...keys: (string | 0)[]
): SignalFn {
  changesMember = membersChanged;
  return _fill_global(id, signal, ...keys, 0);
}
export function _fill_global_path_for(
  id: string,
  ownerLoopNodeAccessor: EncodedAccessor,
  signal: SignalFn,
  ...keys: (string | 0)[]
): SignalFn {
  changesMember = membersChanged;
  return _fill_global_for(id, ownerLoopNodeAccessor, signal, ...keys, 0);
}
export function _fill_global_path_script(
  id: string,
  fn: (scope: Scope) => void,
  ...keys: (string | 0)[]
) {
  changesMember = membersChanged;
  return _fill_global_script(id, fn, ...keys, 0);
}
let changesMember: typeof membersChanged | undefined;

// Each signal reading a member the patch changes re-runs once per live scope, then
// the globals land; a later (calling) signal sorts first within a scope (`order`).
function patchGlobals(
  live: Scope,
  _accessor: string,
  value: Record<string, unknown>,
  order = 0,
) {
  const changed: string[] = [];
  for (const key in value) {
    if (live[AccessorProp.Global][key] !== value[key]) {
      changed.push(key);
    }
  }
  // A whole-object read (`""`) re-runs on any change.
  if (changed.length) changed.push("");
  for (const id in globalSignals) {
    order--;
    if (
      changesMember && globalSignals[id][1].includes(0)
        ? changesMember(
            globalSignals[id][1],
            changed,
            live[AccessorProp.Global],
            value,
          )
        : globalSignals[id][1].some((key) => changed.includes(key as string))
    ) {
      // Only this render's scopes: another's reads its own `$global`.
      globalScopes[id]?.forEach(
        (scope) =>
          scope[AccessorProp.Gen] &&
          scope[AccessorProp.Global] === live[AccessorProp.Global] &&
          queueRender(scope, globalSignals[id][0], order),
      );
    }
  }
  Object.assign(live[AccessorProp.Global], value);
}

// A path registration's members: one changes where its key changed and the value
// at its path differs.
function membersChanged(
  keys: (string | 0)[],
  changed: string[],
  held: unknown,
  next: unknown,
) {
  let heldValue = held,
    nextValue = next,
    first: string | undefined;
  for (const key of keys) {
    if (key !== 0) {
      first ??= key;
      heldValue = (heldValue as Record<string, unknown> | undefined)?.[key];
      nextValue = (nextValue as Record<string, unknown> | undefined)?.[key];
    } else if (changed.includes(first!) && heldValue !== nextValue) {
      return 1;
    } else {
      heldValue = held;
      nextValue = next;
      first = undefined;
    }
  }
}
