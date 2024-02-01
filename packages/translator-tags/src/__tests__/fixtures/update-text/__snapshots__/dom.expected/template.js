import { data as _data, value as _value2, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _data(_scope["#text/0"], value));
export const args = (_scope, _destructure, _clean) => {
  let value;
  if (!_clean) [{
    value
  }] = _destructure;
  _value(_scope, value, _clean);
};
export { _value };
export const template = "Static <!>";
export const walks = /* over(1), replace, over(1) */"b%b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/update-text/template.marko");