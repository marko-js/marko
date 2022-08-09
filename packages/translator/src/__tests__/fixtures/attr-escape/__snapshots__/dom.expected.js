import { classAttr as _classAttr, attr as _attr, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _input = _source(1, [], (_scope, input) => {
  _classAttr(_scope[0], input.className);

  _attr(_scope[0], "foo", 'a' + input.foo + 'b');

  _attr(_scope[0], "bar", `a ${input.foo} b`);
});

export const attrs = _destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<div></div>";
export const walks =
/* get, over(1) */
" b";
export const setup = function () {};
export default _createRenderFn(template, walks, setup, attrs);