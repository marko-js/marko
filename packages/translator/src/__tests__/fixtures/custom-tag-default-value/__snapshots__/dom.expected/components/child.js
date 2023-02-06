import { data as _data, derivation as _derivation, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value = /* @__PURE__ */_derivation("value", 1, [], (_scope, input = _scope["input"]) => input.value, (_scope, value) => _data(_scope["#text/0"], value));
const _input = /* @__PURE__ */_source("input", [_value]);
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<!> ";
export const walks = /* replace, over(2) */"%c";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/custom-tag-default-value/components/child.marko");