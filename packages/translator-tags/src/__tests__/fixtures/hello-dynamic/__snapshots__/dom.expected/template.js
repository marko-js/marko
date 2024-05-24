import { data as _data, html as _html, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _data(_scope["#text/0"], input.name);
  _html(_scope, input.name, "#text/1");
  _html(_scope, input.missing, "#text/2");
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export const _template_ = "Hello <!>! Hello <!>! Hello <!>!";
export const _walks_ = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/hello-dynamic/template.marko");