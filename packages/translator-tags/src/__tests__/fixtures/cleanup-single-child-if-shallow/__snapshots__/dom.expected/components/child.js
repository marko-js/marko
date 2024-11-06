export const _template_ = "<div>child</div>";
export const _walks_ = /* over(1) */"b";
export const _setup_ = () => {};
import { resetAbortSignal as _resetAbortSignal, getAbortSignal as _getAbortSignal, effect as _effect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _effect2 = _scope => {
  const {
    input
  } = _scope;
  return () => {
    input.write('destroyed');
  };
};
const _input__effect = _effect("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/components/child.marko_0_input", _scope => {
  const {
    input
  } = _scope;
  input.write('mounted');
  _getAbortSignal(_scope, 0).onabort = _effect2(_scope);
});
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _resetAbortSignal(_scope, 0);
  _input__effect(_scope);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/components/child.marko");