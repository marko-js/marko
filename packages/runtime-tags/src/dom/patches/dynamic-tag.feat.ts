import { encodeAccessor } from "../../common/helpers";
import { toArray } from "../../common/opt";
import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import { _dynamic_tag, rendererKey } from "../control-flow";
import type { Renderer } from "../renderer";
// The tag's branch pairs through a `PatchChild` entry.
import "./child.feat";
import { getRegisteredWithScope } from "../resume";
import { setupPatchers, patchers } from "./apply";
import { getContent, getContentAt } from "./shells";

// `[renderer, contentId, input, varId]` or bare; `>div` is native, else a
// content id (`getContentAt`).
patchers[PatchKey.DynamicTag] = setupPatchers[PatchKey.DynamicTag] = (
  scope,
  accessor,
  entry,
) => {
  let [renderer, contentId, input, varId] = toArray(entry) as [
    string | Renderer | 0 | undefined,
    string | 0 | undefined,
    unknown,
    string | 0 | undefined,
  ];
  if (typeof renderer === "string") {
    if (renderer[0] === ">") {
      renderer = renderer.slice(1);
    } else {
      renderer = getContentAt(scope, renderer);
      if (
        !input &&
        // The live branch renders this content for this owner.
        scope[AccessorPrefix.ConditionalRenderer + accessor] ===
          rendererKey(renderer)
      ) {
        // Linked like one this created, for entries walking up through it.
        (scope[AccessorPrefix.BranchScopes + accessor] as Scope)[
          AccessorProp.Owner
        ] = renderer[RendererProp.Owner] || scope;
        return;
      }
    }
  }
  const content = contentId ? getContent(contentId, scope) : 0;
  (
    _dynamic_tag(
      MARKO_DEBUG ? accessor : encodeAccessor(accessor),
      content ? (_: Scope) => content : 0,
      varId
        ? (_?: never) => (owner: Scope, value: unknown) =>
            getRegisteredWithScope<(v: unknown) => void>(
              owner,
              varId as string,
            )(value)
        : 0,
      Array.isArray(input) as unknown as 1,
    ) as (scope: Scope, renderer: unknown, getInput?: () => unknown) => void
  )(scope, renderer || undefined, input ? (_?: never) => input : undefined);
};
