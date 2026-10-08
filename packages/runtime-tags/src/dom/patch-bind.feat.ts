import {
  type Accessor,
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import { getLoopItem, installBindRef } from "./patch";
import "./patch-write";
import type { Renderer } from "./renderer";
import { createPatchers, getRegisteredWithScope, patchers } from "./resume";

declare module "./resume" {
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
// fill's site links `patch-value`).
patchers[PatchKey.BindValue] = resolvedFill(patchers);
createPatchers[PatchKey.BindValue] = resolvedFill(createPatchers);

// Any other bound registration is its scope's path from the page root,
// walked on use since the flush may not have created that scope yet.
installBindRef((root, path, id, content) => {
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
  return content
    ? Object.defineProperty(
        getRegisteredWithScope<(owner?: Scope) => Renderer>(id)(),
        RendererProp.Owner,
        { get: resolve },
      )
    : (...args: unknown[]) =>
        getRegisteredWithScope<(...args: unknown[]) => unknown>(
          id,
          resolve(),
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
  if (typeof entry === "string") entry = [entry, 0];
  for (let up = entry[1]; up--;) scope = scope[AccessorProp.Owner]!;
  return getRegisteredWithScope<(...args: Scope[]) => unknown>(entry[0])(
    scope,
    ...(entry.slice(2) as Scope[]),
  );
}
