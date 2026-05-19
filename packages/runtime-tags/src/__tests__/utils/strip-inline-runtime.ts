import * as optimizeRuntimes from "@marko/runtime-tags/html/inlined-runtimes";
import * as debugRuntimes from "@marko/runtime-tags/html/inlined-runtimes.debug";

export const stripDebugRuntime = makeStripper(debugRuntimes);
export const stripOptimizeRuntime = makeStripper(optimizeRuntimes);

function makeStripper(
  runtimes: typeof debugRuntimes | typeof optimizeRuntimes,
) {
  const escapedWalker = escapeHTML(runtimes.WALKER_RUNTIME_CODE);
  const escapedReorder = escapeHTML(runtimes.REORDER_RUNTIME_CODE);
  return (str: string) =>
    str
      .replace(escapedWalker, "WALKER_RUNTIME")
      .replace(escapedReorder, "REORDER_RUNTIME")
      .replace(runtimes.WALKER_RUNTIME_CODE, "WALKER_RUNTIME")
      .replace(runtimes.REORDER_RUNTIME_CODE, "REORDER_RUNTIME");
}

function escapeHTML(str: string): string {
  return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
