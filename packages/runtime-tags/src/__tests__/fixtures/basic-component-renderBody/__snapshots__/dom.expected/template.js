export const $template = _myButton_template;
export const $walks = /* <my-button> */`/${_myButton_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _myButton, $content as _myButton_input_content, $onClick as _myButton_input_onClick, $template as _myButton_template, $walks as _myButton_walks } from "./tags/my-button.marko";
const $mybutton_content__clickCount = /* @__PURE__ */_._closure_get("clickCount", $scope => _._text($scope["#text/0"], $scope._.clickCount));
const $mybutton_content__setup = $mybutton_content__clickCount;
const $mybutton_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $mybutton_content__setup);
const $clickCount__closure = /* @__PURE__ */_._closure($mybutton_content__clickCount);
const $clickCount = /* @__PURE__ */_._let("clickCount/1", $scope => {
  _myButton_input_onClick($scope["#childScope/0"], $onClick($scope));
  $clickCount__closure($scope);
});
export function $setup($scope) {
  _myButton($scope["#childScope/0"]);
  _myButton_input_content($scope["#childScope/0"], $mybutton_content($scope));
  $clickCount($scope, 0);
}
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.clickCount + 1);
  };
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);