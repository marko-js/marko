import { RendererProp } from "../../common/types";
import { type AssetFlush, type LoadTrigger, writeLoadAsset } from "../assets";
import { register } from "../serializer";
import type { ServerRenderer } from "../template";
import { getState, writeWaitReady } from "../writer";
import {
  PatchUpdateState,
  inCreatable,
  patchWait,
  withPatchReadyId,
} from "./writer";

// A flush waits for a lazy module once it writes into the tag or may create
// it (its CSS comes with the module), then applies whole.
export function withLoadAssets(
  renderer: ServerRenderer,
  flush: AssetFlush,
  assetId: string,
  triggers?: LoadTrigger[],
): ServerRenderer {
  return register(
    renderer[RendererProp.Id]!,
    Object.assign(
      (input: unknown) => {
        const state = getState();
        if (state instanceof PatchUpdateState) {
          if (inCreatable()) patchWait(state, assetId);
          return withPatchReadyId(assetId, renderer, input);
        }
        writeLoadAsset(assetId, flush, triggers);
        return writeWaitReady(assetId, renderer, input);
      },
      MARKO_DEBUG ? { ...renderer, [RendererProp.Lazy]: 1 as const } : renderer,
      { [RendererProp.ReadyId]: assetId },
    ),
  );
}
