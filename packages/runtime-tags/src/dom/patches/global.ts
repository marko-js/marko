import {
  AccessorProp,
  type EncodedAccessor,
  PatchKey,
  type Scope,
} from "../../common/types";
import { queueEffect, queueRender } from "../queue";
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

// A template's declaration of the `$global` keys it reads under one set of paths (`0`
// between two; none for `$global` itself), then each signal reading them with its scopes.
type KeyDeclaration = [
  paths: (string | 0)[],
  ...signals: [run: SignalFn, scopes: ScopeSet][],
];
// The scopes a signal runs on, kept as `subscribeToScopeSet` keeps a set.
type ScopeSet = { s?: Set<Scope> };

// A signal reading `$global` keys, a key's own or an intersection of keys: it subscribes the scope
// it runs on (`r` alone, as an effect reading it does), and holds what a change also runs.
type Subscriber = SignalFn & { r: SignalFn; j: SignalFn[] };

const declarations: KeyDeclaration[] = [];

export function _global_key(...paths: (string | 0)[]): KeyDeclaration {
  // A declaration some shipped signal holds brings the patcher that runs it.
  patchers[PatchKey.Global] = patchGlobal;
  const declaration: KeyDeclaration = [paths];
  declarations.push(declaration);
  return declaration;
}

// The key's signal in a section, holding its scopes as a closure's owner holds its subscribers
// (by `id` from a document); with `walk` their owner, whose change walks them (`_if_closure`).
export function _global_closure(
  declaration: KeyDeclaration,
  id?: string,
  fn?: SignalFn,
  walk?: (run: SignalFn) => SignalFn,
): Subscriber {
  const scopes: ScopeSet = {};
  const j: SignalFn[] = [];
  const subscribe = (scope: Scope) => subscribeToScopeSet(scopes, "s", scope);
  const r = walk
    ? (scope: Scope) => subscribe(scope[AccessorProp.Owner]!)
    : subscribe;
  const run = (scope: Scope) => {
    if (fn) queueRender(scope, fn, -1);
    for (const change of j) queueRender(scope, change, -1);
  };
  const signal = (scope: Scope) => {
    r(scope);
    if (fn) queueRender(scope, fn, -1);
  };
  if (id) _resumed[id] = subscribe;
  declaration.push([walk ? walk(run) : run, scopes]);
  signal.r = r;
  signal.j = j;
  return signal;
}

export function _global_if(
  declaration: KeyDeclaration,
  ownerConditionalNodeAccessor: EncodedAccessor,
  branch: number,
  id?: string,
  fn?: SignalFn,
) {
  return _global_closure(declaration, id, fn, (run) =>
    _if_closure(ownerConditionalNodeAccessor, branch, run),
  );
}

export function _global_for(
  declaration: KeyDeclaration,
  ownerLoopNodeAccessor: EncodedAccessor,
  id?: string,
  fn?: SignalFn,
) {
  return _global_closure(declaration, id, fn, (run) =>
    _for_closure(ownerLoopNodeAccessor, run, -1),
  );
}

// An intersection of keys with a section's values, which the key signals run on a change
// with the effects reading it; its run subscribes its scope, as an effect of it does by `r`.
export function _global_or(fn: SignalFn, ...signals: Subscriber[]): Subscriber {
  const effects: SignalFn[] = [];
  const intersection = (scope: Scope) => {
    intersection.r(scope);
    fn(scope);
    for (const effect of effects) effect(scope);
  };
  intersection.r = (scope: Scope) => {
    for (const signal of signals) signal.r(scope);
  };
  intersection.j = effects;
  for (const signal of signals) signal.j.push(intersection);
  return intersection;
}

// Like `_script`, for an effect reading `$global` keys: its run, and so its resume,
// subscribes its scope by the signals it reads through, which run it on a change.
export function _global_script(
  id: string,
  fn: SignalFn,
  ...signals: Subscriber[]
) {
  const effect = (_resumed[id] = (scope: Scope) => {
    for (const signal of signals) signal.r(scope);
    fn(scope);
  });
  const queue = (scope: Scope) => queueEffect(scope, effect);
  for (const signal of signals) signal.j.push(queue);
  return queue;
}

// Each key a patch changes runs its signals on this render's scopes, then the globals
// land. A path changes where the patch carries its first key and its value differs.
function patchGlobal(
  live: Scope,
  _accessor: string,
  value: Record<string, unknown>,
) {
  const held = live[AccessorProp.Global];
  for (const [paths, ...signals] of declarations) {
    let changed = 0;
    if (!paths.length) {
      for (const key in value) if (held[key] !== value[key]) changed = 1;
    }
    for (
      let i = 0,
        heldValue: Record<string, any> | undefined = held,
        nextValue: Record<string, any> | undefined = value,
        first: string | 0 = 0;
      i <= paths.length;
      i++
    ) {
      const key = paths[i];
      if (key) {
        first ||= key;
        heldValue = heldValue?.[key];
        nextValue = nextValue?.[key];
      } else {
        if (first in value && heldValue !== nextValue) changed = 1;
        heldValue = held;
        nextValue = value;
        first = 0;
      }
    }
    if (changed) {
      for (const [run, scopes] of signals) {
        // Only this render's scopes: another render on the page reads its own `$global`.
        scopes.s?.forEach(
          (scope) => scope[AccessorProp.Global] === held && run(scope),
        );
      }
    }
  }
  Object.assign(held, value);
}
