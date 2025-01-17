export const _template_ = "<button><!> <!></button>";
export const _walks_ = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _c = (_scope, c) => {
  _$.data(_scope["#text/1"], c);
};
export const _b_ = /* @__PURE__ */_$.value("b", (_scope, b) => {
  _$.data(_scope["#text/0"], b);
  _c(_scope, b);
});
export const _pattern__ = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => _b_(_scope, _pattern_.b));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _pattern__(_scope, input.a));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);