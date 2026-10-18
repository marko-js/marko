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
import type { Renderer } from "../renderer";
// The tag's branch pairs through a `PatchChild` entry.
import "./child.feat";
import { getRegisteredWithScope } from "../resume";
import { createPatchers, patchers } from "./apply";
import { getContent } from "./shells";

// `[renderer, input, contentId, varId]` or bare; `>div` is native, `^id`/`^^id`
// bind the tag's scope/owner; `hop… id` steps down, `^F N id` up to a row.
patchers[PatchKey.DynamicTag] = createPatchers[PatchKey.DynamicTag] = (
  scope,
  key,
  entry,
) => {
  const accessor = key.slice(PatchKey.DynamicTag.length) as Accessor;
  let [renderer, input, contentId, varId, ...locals] = (
    Array.isArray(entry) ? entry : [entry]
  ) as [
    unknown,
    unknown,
    string | 0 | undefined,
    string | 0 | undefined,
    ...Scope[],
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
  // A renderer's params keep the body to render as the page does; the patch
  // creates a native or absent tag's body itself.
  const content =
    contentId &&
    (typeof renderer === "object"
      ? getRegisteredWithScope<Renderer>(contentId, scope)
      : getContent(contentId, scope));
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
  // Content this created mounts its effects at this entry's end, as it may ship no
  // entry of its own; a native tag's body sits in the tag's branch.
  let branch = scope[
    (AccessorPrefix.BranchScopes + accessor) as Accessor
  ] as Scope;
  if (typeof renderer === "string") {
    branch = branch[
      (AccessorPrefix.BranchScopes +
        (MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a")) as Accessor
    ] as Scope;
  }
  if (branch?.[AccessorProp.SetupEffects]) {
    (scope[AccessorProp.SetupEffects] ||= []).unshift(
      ...branch[AccessorProp.SetupEffects],
    );
    branch[AccessorProp.SetupEffects] = 0;
  }
};
