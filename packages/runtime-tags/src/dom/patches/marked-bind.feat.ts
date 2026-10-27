import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RenderDataProp,
  type Scope,
} from "../../common/types";
import { getRegisteredWithScope, installBoundFnRevive } from "../resume";
import { getLoopItem, patchers, patchRender } from "./apply";
import { installBoundFnResolver, type OwnerBound } from "./bind.feat";
import { liveCaptures, reviveBoundFn } from "./signals";

// Where a page compares a bound function's identity (a marked slot, a fill, a
// live function), a bind marks its slot only for a new one.
installBoundFnRevive(reviveBoundFn);
installBoundFnResolver(resolveBoundFn);
patchers[PatchKey.Bind] = (scope, accessor, entry) => {
  const fn = resolveBoundFn(scope, entry);
  if (scope[accessor] !== fn) {
    scope[AccessorPrefix.PatchChanged + accessor] =
      patchRender[RenderDataProp.StopPatch];
    scope[accessor] = fn;
  }
};

// One function per owner and registration, as resume revived it or a bind made
// it, made anew once per response a capture changed in; locals make it anew.
function resolveBoundFn(owner: Scope, entry: OwnerBound) {
  const id = typeof entry === "string" ? entry : entry[0];
  let up = 0,
    local = typeof entry === "object" && entry[1];
  for (; id[up] === "^"; up++) owner = owner[AccessorProp.Owner]!;
  // The hops down to an owner below (a `<return>`), else content's locals.
  if (Array.isArray(local)) {
    for (const hop of local) {
      owner =
        typeof hop === "string"
          ? (owner[hop] as Scope)
          : getLoopItem(owner, hop[0], hop[1])!;
    }
    local = false;
  }
  const registerId = id.slice(up),
    factory =
      getRegisteredWithScope<(owner: Scope, local?: Scope) => unknown>(
        registerId,
      );
  if (local) return factory(owner, local);
  const bound = (owner[AccessorPrefix.BoundFn + registerId] ||= []) as [
      change?: unknown,
      fn?: unknown,
    ],
    change = patchRender[RenderDataProp.StopPatch],
    capturesChanged = liveCaptures[registerId];
  if (
    !bound[1] ||
    (capturesChanged && bound[0] !== change && capturesChanged(owner))
  ) {
    bound[0] = change;
    bound[1] = factory(owner);
  }
  return bound[1];
}
