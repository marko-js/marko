export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_value_dummy = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    value,
    dummy
  } = _scope;
  _$.data(_scope["#text/0"], (dummy, value));
});
const _dummy = /* @__PURE__ */_$.state("dummy", 0, () => _expr_value_dummy);
export const _value_ = /* @__PURE__ */_$.value("value", 0, () => _expr_value_dummy);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _value_(_scope, input.value), () => _value_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _dummy(_scope, {});
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/display-intersection.marko", _template_, _walks_, _setup_, void 0, () => _params__);