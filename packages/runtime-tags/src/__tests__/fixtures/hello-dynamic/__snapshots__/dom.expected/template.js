export const $template = "Hello <!>! Hello <!>! Hello <!>!";
export const $walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_name = /* @__PURE__ */_._const("input_name", $scope => {
  _._text($scope["#text/0"], $scope.input_name);
  _._html($scope, $scope.input_name, "#text/1");
});
export const $input_missing = /* @__PURE__ */_._const("input_missing", $scope => _._html($scope, $scope.input_missing, "#text/2"));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_name($scope, $scope.input.name);
  $input_missing($scope, $scope.input.missing);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);