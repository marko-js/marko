import { data as _data, setLoopOf as _setLoopOf, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_val2(_scope, val) {
  if (_write(_scope, 1, val)) _data(_scope, 0, val);
}

function _apply_val(_scope, val) {
  if (_write(_scope, 1, val)) _data(_scope, 0, val);
}

function _apply_arrA(_scope, arrA) {
  if (_write(_scope, 8, arrA)) {
    _setLoopOf(_scope, 0, arrA, _for, null, _apply_val);

    _setLoopOf(_scope, 4, arrA, _for2, null, _apply_val2);
  }
}

function _apply(_scope) {
  _apply_arrA([1, 2, 3]);
}

const _for = _createRenderer("<div><!></div>", "D%", null),
      _for2 = _createRenderer("<div><!></div>", "D%", null);

export const template = "<div></div><div><!><div></div></div>";
export const walks = " +bD%+l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);