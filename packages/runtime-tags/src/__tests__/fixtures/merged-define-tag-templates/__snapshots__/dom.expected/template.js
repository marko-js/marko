const $A_content__walks = /* get, over(1) */" b",
  $A_content__template = " ",
  $B_content__walks = /* over(1), <A>, over(1) */`b/${$A_content__walks}&b`,
  $B_content__template = `<!>${$A_content__template}<!>`;
export const $template = `<!>${$B_content__template}<!>`;
export const $walks = /* over(1), <B>, over(1) */`b/${$B_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $B_content__value_length = /* @__PURE__ */_._const("value_length", $scope => $A_content__value($scope["#childScope/0"], $scope.value_length));
const $B_content__tag_input_value = /* @__PURE__ */_._const("value", $scope => $B_content__value_length($scope, $scope.value?.length));
const $B_content__$params = /* @__PURE__ */_._const("$params3", $scope => $B_content__$temp($scope, $scope.$params3?.[0]));
const $B_content__$temp = /* @__PURE__ */_._const("$temp2", $scope => $B_content__tag_input_value($scope, $scope.$temp2.value));
const $A_content__value = /* @__PURE__ */_._const("value", $scope => _._text($scope["#text/0"], $scope.value));
const $A_content__$params = /* @__PURE__ */_._const("$params2", $scope => $A_content__$temp($scope, $scope.$params2?.[0]));
const $A_content__$temp = /* @__PURE__ */_._const("$temp", $scope => $A_content__value($scope, $scope.$temp.value));
const $value = /* @__PURE__ */_._let("value/1", $scope => $B_content__tag_input_value($scope["#childScope/0"], $scope.value));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $value($scope, "hello"));
export function $setup($scope) {
  $value($scope, "");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);