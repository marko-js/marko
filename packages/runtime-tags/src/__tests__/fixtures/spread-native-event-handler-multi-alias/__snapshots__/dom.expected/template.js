const $MyButton_content__walks = /* get, over(2) */" c",
  $MyButton_content__template = "<button></button> ";
export const $template = `<div id=el></div>${$MyButton_content__template}<!>`;
export const $walks = /* over(1), <MyButton>, over(1) */`b/${$MyButton_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyButton_content2 = _._content_resume("__tests__/template.marko_2_content", "Click Me", /* over(1) */"b");
const $MyButton_content__input_onClick__script = _._script("__tests__/template.marko_1_input_onClick", $scope => _._on($scope["#button/0"], "click", function () {
  document.getElementById("el").textContent += "[onClick(child)]";
  $scope.input_onClick();
}));
const $MyButton_content__input_onClick = /* @__PURE__ */_._const("input_onClick", $MyButton_content__input_onClick__script);
const $MyButton_content__input__script = _._script("__tests__/template.marko_1_input", $scope => _._attrs_script($scope, "#button/0"));
const $MyButton_content__input = /* @__PURE__ */_._const("input", $scope => {
  _._attrs_partial_content($scope, "#button/0", $scope.input, {
    "on-click": 1
  });
  $MyButton_content__input_onClick($scope, $scope.input.onClick);
  $MyButton_content__input__script($scope);
});
const $MyButton_content__$params = ($scope, $params2) => $MyButton_content__input($scope, $params2[0]);
export function $setup($scope) {
  $MyButton_content__input($scope["#childScope/0"], {
    "on-click": $onclick,
    onClick: $onClick,
    content: $MyButton_content2($scope)
  });
}
function $onClick() {
  document.getElementById("el").textContent += "[onClick(parent)]";
}
function $onclick() {
  throw new Error("Should never be called.");
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
_._resume("__tests__/template.marko_0/onclick", $onclick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);