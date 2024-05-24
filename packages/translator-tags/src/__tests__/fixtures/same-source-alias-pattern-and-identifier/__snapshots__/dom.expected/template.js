import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _c = (_scope, c) => {
  _data(_scope["#text/1"], c);
};
export const _b_ = /* @__PURE__ */_value("b", (_scope, b) => {
  _data(_scope["#text/0"], b);
  _c(_scope, b);
});
export const _pattern__ = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => _b_(_scope, _pattern_.b));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _pattern__(_scope, input.a));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export const _template_ = "<button><!> <!></button>";
export const _walks_ = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/same-source-alias-pattern-and-identifier/template.marko");