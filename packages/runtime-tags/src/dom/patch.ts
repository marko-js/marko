import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import { run, runEffects } from "./queue";
import { abortPatch, beginPatch, finishPatch, init } from "./resume";

export function applyPatch(
  frame: string,
  renderId = DEFAULT_RENDER_ID,
  runtimeId = DEFAULT_RUNTIME_ID,
) {
  init(runtimeId);
  const render = beginPatch(renderId);
  try {
    // A frame is trusted executable resume data (one flat entry array) from
    // the same server that produced the document.
    // eslint-disable-next-line no-new-func
    render.r = [new Function("_", "$", "return " + frame)] as typeof render.r;
    const effects = render.m!([]);
    if (!finishPatch()) return false;

    runEffects(effects, 1);
    run();
    return true;
  } finally {
    abortPatch();
  }
}
