import {
  type Accessor,
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import type { Renderer } from "../renderer";
import "./write";
import { getRegisteredWithScope } from "../resume";
import { getLoopItem, installBindRef } from "./apply";
import { createPatchers, patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Bind]: OwnerBound;
    [PatchKey.BindValue]: OwnerBound;
  }
}

// A registration bound to the site's scope (bare id) or the owner `up` hops
// away; `locals` are render-only values (a loop's) its factory also takes.
type OwnerBound = string | [registerId: string, up: number, ...locals: Scope[]];

patchers[PatchKey.Bind] = createPatchers[PatchKey.Bind] = (
  scope,
  key,
  entry,
) => {
  scope[key.slice(PatchKey.Bind.length) as Accessor] = resolveOwnerBound(
    scope,
    entry,
  );
};

// A fill whose value is owner-bound applies as its `Value` entry would (a
// fill's site links `patches/value`).
patchers[PatchKey.BindValue] = resolvedFill(patchers);
createPatchers[PatchKey.BindValue] = resolvedFill(createPatchers);

// Any other bound registration is its scope's path from the page root,
// walked on use since the flush may not have created that scope yet; a
// function closing over render-only locals takes them as its scope instead.
installBindRef((root, path, id, bound) => {
  const resolve = () => {
    let scope = root;
    for (const hop of path) {
      scope =
        typeof hop === "string"
          ? (scope[hop as Accessor] as Scope)
          : getLoopItem(scope, hop[0], hop[1])!;
    }
    return scope;
  };
  return bound === 1
    ? Object.defineProperty(
        getRegisteredWithScope<(owner?: Scope) => Renderer>(id)(),
        RendererProp.Owner,
        { get: resolve },
      )
    : (...args: unknown[]) =>
        getRegisteredWithScope<(...args: unknown[]) => unknown>(
          id,
          bound ? ((bound[AccessorProp.Owner] = resolve()), bound) : resolve(),
        )(...args);
});

function resolvedFill(fills: typeof patchers) {
  return (scope: Scope, key: string, entry: OwnerBound) =>
    fills[PatchKey.Value]!(
      scope,
      PatchKey.Value + key.slice(PatchKey.BindValue.length),
      resolveOwnerBound(scope, entry),
    );
}

function resolveOwnerBound(scope: Scope, entry: OwnerBound) {
  const bound: Exclude<OwnerBound, string> =
    typeof entry === "string" ? [entry, 0] : entry;
  let owner = scope;
  for (let up = bound[1]; up--;) owner = owner[AccessorProp.Owner]!;
  return getRegisteredWithScope<(...args: Scope[]) => unknown>(bound[0])(
    owner,
    ...(bound.slice(2) as Scope[]),
  );
}
