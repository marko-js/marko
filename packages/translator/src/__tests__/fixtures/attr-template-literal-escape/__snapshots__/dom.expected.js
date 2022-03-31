import { attr as _attr, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_name(_scope, name) {
  if (_write(_scope, 1, name)) _attr(_scope, 0, "foo", `Hello ${name}`);
}

export const applyAttrs = function (_scope, {
  name
}) {
  _apply_name(_scope, name);
};
export { _apply_name };
export const template = "<div></div>";
export const walks =
/* get, over(1) */
" b";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);