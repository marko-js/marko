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
// and owner-bound content `^id` binds to the tag's scope, one more `^` per hop up.
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
  if (typeof renderer === "string" && (bare || input !== undefined)) {
    if (renderer[0] === ">") {
      renderer = renderer.slice(1);
    } else {
      const current = scope[
        (AccessorPrefix.ConditionalRenderer + accessor) as Accessor
      ] as string | undefined;
      let id = renderer;
      let owner: Scope | undefined;
      while (id[0] === "^") {
        owner = owner ? owner[AccessorProp.Owner]! : scope;
        id = id.slice(1);
      }
      if (!input && current?.split(" ")[0] === id) return;
      renderer = getContent(id, owner);
      // Every template of the build has a record; the transport refuses
      // another build's patch, so an unresolved id is a bug.
      if (MARKO_DEBUG && !renderer) {
        throw new Error(
          `A patch names content "${id}" the page cannot resolve.`,
        );
      }
    }
  }
  (
    _dynamic_tag(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
      contentId ? () => getContent(contentId as string)! : 0,
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
