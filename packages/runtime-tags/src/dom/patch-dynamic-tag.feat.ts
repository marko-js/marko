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
import { getShellContent, shells } from "./patch-shells";
import type { Renderer } from "./renderer";
import { constructPatchers, getRegisteredWithScope, patchers } from "./resume";

// `[renderer, input, contentId, varId]`, a lone renderer bare; a native tag
// name is `["div"]` alone or `>div` in a longer entry, array input is args,
// and shipped content `^id` binds to the owner one `^` up per hop.
patchers[PatchKey.DynamicTag] = constructPatchers[PatchKey.DynamicTag] = (
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
        ? (owner: Scope) => resolveContent(contentId as string, owner)
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

// A shipped shell builds the content, bound to a forwarded body's owner; a
// registered one (the page has its renderer) binds to the site's scope,
// which owns body content.
function resolveContent(id: string, owner: Scope, bind?: boolean) {
  const shell = shells[id];
  return shell
    ? getShellContent(shell, id, bind ? owner : undefined)
    : getRegisteredWithScope<Renderer>(id, owner);
}
