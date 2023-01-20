import { classAttr as _classAttr, attr as _attr, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_source("input", [], (_scope, input) => {
  _classAttr(_scope["#div/0"], input.className);
  _attr(_scope["#div/0"], "foo", 'a' + input.foo + 'b');
  _attr(_scope["#div/0"], "bar", `a ${input.foo} b`);
});
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);