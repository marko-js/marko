export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $input_what = /* @__PURE__ */_._const("input_what", $scope => $dynamicTag($scope, $scope.input_what));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_what($scope, $scope.input.what));
export default /* @__PURE__ */_._template("__tests__/tags/thing.marko", $template, $walks, $setup, $input);