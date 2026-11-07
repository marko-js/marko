import { AccessorProp, PatchKey, type Scope } from "../../common/types";
import { queueRender } from "../queue";
import { _resumed } from "../resume";
import { type SignalFn, subscribeToScopeSet } from "../signals";
import { patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Global]: Record<string, unknown>;
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
  patchers[PatchKey.Global] = patchGlobal;
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

// A registration with a nested member, ending in `0`: only a page with one
// checks paths, and only on such registrations.
export function _fill_global_path(
  id: string,
  signal: SignalFn,
  ...keys: (string | 0)[]
): SignalFn {
  changesMember = membersChanged;
  return _fill_global(id, signal, ...keys, 0);
}
// The same, for a member whose document scopes subscribe on resume: no shipped code
// reaches it, so its registration ships it.
export {
  _fill_global as _fill_global_resume,
  _fill_global_path as _fill_global_path_resume,
};
let changesMember: typeof membersChanged | undefined;

// Each signal reading a member the patch changes re-runs once per live scope, then
// the globals land; a later (calling) signal sorts first within a scope (`order`).
function patchGlobal(
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
  let heldValue = held;
  let nextValue = next;
  let first: string | undefined;
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
