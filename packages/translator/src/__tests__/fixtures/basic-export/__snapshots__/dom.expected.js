export const v = 123;
import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_value(_scope, value) {
  if (_write(_scope, 1, value)) _data(_scope[0], value);
}

export const applyAttrs = function (_scope, {
  value
}) {
  _apply_value(_scope, value);
};
export { _apply_value };
export const template = "<div> </div>";
export const walks =
/* next(1), get, out(1) */
"D l";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);