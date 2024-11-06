export const _template_ = "";
export const _walks_ = "";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _el__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el", _scope => {
  const {
    el
  } = _scope;
  el().textContent = "hello";
});
export const _el_ = /* @__PURE__ */_$.value("el", (_scope, el) => _el__effect(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _el_(_scope, input.el));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");