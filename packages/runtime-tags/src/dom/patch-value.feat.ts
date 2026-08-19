import "./patch-write";
import { type Opt, toArray } from "../common/opt";
import type { Accessor, Scope } from "../common/types";
import { AccessorProp, PatchKey } from "../common/types";
import { queueEffect } from "./queue";
import {
  constructPatchers,
  failPatch,
  getRegisteredWithScope,
  patchers,
} from "./resume";
import { patchFills } from "./signals";

// A soft miss is a fill whose intersection was tree-shaken: nothing to
// update. A construct's seed missing means required client code is gone.
patchers[PatchKey.Value] = (scope, key, value) =>
  patchFills[key.slice(PatchKey.Value.length)]?.(scope, value);
constructPatchers[PatchKey.Value] = (scope, key, value) =>
  (patchFills[key.slice(PatchKey.Value.length)] || failPatch())(scope, value);

// A bind installs a handler the way CSR setup does: anchored at the scope
// its factory was registered against, writing down the child-link path
// (`[registerId, ...links, slot]`) after the apply so freshly constructed
// targets exist. Any break — poison `0`, missing link, missing
// registration — rejects the patch.
patchers[PatchKey.Bind] = (scope, _key, entry) => {
  if (!entry) failPatch();
  queueEffect(scope, (scope) => {
    const [registerId, ...path] = entry as [
      string,
      ...(string | [string, unknown])[],
    ];
    const slot = path.pop() as Accessor;
    let target = scope;
    for (const link of path) {
      // A keyed hop selects among loop scopes by their loop key.
      target = (
        Array.isArray(link)
          ? toArray(target[link[0] as Accessor] as Opt<Scope>).find(
              (branch, i) =>
                ((branch as Scope)[AccessorProp.LoopKey] ?? i) === link[1],
            )
          : target[link as Accessor]
      ) as Scope;
      if (!target) failPatch();
    }
    target[slot] = (
      (getRegisteredWithScope(registerId) || failPatch()) as (
        scope: Scope,
      ) => unknown
    )(scope);
  });
};
