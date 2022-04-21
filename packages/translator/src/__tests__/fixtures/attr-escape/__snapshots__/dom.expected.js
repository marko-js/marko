import { classAttr as _classAttr, attr as _attr, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(_scope, input) {
  if (_write(_scope, 1, input)) {
    _classAttr(_scope[0], input.className);

    _attr(_scope[0], "foo", 'a' + input.foo + 'b');

    _attr(_scope[0], "bar", `a ${input.foo} b`);
  }
}

export const applyAttrs = function (_scope, input) {
  _apply_input(_scope, input);
};
export { _apply_input };
export const template = "<div></div>";
export const walks =
/* get, over(1) */
" b";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);