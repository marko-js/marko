import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_z(_scope, z) {
  if (_write(_scope, 3, z)) _data(_scope[0], z);
}

function _apply_y(_scope, y) {
  if (_write(_scope, 2, y)) _apply_z(_scope, y * 3);
}

function _apply_x(_scope, x) {
  if (_write(_scope, 1, x)) _apply_y(_scope, x * 2);
}

function _apply(_scope) {
  _apply_x(_scope, 1);
}

export const template = "<div> </div>";
export const walks =
/* next(1), get, out(1) */
"D l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);