const _for = _createRenderer("<div><!>: <!></div>", "D%c%", null);

const _for2 = _createRenderer("<div><!>: <!></div>", "D%c%", null);

import { data as _data, write as _write, createRenderer as _createRenderer, setLoopOf as _setLoopOf, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_val(val) {
  if (_write(9, val)) _data(1, val);
}

function _apply_i(i) {
  if (_write(10, i)) _data(0, i);
}

function _apply_val2(val) {
  if (_write(12, val)) _data(1, val);
}

function _apply_i2(i) {
  if (_write(13, i)) _data(0, i);
}

function _apply() {
  _apply_arrA([1, 2, 3]);

  _apply_arrB([1, 2, 3]);
}

function _apply_arrA(arrA) {
  if (_write(8, arrA)) _setLoopOf(0, arrA, _for, null, _apply_val);
}

function _apply_arrB(arrB) {
  if (_write(11, arrB)) _setLoopOf(4, arrB, _for2, null, _apply_val2);
}

export const template = "<!><!>";
export const walks = "%+b%+";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);