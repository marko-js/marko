import { encodeAccessor } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type EncodedAccessor,
  PatchKey,
  type Scope,
} from "../../common/types";
import { _dynamic_tag } from "../control-flow";
// The tag's branch pairs through a `PatchChild` entry.
import "./child.feat";
import { getRegisteredWithScope } from "../resume";
import { createPatchers, patchers } from "./apply";
import { getContent } from "./shells";

// `[renderer, input, contentId, varId]` or bare; `>div` (`["div"]`) is native,
// `^id`/`^^id` bind the tag's scope/owner, `hop… id` steps down from it or the root.
patchers[PatchKey.DynamicTag] = createPatchers[PatchKey.DynamicTag] = (
  scope,
  key,
  entry,
) => {
  const accessor = key.slice(PatchKey.DynamicTag.length) as Accessor;
  const bare = !Array.isArray(entry);
  let [renderer, input, contentId, varId, ...locals] = (
    bare ? [entry] : entry
  ) as [
    unknown,
    unknown,
    string | 0 | undefined,
    string | 0 | undefined,
    ...Scope[],
  ];
  if (typeof renderer === "string" && (bare || input !== undefined)) {
    if (renderer[0] === ">") {
      renderer = renderer.slice(1);
    } else {
      let id = renderer;
      let owner: Scope | undefined;
      while (id[0] === "^") {
        owner = owner ? owner[AccessorProp.Owner]! : scope;
        id = id.slice(1);
      }
      const hops = id.split(" ");
      id = hops.pop()!;
      if (hops.length) {
        if (!owner) {
          for (owner = scope; owner[AccessorProp.Owner];) {
            owner = owner[AccessorProp.Owner]!;
          }
        }
        for (const hop of hops) owner = owner[hop as Accessor] as Scope;
      }
      if (
        !input &&
        !locals.length &&
        // The live branch renders this content for this owner (`rendererKey`).
        scope[(AccessorPrefix.ConditionalRenderer + accessor) as Accessor] ===
          (owner ? id + " " + owner[AccessorProp.Id] : id)
      ) {
        return;
      }
      renderer = getContent(id, owner, ...locals);
      // Every template of the build has a record; the transport refuses
      // another build's patch, so an unresolved id is a bug.
      if (MARKO_DEBUG && !renderer) {
        throw new Error(
          `A patch names content "${id}" the page cannot resolve.`,
        );
      }
    }
  }
  const content = contentId ? getContent(contentId) : undefined;
  (
    _dynamic_tag(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
      content ? () => content : 0,
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
