export const _template_ = "<div>Child 2 has <!></div>";
export const _walks_ = /* next(1), over(1), replace, out(1) */"Db%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _value_ = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child2.marko", _template_, _walks_, _setup_, () => _params__);