import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_b(_scope, b) {
  if (_write(_scope, 4, b)) _data(_scope, 1, b);
}

function _apply_a(_scope, a) {
  if (_write(_scope, 3, a)) _data(_scope, 0, a);
}

function _apply_input(_scope, input) {
  if (_write(_scope, 2, input)) {
    const {
      a,
      b
    } = input;

    _apply_a(a);

    _apply_b(b);
  }
}

export const template = "<!> <!>";
export const walks =
/* replace, over(2), replace, over(1) */
"%c%b";
export const apply = null;
export default _createRenderFn(template, walks, apply);