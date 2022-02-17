const _if = _createRenderer("Hello", "", null);

const _if2 = _createRenderer("World", "", null);

const _if3 = _createRenderer("C", "", null),
      _if4 = _createRenderer("B", "", null),
      _if5 = _createRenderer("A", "", null);

import { createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, read as _read, queue as _queue, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _applyWith_x_y(x = _read(14), y = _read(15)) {
  _setConditionalRenderer(8, x ? _if5 : y ? _if4 : _if3);
}

function _applyWith_a_b(a = _read(12), b = _read(13)) {
  _setConditionalRenderer(0, a + b ? _if : null);

  _setConditionalRenderer(4, (a, b) ? _if2 : null);
}

function _apply_y(y) {
  if (_write(15, y)) _queue(_applyWith_x_y, 5);
}

function _apply_x(x) {
  if (_write(14, x)) _queue(_applyWith_x_y, 5);
}

function _apply_b(b) {
  if (_write(13, b)) _queue(_applyWith_a_b, 4);
}

function _apply_a(a) {
  if (_write(12, a)) _queue(_applyWith_a_b, 4);
}

export const template = "<!><!><div><!></div>";
export const walks = "%+b%+bD%+";
export const apply = null;
export default _createRenderFn(template, walks, apply);