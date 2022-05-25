import { data as _data, setLoopOf as _setLoopOf, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply$forBody2_i(_scope, i) {
  if (_write(_scope, 3, i)) {
    _data(_scope[0], i);
  }
}

function _apply$forBody2_val(_scope, val) {
  if (_write(_scope, 2, val)) {
    _data(_scope[1], val);
  }
}

function _apply$forBody_i(_scope, i) {
  if (_write(_scope, 3, i)) {
    _data(_scope[0], i);
  }
}

function _apply$forBody_val(_scope, val) {
  if (_write(_scope, 2, val)) {
    _data(_scope[1], val);
  }
}

function _apply_arrB(_scope, arrB) {
  if (_write(_scope, 9, arrB)) {
    _setLoopOf(_scope, 4, arrB, _forBody2, null, _apply$forBody2_val);
  }
}

function _apply_arrA(_scope, arrA) {
  if (_write(_scope, 8, arrA)) {
    _setLoopOf(_scope, 0, arrA, _forBody, null, _apply$forBody_val);
  }
}

function _apply(_scope) {
  _apply_arrA(_scope, [1, 2, 3]);

  _apply_arrB(_scope, [1, 2, 3]);
}

export const template = "<!><!>";
export const walks =
/* replace, skip(3), over(1), replace, skip(3), over(1) */
"%+b%+b";
export const apply = _apply;

const _forBody = _createRenderer("<div><!>: <!></div>",
/* next(1), replace, over(2), replace */
"D%c%", null),
      _forBody2 = _createRenderer("<div><!>: <!></div>",
/* next(1), replace, over(2), replace */
"D%c%", null);

export default _createRenderFn(template, walks, apply);