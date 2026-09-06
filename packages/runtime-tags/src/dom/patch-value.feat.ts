import "./patch-write";
import { type Opt, toArray } from "../common/opt";
import type { Accessor, Scope } from "../common/types";
import { AccessorProp, PatchKey } from "../common/types";
import { queueEffect } from "./queue";
import { constructPatchers, getRegisteredWithScope, patchers } from "./resume";
import { patchFills } from "./signals";

// A soft miss is a fill whose intersection was tree-shaken: nothing to
// update. A construct's seed is required, so a miss crashes to reject.
patchers[PatchKey.Value] = (scope, key, value) =>
  patchFills[key.slice(PatchKey.Value.length)]?.(scope, value);
constructPatchers[PatchKey.Value] = (scope, key, value) =>
  patchFills[key.slice(PatchKey.Value.length)](scope, value);

// A bind installs a handler the way CSR setup does, after the apply so
// freshly constructed targets exist. The path walks from the site to the
// registered scope: owner hops up, then links (keyed for loops) down.
patchers[PatchKey.Bind] = (scope, _key, entry) => {
  queueEffect(scope, (scope) => {
    const [registerId, up, ...path] = entry as [
      string,
      number,
      ...(string | [string, unknown])[],
    ];
    const slot = path.pop() as Accessor;
    let source = scope;
    for (let i = up; i--;) source = source[AccessorProp.Owner]!;
    for (const link of path) {
      source = (
        Array.isArray(link)
          ? toArray(source[link[0] as Accessor] as Opt<Scope>).find(
              (branch, i) =>
                ((branch as Scope)[AccessorProp.LoopKey] ?? i) === link[1],
            )
          : source[link as Accessor]
      ) as Scope;
    }
    scope[slot] = (
      getRegisteredWithScope(registerId) as (scope: Scope) => unknown
    )(source);
  });
};
