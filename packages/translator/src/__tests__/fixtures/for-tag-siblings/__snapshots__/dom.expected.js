import { data as _data, setLoopOf as _setLoopOf, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply$forBody2_val(_scope, val) {
  if (_write(_scope, 1, val)) {
    _data(_scope[0], val);
  }
}

function _apply$forBody_val(_scope, val) {
  if (_write(_scope, 1, val)) {
    _data(_scope[0], val);
  }
}

function _apply_arrA(_scope, arrA) {
  if (_write(_scope, 8, arrA)) {
    _setLoopOf(_scope, 0, arrA, _forBody, null, _apply$forBody_val);

    _setLoopOf(_scope, 4, arrA, _forBody2, null, _apply$forBody2_val);
  }
}

function _apply(_scope) {
  _apply_arrA(_scope, [1, 2, 3]);
}

export const template = "<div></div><div><!><div></div></div>";
export const walks =
/* get, skip(3), over(1), next(1), replace, skip(3), out(1) */
" +bD%+l";
export const apply = _apply;

const _forBody = _createRenderer("<div> </div>",
/* next(1), get */
"D ", null),
      _forBody2 = _createRenderer("<div> </div>",
/* next(1), get */
"D ", null);

export default _createRenderFn(template, walks, apply);