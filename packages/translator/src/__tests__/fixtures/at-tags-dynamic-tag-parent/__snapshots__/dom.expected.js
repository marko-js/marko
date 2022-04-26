import { write as _write, dynamicTag as _dynamicTag, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_x(_scope, x) {
  if (_write(_scope, 0, x)) {}
}

export const applyAttrs = function (_scope, {
  x
}) {
  _apply_x(_scope, x);
};
export { _apply_x };
export const template = "Body content";
export const walks =
/* over(3) */
"d";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);