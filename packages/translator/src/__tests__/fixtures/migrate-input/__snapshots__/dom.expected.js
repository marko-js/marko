import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(_scope, input) {
  if (_write(_scope, 1, input)) {
    _data(_scope[0], input.x);
  }
}

export const applyAttrs = function (_scope, input) {
  _apply_input(_scope, input);
};
export { _apply_input };
export const template = "<div><span> </span></div>";
export const walks =
/* next(2), get, out(2) */
"E m";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);