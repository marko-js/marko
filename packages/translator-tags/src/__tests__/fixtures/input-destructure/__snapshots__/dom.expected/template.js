export const _template_ = "<!> <!>";
export const _walks_ = /* replace, over(2), replace, over(1) */"%c%b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _b_ = /* @__PURE__ */_$.value("b", (_scope, b) => _$.data(_scope["#text/1"], b));
export const _a_ = /* @__PURE__ */_$.value("a", (_scope, a) => _$.data(_scope["#text/0"], a));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _a_(_scope, input.a);
  _b_(_scope, input.b);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);