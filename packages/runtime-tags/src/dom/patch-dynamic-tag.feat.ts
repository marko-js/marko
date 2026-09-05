import { encodeAccessor } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
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
// name is `["div"]` alone or `>div` in a longer entry, array input is args.
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
  // A bind reference delivers owner-bound content.
  if (typeof renderer === "function") renderer = renderer();
  if (typeof renderer === "string" && (bare || input !== undefined)) {
    if (renderer[0] === ">") {
      renderer = renderer.slice(1);
    } else {
      const current = scope[
        (AccessorPrefix.ConditionalRenderer + accessor) as Accessor
      ] as string | undefined;
      if (!input && current?.split(" ")[0] === renderer) return;
      renderer = resolveContent(renderer);
    }
  }
  (
    _dynamic_tag(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
      contentId ? () => resolveContent(contentId as string) : 0,
      varId
        ? () => (owner: Scope, value: unknown) =>
            (
              getRegisteredWithScope(varId as string, owner) as (
                v: unknown,
              ) => void
            )(value)
        : 0,
      Array.isArray(input) as unknown as 1,
    ) as (scope: Scope, renderer: unknown, getInput?: () => unknown) => void
  )(scope, renderer || undefined, input ? () => input : undefined);
};

function resolveContent(id: string) {
  const shell = shells[id];
  return shell
    ? getShellContent(shell, id)
    : (getRegisteredWithScope(id) as Renderer);
}
