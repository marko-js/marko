import { attr as _attr, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_name(name) {
  if (_write(1, name)) _attr(0, "foo", `Hello ${name}`);
}

export const template = "<div></div>";
export const walks = " b";
export const apply = null;
export default _createRenderFn(template, walks, apply);