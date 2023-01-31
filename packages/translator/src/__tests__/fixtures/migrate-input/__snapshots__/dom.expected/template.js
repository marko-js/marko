import { data as _data, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_source("input", [], (_scope, input) => _data(_scope["#text/0"], input.x));
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<div><span> </span></div>";
export const walks = /* next(2), get, out(2) */"E m";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/migrate-input/template.marko");