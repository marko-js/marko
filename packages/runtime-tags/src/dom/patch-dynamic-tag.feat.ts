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

// `[renderer, input, isArgs, varId, isTagName, contentId]`: ids resolve to
// a shipped record or dom registration; the var id to the tag variable.
patchers[PatchKey.DynamicTag] = constructPatchers[PatchKey.DynamicTag] = (
  scope,
  key,
  entry,
) => {
  const accessor = key.slice(PatchKey.DynamicTag.length) as Accessor;
  let [renderer, input, isArgs, varId, isTagName, contentId] = entry as [
    unknown,
    unknown,
    0 | 1 | undefined,
    string | 0 | undefined,
    0 | 1 | undefined,
    string | 0 | undefined,
  ];
  if (typeof renderer === "string" && !isTagName) {
    const current = scope[
      (AccessorPrefix.ConditionalRenderer + accessor) as Accessor
    ] as string | undefined;
    if (!input && current?.split(" ")[0] === renderer) return;
    renderer = resolveContent(renderer);
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
      isArgs || undefined,
    ) as (scope: Scope, renderer: unknown, getInput?: () => unknown) => void
  )(scope, renderer || undefined, input ? () => input : undefined);
};

function resolveContent(id: string) {
  const shell = shells[id];
  return shell
    ? getShellContent(shell, id)
    : (getRegisteredWithScope(id) as Renderer);
}
