export const $template = _myButton_template;
export const $walks = /* <my-button> */`/${_myButton_walks}&`;
import { $setup as _myButton, $input as _myButton_input, $template as _myButton_template, $walks as _myButton_walks } from "./tags/my-button.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $mybutton_content = _._content_resume("__tests__/template.marko_1_content", "Click", /* over(1) */"b");
const $test = /* @__PURE__ */_._const("test", $scope => _myButton_input($scope["#childScope/0"], {
  onClick: $onClick($scope),
  content: $mybutton_content($scope)
}));
export function $setup($scope) {
  _myButton($scope["#childScope/0"]);
  $test($scope, "foo");
}
function $onClick($scope) {
  return function () {
    console.log($scope.test);
  };
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);