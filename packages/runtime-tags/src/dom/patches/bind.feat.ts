import {
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import type { Renderer } from "../renderer";
import "./write.feat";
import { getRegisteredWithScope } from "../resume";
import {
  getLoopItem,
  installBindRef,
  type PatchHop,
  patchers,
  patchFills,
  setupPatchers,
} from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Bind]: OwnerBound;
    [PatchKey.BindFill]: OwnerBound;
  }
}

// A registration bound to its owner: its id behind a `^` per hop up, then one
// slot, the hops down to an owner below (a `<return>`) or content's locals.
export type OwnerBound =
  | string
  | [registerId: string, downOrLocals: PatchHop[] | Scope];

patchers[PatchKey.Bind] = setupPatchers[PatchKey.Bind] = (
  scope,
  accessor,
  entry,
) => {
  scope[accessor] = makeBoundFn(scope, entry);
};
patchers[PatchKey.BindFill] = setupPatchers[PatchKey.BindFill] = (
  scope,
  key,
  entry,
) => patchFills[key](scope, makeBoundFn(scope, entry));

// Any other bound registration is its scope's path from the page root, walked on use
// (the flush may not have created it yet); one over render-only locals takes those.
installBindRef((root, path, id, bound) => {
  const resolve = (_?: never) => {
    let scope = root;
    for (const hop of path) {
      scope =
        typeof hop === "string"
          ? (scope[hop] as Scope)
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

// A bind makes its function anew; where a page compares identity, its owner's
// record keeps one (`patches/marked-bind`).
let makeBoundFn = (owner: Scope, entry: OwnerBound) => {
  const id = typeof entry === "string" ? entry : entry[0];
  let up = 0;
  for (; id[up] === "^"; up++) owner = owner[AccessorProp.Owner]!;
  const factory = getRegisteredWithScope<
    (owner: Scope, local?: unknown) => unknown
  >(id.slice(up));
  // Content takes its local values beside its owner; a function's ride its
  // reference, which binds it to one scope as main does (`installBindRef`).
  return id === entry ? factory(owner) : factory(owner, entry[1]);
};
export function installBoundFnResolver(resolve: typeof makeBoundFn) {
  makeBoundFn = resolve;
}
