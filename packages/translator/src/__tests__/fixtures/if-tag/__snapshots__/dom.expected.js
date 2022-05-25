import { setConditionalRenderer as _setConditionalRenderer, queue as _queue, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _applyWith_x_y(_scope, x = _scope[14], y = _scope[15]) {
  _setConditionalRenderer(_scope, 8, x ? _ifBody3 : y ? _elseIfBody : _elseBody);
}

function _applyWith_a_b(_scope, a = _scope[12], b = _scope[13]) {
  _setConditionalRenderer(_scope, 0, a + b ? _ifBody : null);

  _setConditionalRenderer(_scope, 4, (a, b) ? _ifBody2 : null);
}

function _apply_y(_scope, y) {
  if (_write(_scope, 15, y)) {
    _queue(_scope, _applyWith_x_y, 5);
  }
}

function _apply_x(_scope, x) {
  if (_write(_scope, 14, x)) {
    _queue(_scope, _applyWith_x_y, 5);
  }
}

function _apply_b(_scope, b) {
  if (_write(_scope, 13, b)) {
    _queue(_scope, _applyWith_a_b, 4);
  }
}

function _apply_a(_scope, a) {
  if (_write(_scope, 12, a)) {
    _queue(_scope, _applyWith_a_b, 4);
  }
}

export const applyAttrs = function (_scope, {
  a,
  b,
  x,
  y
}) {
  _apply_a(_scope, a);

  _apply_b(_scope, b);

  _apply_x(_scope, x);

  _apply_y(_scope, y);
};
export { _apply_a, _apply_b, _apply_x, _apply_y };
export const template = "<!><!><div><!></div>";
export const walks =
/* replace, skip(3), over(1), replace, skip(3), over(1), next(1), replace, skip(3), out(1) */
"%+b%+bD%+l";
export const apply = function () {};

const _ifBody = _createRenderer("Hello", "", null),
      _ifBody2 = _createRenderer("World", "", null),
      _ifBody3 = _createRenderer("A", "", null),
      _elseIfBody = _createRenderer("B", "", null),
      _elseBody = _createRenderer("C", "", null);

export default _createRenderFn(template, walks, apply, applyAttrs);