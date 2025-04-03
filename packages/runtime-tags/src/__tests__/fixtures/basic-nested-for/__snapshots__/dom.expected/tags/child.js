export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $name = /* @__PURE__ */_$.value("name", ($scope, name) => _$.data($scope["#text/0"], name));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $name($scope, input.name));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);