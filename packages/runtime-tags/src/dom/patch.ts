import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import { run } from "./queue";
import { abortPatch, beginPatch, finishPatch, init } from "./resume";

export function applyPatch(
  frame: string,
  renderId = DEFAULT_RENDER_ID,
  runtimeId = DEFAULT_RUNTIME_ID,
) {
  init(runtimeId);
  const render = beginPatch(renderId);
  try {
    // Patch frames are trusted executable resume data from the same server
    // that produced the document.
    // eslint-disable-next-line no-new-func
    new Function(frame)();

    if (render.m!([]).length || !finishPatch()) return false;

    run();
    return true;
  } finally {
    abortPatch();
  }
}
