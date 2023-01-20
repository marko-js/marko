import { data as _data, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_source("input", [], (_scope, input) => _data(_scope["#text/0"], input.name));
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "Hello <!>!";
export const walks = /* over(1), replace, over(2) */"b%c";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);