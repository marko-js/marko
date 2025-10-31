export const $template = "<button><!> <!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $onClick__script = _._script("__tests__/tags/my-button.marko_0_onClick", $scope => _._on($scope["#button/0"], "click", $scope.onClick));
export const $onClick = /* @__PURE__ */_._const("onClick", $onClick__script);
export const $text = /* @__PURE__ */_._const("text", $scope => {
  _._text($scope["#text/1"], $scope.text);
  $textAlias($scope, $scope.text);
});
const $textAlias = $scope => {
  _._text($scope["#text/2"], $scope.text);
};
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $onClick($scope, $scope.input.onClick);
  $value2($scope, $scope.input.value);
});
export const $value2 = /* @__PURE__ */_._const("$value", $scope => $text($scope, $scope.$value.text));
export default /* @__PURE__ */_._template("__tests__/tags/my-button.marko", $template, $walks, $setup, $input);