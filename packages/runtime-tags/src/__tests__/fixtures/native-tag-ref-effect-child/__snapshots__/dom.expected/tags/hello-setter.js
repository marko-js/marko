export const _template_ = "";
export const _walks_ = "";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _el__effect = _$.effect("__tests__/tags/hello-setter.marko_0_el", ({
  "el/2": el
}) => (el().textContent = "hello"));
export const _el_ = /* @__PURE__ */_$.value("el/2", (_scope, el) => _el__effect(_scope));
export const _input_ = /* @__PURE__ */_$.value("input/1", (_scope, input) => _el_(_scope, input.el));
export const _params__ = /* @__PURE__ */_$.value("_params_/0", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello-setter.marko", _template_, _walks_, _setup_, () => _params__);