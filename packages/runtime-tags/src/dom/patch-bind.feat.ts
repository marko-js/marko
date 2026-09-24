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

// A registration bound to the site's scope (its bare id) or to an owner `up`
// hops away, resolved as the entry applies; its captures refresh by writes.
type OwnerBound = string | [registerId: string, up: number];

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

// Any other bound registration is a reference: its scope's path from the page
// root, walked on use (the flush may create that scope). Content resolves to
// its renderer, owned by that scope; a function to a call through it.
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
  const registerId = typeof entry === "string" ? entry : entry[0];
  for (let up = typeof entry === "string" ? 0 : entry[1]; up--;) {
    scope = scope[AccessorProp.Owner]!;
  }
  return getRegisteredWithScope<(scope: Scope) => unknown>(registerId)(scope);
}
