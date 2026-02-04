const $MyButton_content__walks = /* get, over(2) */" c",
  $MyButton_content__template = "<button></button> ";
export const $template = `<div></div>${$MyButton_content__template}<!>`;
export const $walks = /* get, over(1), <MyButton>, over(1) */` b/${$MyButton_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyButton_content__input_message__script = _._script("__tests__/template.marko_1_input_message", $scope => _._on($scope["#button/0"], "click", function () {
  _._el_read($scope._["#div/0"]).textContent += `[onClick(${$scope.input_message})]`;
}));
const $MyButton_content__input_message = /* @__PURE__ */_._const("input_message", $MyButton_content__input_message__script);
const $MyButton_content__$params = ($scope, $params2) => $MyButton_content__input($scope, $params2[0]);
const $MyButton_content__input = ($scope, input) => $MyButton_content__input_message($scope, input.message);
export function $setup($scope) {
  $scope["#childScope/1"]._ = $scope;
  $MyButton_content__input_message($scope["#childScope/1"], "hello");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);