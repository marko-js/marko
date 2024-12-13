export const _template_ = "<div><span> </span></div>";
export const _walks_ = /* next(2), get, out(2) */"E m";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_x_ = /* @__PURE__ */_$.value("input_x", (_scope, input_x) => _$.data(_scope["#text/0"], input_x));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_x_(_scope, input.x));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);