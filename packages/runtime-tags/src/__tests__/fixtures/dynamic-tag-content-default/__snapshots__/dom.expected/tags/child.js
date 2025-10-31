export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $input = /* @__PURE__ */_._const("input", $scope => $dynamicTag($scope, $scope.input));
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);