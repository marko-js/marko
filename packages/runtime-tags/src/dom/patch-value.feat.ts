import type { Accessor, Scope } from "../common/types";
import { PatchKey } from "../common/types";
import { getRegisteredWithScope, patchers } from "./resume";
import { patchFills } from "./signals";

// A miss is a fill whose intersection was tree-shaken: nothing to update.
patchers[PatchKey.Value] = (scope, key, value) =>
  patchFills[key.slice(PatchKey.Value.length)]?.(scope, value);

// Plain patched writes; change stamps bump per accessor so `patch-effect`
// re-runs readers exactly when their read changed.
export const kStamps = Symbol();

type Stamped = Scope & { [kStamps]?: Record<Accessor, number> };

patchers[PatchKey.Write] = (scope: Stamped, key, value) => {
  const accessor = key.slice(PatchKey.Write.length) as Accessor;
  if (scope[accessor] !== value || !(accessor in scope)) {
    scope[accessor] = value;
    (scope[kStamps] ??= {})[accessor] = -~scope[kStamps]![accessor];
  }
};

// Construct wiring shipped as a register id: resolve it bound to the LIVE
// scope being constructed (a factory receives the scope).
patchers[PatchKey.Bind] = (scope, key, id) => {
  scope[key.slice(PatchKey.Bind.length) as Accessor] = getRegisteredWithScope(
    id as string,
    scope,
  );
};
