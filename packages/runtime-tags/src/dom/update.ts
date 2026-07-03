// Client runtime for persisted update entries (`?update` modules). Update
// entries are compiled merge functions that apply a server patch to live
// scopes; they share the main template module's compiled pieces through the
// resume registry instead of duplicating them:
// - value/conditional signals are registered with `_var_resume` by persisted
//   dom builds and invoked here via `_update_signal`.
// - loop branch content (`[template, walks, setup]`) is registered with
//   `_resume` so `_update_for` can build a `_for_of` instance whose params
//   signal is the update entry's own body merge function (the main loop
//   signal's params render from real items, which a patch scope is not).
import type { Scope } from "../common/types";
import { _for_of } from "./control-flow";
import { getRegisteredWithScope } from "./resume";

type UpdateSignal = (scope: Scope, value: unknown) => void;

export function _update_signal(id: string): UpdateSignal {
  return (scope, value) =>
    (getRegisteredWithScope(id, scope) as (value: unknown) => void)(value);
}

export function _update_for(
  nodeAccessor: string | number,
  contentId: string,
  merge: (branchScope: Scope, args: unknown[]) => void,
): UpdateSignal {
  let signal: UpdateSignal | undefined;
  return (scope, value) => {
    if (!signal) {
      const content = getRegisteredWithScope(contentId) as [any, any, any];
      signal = _for_of(
        nodeAccessor as string,
        content[0],
        content[1],
        content[2],
        merge as any,
      ) as UpdateSignal;
    }
    signal(scope, value);
  };
}
