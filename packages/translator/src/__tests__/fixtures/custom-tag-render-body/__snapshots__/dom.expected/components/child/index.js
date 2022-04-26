import { dynamicTag as _dynamicTag, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(_scope, input) {
  if (_write(_scope, 0, input)) {}
}

export const applyAttrs = function (_scope, input) {
  _apply_input(_scope, input);
};
export { _apply_input };
export const template = "";
export const walks = "";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);