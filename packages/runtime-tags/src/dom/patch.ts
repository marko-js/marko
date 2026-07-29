import { DEFAULT_RENDER_ID } from "../common/meta";
import { UNPROVABLE } from "../common/patch-frame";
import { run } from "./queue";
import { enablePatchHoles, getRender, takePatchHoleFailure } from "./resume";

/**
 * Applies one server frame to the live document as a single batch. Returns
 * `false` when the frame cannot be proven safe to apply, so the caller takes the
 * document navigation instead.
 */
export function applyPatch(frame: string, renderId = DEFAULT_RENDER_ID) {
  if (frame === UNPROVABLE) return false;
  enablePatchHoles();
  takePatchHoleFailure();
  const render = getRender(renderId);
  if (!render?.m) return false;

  try {
    // eslint-disable-next-line no-new-func
    new Function(frame)();
  } catch {
    return false;
  }

  // Effects mean structure this frame expects the client to build, which is not
  // something a value-only patch can do.
  if (render.m([]).length) return false;
  if (takePatchHoleFailure()) return false;

  run();
  return true;
}
