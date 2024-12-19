export const _template_ = "<div>child</div>";
export const _walks_ = /* over(1) */"b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input__effect = _$.effect("__tests__/tags/child.marko_0_input", (_scope, {
  input
}) => {
  input.write('mounted');
  _$.getAbortSignal(_scope, 0).onabort = () => {
    input.write('destroyed');
  };
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.resetAbortSignal(_scope, 0);
  _input__effect(_scope);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, void 0, () => _params__);