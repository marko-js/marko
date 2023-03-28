import { data as _data, value as _value2, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _data(_scope["#text/0"], value));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let value;
  if (_dirty) ({
    value
  } = _destructure);
  _value(_scope, value, _dirty);
};
export { _value as _apply_value };
export const template = "Static <!>";
export const walks = /* over(1), replace, over(1) */"b%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/update-text/template.marko");