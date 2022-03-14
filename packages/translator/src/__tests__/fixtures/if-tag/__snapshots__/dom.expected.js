import { setConditionalRenderer as _setConditionalRenderer, queue as _queue, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _applyWith_x_y(_scope, x = _scope[14], y = _scope[15]) {
  _setConditionalRenderer(_scope, 8, x ? _if5 : y ? _if4 : _if3);
}

function _applyWith_a_b(_scope, a = _scope[12], b = _scope[13]) {
  _setConditionalRenderer(_scope, 0, a + b ? _if : null);

  _setConditionalRenderer(_scope, 4, (a, b) ? _if2 : null);
}

function _apply_y(_scope, y) {
  if (_write(_scope, 15, y)) _queue(_scope, _applyWith_x_y, 5);
}

function _apply_x(_scope, x) {
  if (_write(_scope, 14, x)) _queue(_scope, _applyWith_x_y, 5);
}

function _apply_b(_scope, b) {
  if (_write(_scope, 13, b)) _queue(_scope, _applyWith_a_b, 4);
}

function _apply_a(_scope, a) {
  if (_write(_scope, 12, a)) _queue(_scope, _applyWith_a_b, 4);
}

const _if = _createRenderer("Hello", "", null),
      _if2 = _createRenderer("World", "", null),
      _if5 = _createRenderer("A", "", null),
      _if4 = _createRenderer("B", "", null),
      _if3 = _createRenderer("C", "", null);

export const template = "<!><!><div><!></div>";
export const walks = "%+b%+bD%+l";
export const apply = null;
export default _createRenderFn(template, walks, apply);