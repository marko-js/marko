import { attr as _attr, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_name(_scope, name) {
  if (_write(_scope, 1, name)) _attr(_scope, 0, "foo", `Hello ${name}`);
}

export const template = "<div></div>";
export const walks = " b";
export const apply = null;
export default _createRenderFn(template, walks, apply);