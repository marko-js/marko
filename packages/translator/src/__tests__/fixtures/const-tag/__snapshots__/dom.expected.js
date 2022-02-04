import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_y(y) {
  if (_write(3, y)) _data(1, y);
}

function _apply_x(x) {
  if (_write(2, x)) _data(0, x);
}

function _apply() {
  _apply_x(1);

  _apply_y(1);
}

export const template = "<div><!></div><!>";
export const walks = "D%l%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);