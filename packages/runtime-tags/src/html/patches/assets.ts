import { RendererProp } from "../../common/types";
import { type AssetFlush, type LoadTrigger, writeLoadAsset } from "../assets";
import type { ServerRenderer } from "../template";
import { getState, writeWaitReady } from "../writer";
import { _template_patch } from "./template";
import {
  PatchRenderState,
  inCreatable,
  patchWait,
  withPatchReadyId,
} from "./writer";

// A flush waits for a lazy module once it writes into the tag or may create
// it (its CSS comes with the module), then applies whole.
export function withLoadAssets(
  template: () => ServerRenderer,
  id: string,
  flush: AssetFlush,
  assetId: string,
  triggers?: LoadTrigger[],
): ServerRenderer {
  const renderer: ServerRenderer = (input: unknown) => {
    const state = getState();
    if (state instanceof PatchRenderState) {
      if (inCreatable()) patchWait(state, assetId);
      return withPatchReadyId(assetId, template(), input);
    }
    writeLoadAsset(assetId, flush, triggers);
    return writeWaitReady(assetId, template(), input);
  };
  if (MARKO_DEBUG) renderer[RendererProp.Lazy] = 1;
  renderer[RendererProp.ReadyId] = assetId;
  _template_patch(id, renderer);
  return renderer;
}
