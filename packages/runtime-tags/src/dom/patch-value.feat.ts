import type { Accessor, Scope } from "../common/types";
import { PatchKey } from "../common/types";
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

// Plain patched writes; change stamps bump per accessor so `patch-effect`
// re-runs readers exactly when their read changed.
export const kStamps = Symbol();

type Stamped = Scope & { [kStamps]?: Record<Accessor, number> };

constructPatchers[PatchKey.Write] = patchers[PatchKey.Write] = (
  scope: Stamped,
  key,
  value,
) => {
  const accessor = key.slice(PatchKey.Write.length) as Accessor;
  if (scope[accessor] !== value || !(accessor in scope)) {
    scope[accessor] = value;
    (scope[kStamps] ??= {})[accessor] = -~scope[kStamps]![accessor];
  }
};

// A bind installs a handler the way CSR setup does: anchored at the scope
// its factory was registered against, writing down the child-link path
// (`[registerId, ...links, slot]`) after the walk so freshly constructed
// targets exist. Any break — poison `0`, missing link, missing
// registration — rejects the patch.
patchers[PatchKey.Bind] = (scope, _key, entry) => {
  if (!entry) failPatch();
  queueEffect(scope, (scope) => {
    const [registerId, ...path] = entry as [string, ...string[]];
    const slot = path.pop() as Accessor;
    let target = scope;
    for (const link of path) {
      target = (target[link as Accessor] || failPatch()) as Scope;
    }
    target[slot] = (
      (getRegisteredWithScope(registerId) || failPatch()) as (
        scope: Scope,
      ) => unknown
    )(scope);
  });
};
