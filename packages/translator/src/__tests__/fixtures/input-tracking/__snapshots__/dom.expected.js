import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(_scope, input) {
  if (_write(_scope, 4, input)) {
    const {
      a,
      b
    } = input;

    _apply_a(a);

    _apply_b(b);
  }
}

function _apply_b(_scope, b) {
  if (_write(_scope, 3, b)) {
    _data(_scope[1], b);
  }
}

function _apply_a(_scope, a) {
  if (_write(_scope, 2, a)) {
    _data(_scope[0], a);
  }
}

export const applyAttrs = function (_scope, input) {
  _apply_input(_scope, input);
};
export { _apply_input };
export const template = "<!> <!>";
export const walks =
/* replace, over(2), replace, over(1) */
"%c%b";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);