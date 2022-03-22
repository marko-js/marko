import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_y(_scope, y) {
  if (_write(_scope, 3, y)) _data(_scope, 1, y);
}

function _apply_x(_scope, x) {
  if (_write(_scope, 2, x)) _data(_scope, 0, x);
}

function _apply(_scope) {
  _apply_x(1);

  _apply_y(1);
}

export const template = "<div><!></div><!>";
export const walks =
/* next(1), replace, out(1), replace, over(1) */
"D%l%b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);