export const $template = "<!><!><!>";
export const $walks = /* over(1), dynamicTagWithVar, over(2) */"b1c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $r);
const $r = _._var_resume("__tests__/tags/child.marko_0_r/var", /* @__PURE__ */_._const("r", $scope => {
  debugger;
  _._return($scope, $scope.r);
}));
export const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
export const $input = ($scope, input) => $input_content($scope, input.content);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);