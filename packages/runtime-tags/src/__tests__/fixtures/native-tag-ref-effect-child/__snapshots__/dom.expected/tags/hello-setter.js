export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $el_effect = _$.effect("__tests__/tags/hello-setter.marko_0_el", ({
  el
}) => (el().textContent = "hello"));
export const $el = /* @__PURE__ */_$.value("el", $el_effect);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $el($scope, input.el));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello-setter.marko", $template, $walks, $setup, $input);