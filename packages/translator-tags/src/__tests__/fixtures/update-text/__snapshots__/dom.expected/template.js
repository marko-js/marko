export const _template_ = "Static <!>";
export const _walks_ = /* over(1), replace, over(1) */"b%b";
export const _setup_ = () => {};
import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _value_ = /* @__PURE__ */_value("value", (_scope, value) => _data(_scope["#text/0"], value));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/update-text/template.marko");