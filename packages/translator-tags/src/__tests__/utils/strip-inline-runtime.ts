import {
  REORDER_RUNTIME_CODE,
  WALKER_RUNTIME_CODE,
} from "@marko/runtime-tags/html/inlined-runtimes";
const ESCAPED_WALKER_RUNTIME_CODE = escapeHTML(WALKER_RUNTIME_CODE);
const ESCAPED_REORDER_RUNTIME_CODE = escapeHTML(REORDER_RUNTIME_CODE);

export function stripInlineRuntime(str: string) {
  return str
    .replace(ESCAPED_WALKER_RUNTIME_CODE, "WALKER_RUNTIME")
    .replace(ESCAPED_REORDER_RUNTIME_CODE, "REORDER_RUNTIME")
    .replace(WALKER_RUNTIME_CODE, "WALKER_RUNTIME")
    .replace(REORDER_RUNTIME_CODE, "REORDER_RUNTIME");
}

function escapeHTML(str: string): string {
  return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
