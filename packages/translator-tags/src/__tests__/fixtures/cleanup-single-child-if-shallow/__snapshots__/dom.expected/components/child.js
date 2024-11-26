export const _template_ = "<div>child</div>";
export const _walks_ = /* over(1) */"b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _effect = _scope => {
  const {
    input
  } = _scope;
  return () => {
    input.write('destroyed');
  };
};
const _input__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/components/child.marko_0_input", _scope => {
  const {
    input
  } = _scope;
  input.write('mounted');
  _$.getAbortSignal(_scope, 0).onabort = _effect(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.resetAbortSignal(_scope, 0);
  _input__effect(_scope);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/components/child.marko", _template_, _walks_, _setup_, void 0, () => _params__);