export const $template = _FancyButton_template;
export const $walks = /* beginChild, _FancyButton_walks, endChild */`/${_FancyButton_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _FancyButton, $input as _FancyButton_input, $template as _FancyButton_template, $walks as _FancyButton_walks } from "./tags/FancyButton.marko";
const $FancyButton_content__clickCount = /* @__PURE__ */_._closure_get("clickCount", ($scope, clickCount) => _._text($scope["#text/0"], clickCount));
const $FancyButton_content__setup = $FancyButton_content__clickCount;
const $FancyButton_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $FancyButton_content__setup);
const $clickCount__closure = /* @__PURE__ */_._closure($FancyButton_content__clickCount);
const $clickCount = /* @__PURE__ */_._let("clickCount/1", ($scope, clickCount) => {
  _FancyButton_input($scope["#childScope/0"], {
    onClick: $onClick($scope),
    content: $FancyButton_content($scope)
  });
  $clickCount__closure($scope);
});
export function $setup($scope) {
  _FancyButton($scope["#childScope/0"]);
  $clickCount($scope, 0);
}
function $onClick($scope, {
  clickCount
} = $scope) {
  return function () {
    $clickCount($scope, ++clickCount)
  };
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);