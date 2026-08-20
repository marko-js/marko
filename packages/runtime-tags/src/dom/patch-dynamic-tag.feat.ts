import { encodeAccessor } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  type EncodedAccessor,
  PatchKey,
} from "../common/types";
import { _dynamic_tag } from "./control-flow";
// The tag's branch pairs through a `PatchChild` entry.
import "./patch-child.feat";
import { getShellContent, shells } from "./patch-shells";
import type { Renderer } from "./renderer";
import {
  constructPatchers,
  failPatch,
  getRegisteredWithScope,
  patchers,
} from "./resume";

// Re-renders the tag's `input` content through its signal; an id-only
// entry constructs its content record, else pairs the same one or rejects.
patchers[PatchKey.DynamicTag] = constructPatchers[PatchKey.DynamicTag] = (
  scope,
  key,
  renderer,
) => {
  const accessor = key.slice(PatchKey.DynamicTag.length) as Accessor;
  if (Array.isArray(renderer)) {
    const id = renderer[0] as string;
    const current = scope[
      (AccessorPrefix.ConditionalRenderer + accessor) as Accessor
    ] as string | undefined;
    if (current?.split(" ")[0] === id) return;
    const shell = shells[id];
    renderer = shell
      ? getShellContent(shell, id)
      : (getRegisteredWithScope(id) as Renderer) || failPatch();
  } else if (renderer === undefined) {
    // Its registration was shaken or never loaded: skew, reject (`0` is none).
    failPatch();
  }
  _dynamic_tag(
    (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
  )(scope, (renderer || undefined) as Renderer | string | undefined);
};
