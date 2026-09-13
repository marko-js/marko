import { encodeAccessor } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type EncodedAccessor,
  PatchKey,
  type Scope,
} from "../common/types";
import { _dynamic_tag } from "./control-flow";
// The tag's branch pairs through a `PatchChild` entry.
import "./patch-child.feat";
import { getContent } from "./patch-shells";
import { createPatchers, getRegisteredWithScope, patchers } from "./resume";

// `[renderer, input, contentId, varId]`, a lone renderer bare; a native tag
// name is `["div"]` alone or `>div` in a longer entry, array input is args,
// and shipped content `^id` binds to the owner one `^` up per hop.
patchers[PatchKey.DynamicTag] = createPatchers[PatchKey.DynamicTag] = (
  scope,
  key,
  entry,
) => {
  const accessor = key.slice(PatchKey.DynamicTag.length) as Accessor;
  const bare = !Array.isArray(entry);
  let [renderer, input, contentId, varId] = (bare ? [entry] : entry) as [
    unknown,
    unknown,
    string | 0 | undefined,
    string | 0 | undefined,
  ];
  // A bind reference resolves owner-bound content.
  if (typeof renderer === "function") renderer = renderer();
  if (typeof renderer === "string" && (bare || input !== undefined)) {
    if (renderer[0] === ">") {
      renderer = renderer.slice(1);
    } else {
      const current = scope[
        (AccessorPrefix.ConditionalRenderer + accessor) as Accessor
      ] as string | undefined;
      let id = renderer;
      let owner = scope;
      while (id[0] === "^") {
        owner = owner[AccessorProp.Owner]!;
        id = id.slice(1);
      }
      if (!input && current?.split(" ")[0] === id) return;
      renderer = resolveContent(id, owner, owner !== scope);
      if (MARKO_DEBUG && !renderer) {
        console.warn(
          `A patch names content "${entry}" the page cannot resolve.`,
        );
      }
    }
  }
  (
    _dynamic_tag(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
      contentId
        ? (owner: Scope) => resolveContent(contentId as string, owner)!
        : 0,
      varId
        ? () => (owner: Scope, value: unknown) =>
            getRegisteredWithScope<(v: unknown) => void>(
              varId as string,
              owner,
            )(value)
        : 0,
      Array.isArray(input) as unknown as 1,
    ) as (scope: Scope, renderer: unknown, getInput?: () => unknown) => void
  )(scope, renderer || undefined, input ? () => input : undefined);
};

// Shipped content binds to a forwarded body's owner; the tag's own scope
// owns body content, so that binding is implicit.
function resolveContent(id: string, owner: Scope, bind?: boolean) {
  return getContent(id, bind ? owner : undefined);
}
