export const _template = "";
export const _walks = "";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _el_effect = _$.effect("__tests__/tags/hello-setter.marko_0_el", ({
  el
}) => (el().textContent = "hello"));
export const _el = /* @__PURE__ */_$.value("el", _scope => _el_effect(_scope));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _el(_scope, input.el));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello-setter.marko", _template, _walks, _setup, _input);