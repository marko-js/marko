export const $template = "<div>Id is <!></div>";
export const $walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $id = /* @__PURE__ */_$.value("id", ($scope, id) => _$.data($scope["#text/0"], id));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $id($scope, input.id));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);