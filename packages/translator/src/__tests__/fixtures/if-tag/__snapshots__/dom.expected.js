const _if = _createRenderer("Hello", "b", null);

const _if2 = _createRenderer("World", "b", null);

const _else = _createRenderer("C", "", null),
      _elseIf = _createRenderer("B", "", null),
      _if3 = _createRenderer("A", "b", null);

import { createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, queue as _queue, write as _write, read as _read, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_a(a) {
  if (_write(3, a)) _queue(_applyWith_a_b, 3);
}

function _apply_b(b) {
  if (_write(4, b)) _queue(_applyWith_a_b, 4);
}

function _apply_x(x) {
  if (_write(5, x)) _queue(_applyWith_x_y, 5);
}

function _apply_y(y) {
  if (_write(6, y)) _queue(_applyWith_x_y, 6);
}

function _applyWith_a_b(a = _read(3), b = _read(4)) {
  _setConditionalRenderer(0, 10, a + b ? _if : null);

  _setConditionalRenderer(1, 13, (a, b) ? _if2 : null);
}

function _applyWith_x_y(x = _read(5), y = _read(6)) {
  _setConditionalRenderer(2, 16, x ? _if3 : y ? _elseIf : _else);
}

export const template = "<!><!><div><!></div>";
export const walks = "%%D%";
export const apply = _apply_a;
export default _createRenderFn(template, walks, apply);