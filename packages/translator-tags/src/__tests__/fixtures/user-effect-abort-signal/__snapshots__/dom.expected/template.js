export const _template_ = "<div><!> <!></div>";
export const _walks_ = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
import { data as _data, resetAbortSignal as _resetAbortSignal, getAbortSignal as _getAbortSignal, state as _state, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _b = /* @__PURE__ */_state("b", (_scope, b) => _data(_scope["#text/1"], b));
const _a = /* @__PURE__ */_state("a", (_scope, a) => _data(_scope["#text/0"], a));
const _input__effect = _register("packages/translator-tags/src/__tests__/fixtures/user-effect-abort-signal/template.marko_0_input", _scope => {
  const {
    input
  } = _scope;
  {
    const previousValue = _a(_scope, input.value + 1);
    _getAbortSignal(_scope, 0).onabort = () => _b(_scope, previousValue);
  }
});
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _resetAbortSignal(_scope, 0);
  _queueEffect(_scope, _input__effect);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/user-effect-abort-signal/template.marko");