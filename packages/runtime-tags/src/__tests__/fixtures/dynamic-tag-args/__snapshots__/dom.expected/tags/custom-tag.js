export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => _$.data($scope["#text/0"], JSON.stringify(input)));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);