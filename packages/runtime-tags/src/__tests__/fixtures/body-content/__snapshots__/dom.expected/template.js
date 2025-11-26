export const $template = _FancyButton_template;
export const $walks = /* <FancyButton> */`/${_FancyButton_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _FancyButton, $content as _FancyButton_input_content, $attrs as _FancyButton_input_$rest, $template as _FancyButton_template, $walks as _FancyButton_walks } from "./tags/FancyButton.marko";
const $FancyButton_content__clickCount = /* @__PURE__ */_._closure_get("clickCount", $scope => _._text($scope["#text/0"], $scope._.clickCount));
const $FancyButton_content__setup = $FancyButton_content__clickCount;
const $FancyButton_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $FancyButton_content__setup);
const $clickCount__closure = /* @__PURE__ */_._closure($FancyButton_content__clickCount);
const $clickCount = /* @__PURE__ */_._let("clickCount/1", $scope => {
  _FancyButton_input_$rest($scope["#childScope/0"], {
    onClick: $onClick($scope)
  });
  $clickCount__closure($scope);
});
export function $setup($scope) {
  _FancyButton($scope["#childScope/0"]);
  _FancyButton_input_content($scope["#childScope/0"], $FancyButton_content($scope));
  $clickCount($scope, 0);
}
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.clickCount + 1);
  };
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);