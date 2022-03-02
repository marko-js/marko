import { data as _data, setLoopOf as _setLoopOf, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_i2(i) {
  if (_write(3, i)) _data(0, i);
}

function _apply_val2(val) {
  if (_write(2, val)) _data(1, val);
}

function _apply_i(i) {
  if (_write(3, i)) _data(0, i);
}

function _apply_val(val) {
  if (_write(2, val)) _data(1, val);
}

function _apply_arrB(arrB) {
  if (_write(9, arrB)) _setLoopOf(4, arrB, _for2, null, _apply_val2);
}

function _apply_arrA(arrA) {
  if (_write(8, arrA)) _setLoopOf(0, arrA, _for, null, _apply_val);
}

function _apply() {
  _apply_arrA([1, 2, 3]);

  _apply_arrB([1, 2, 3]);
}

const _for = _createRenderer("<div><!>: <!></div>", "D%c%", null),
      _for2 = _createRenderer("<div><!>: <!></div>", "D%c%", null);

export const template = "<!><!>";
export const walks = "%+b%+b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);