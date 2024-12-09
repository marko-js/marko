export const _template_ = "<div><!> <!></div>";
export const _walks_ = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _b = /* @__PURE__ */_$.state("b", (_scope, b) => _$.data(_scope["#text/1"], b));
const _a = /* @__PURE__ */_$.state("a", (_scope, a) => _$.data(_scope["#text/0"], a));
const _input_value__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/user-effect-abort-signal/template.marko_0_input_value", (_scope, {
  input_value
}) => {
  {
    const previousValue = _a(_scope, input_value + 1);
    _$.getAbortSignal(_scope, 0).onabort = () => _b(_scope, previousValue);
  }
});
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _$.resetAbortSignal(_scope, 0);
  _input_value__effect(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/user-effect-abort-signal/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);