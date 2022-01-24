import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(input) {
  if (_write(2, input)) {
    const {
      a,
      b
    } = input;

    _apply_a(a);

    _apply_b(b);
  }
}

function _apply_a(a) {
  if (_write(3, a)) _data(0, a);
}

function _apply_b(b) {
  if (_write(4, b)) _data(1, b);
}

export const template = "<!> <!>";
export const walks = "%c%";
export const apply = null;
export default _createRenderFn(template, walks, apply);