import { data as _data, setLoopOf as _setLoopOf, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_i2(_scope, i) {
  if (_write(_scope, 3, i)) _data(_scope, 0, i);
}

function _apply_val2(_scope, val) {
  if (_write(_scope, 2, val)) _data(_scope, 1, val);
}

function _apply_i(_scope, i) {
  if (_write(_scope, 3, i)) _data(_scope, 0, i);
}

function _apply_val(_scope, val) {
  if (_write(_scope, 2, val)) _data(_scope, 1, val);
}

function _apply_arrB(_scope, arrB) {
  if (_write(_scope, 9, arrB)) _setLoopOf(_scope, 4, arrB, _for2, null, _apply_val2);
}

function _apply_arrA(_scope, arrA) {
  if (_write(_scope, 8, arrA)) _setLoopOf(_scope, 0, arrA, _for, null, _apply_val);
}

function _apply(_scope) {
  _apply_arrA([1, 2, 3]);

  _apply_arrB(_scope, [1, 2, 3]);
}

const _for = _createRenderer("<div><!>: <!></div>", "D%c%", null),
      _for2 = _createRenderer("<div><!>: <!></div>", "D%c%", null);

export const template = "<!><!>";
export const walks = "%+b%+b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);