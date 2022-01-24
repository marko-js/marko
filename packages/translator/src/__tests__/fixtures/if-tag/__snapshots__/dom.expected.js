const _if = _createRenderer("Hello", "", null);

const _if2 = _createRenderer("World", "", null);

const _else = _createRenderer("C", "", null),
      _elseIf = _createRenderer("B", "", null),
      _if3 = _createRenderer("A", "", null);

import { createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, queue as _queue, write as _write, read as _read, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_a(a) {
  if (_write(12, a)) _queue(_applyWith_a_b, 12);
}

function _apply_b(b) {
  if (_write(13, b)) _queue(_applyWith_a_b, 13);
}

function _apply_x(x) {
  if (_write(14, x)) _queue(_applyWith_x_y, 14);
}

function _apply_y(y) {
  if (_write(15, y)) _queue(_applyWith_x_y, 15);
}

function _applyWith_a_b(a = _read(12), b = _read(13)) {
  _setConditionalRenderer(0, a + b ? _if : null);

  _setConditionalRenderer(4, (a, b) ? _if2 : null);
}

function _applyWith_x_y(x = _read(14), y = _read(15)) {
  _setConditionalRenderer(8, x ? _if3 : y ? _elseIf : _else);
}

export const template = "<!><!><div><!></div>";
export const walks = "%+b%+bD%+";
export const apply = null;
export default _createRenderFn(template, walks, apply);