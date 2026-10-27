import { encodeAccessor } from "../../common/helpers";
import { toArray } from "../../common/opt";
import {
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
import { setupPatchers, patchers } from "./apply";
import { getContent } from "./shells";

// `[renderer, contentId, input, varId]` or bare; `>div` is native, `^id`/`^^id`
// bind the tag's scope/owner; `hop… id` steps down, `^F N id` up to a row.
patchers[PatchKey.DynamicTag] = setupPatchers[PatchKey.DynamicTag] = (
  scope,
  accessor,
  entry,
) => {
  let [renderer, contentId, input, varId] = toArray(entry) as [
    unknown,
    string | 0 | undefined,
    unknown,
    string | 0 | undefined,
  ];
  if (typeof renderer === "string") {
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
        for (const hop of hops) owner = owner[hop] as Scope;
      }
      if (
        !input &&
        // The live branch renders this content for this owner (`rendererKey`).
        scope[AccessorPrefix.ConditionalRenderer + accessor] ===
          (owner ? id + " " + owner[AccessorProp.Id] : id)
      ) {
        // Linked like one this created, for entries walking up through it.
        (scope[AccessorPrefix.BranchScopes + accessor] as Scope)[
          AccessorProp.Owner
        ] = owner || scope;
        return;
      }
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
  const content = contentId ? getContent(contentId, scope) : 0;
  (
    _dynamic_tag(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
      content ? (_: Scope) => content : 0,
      varId
        ? (_?: never) => (owner: Scope, value: unknown) =>
            getRegisteredWithScope<(v: unknown) => void>(
              varId as string,
              owner,
            )(value)
        : 0,
      Array.isArray(input) as unknown as 1,
    ) as (scope: Scope, renderer: unknown, getInput?: () => unknown) => void
  )(scope, renderer || undefined, input ? (_?: never) => input : undefined);
};
