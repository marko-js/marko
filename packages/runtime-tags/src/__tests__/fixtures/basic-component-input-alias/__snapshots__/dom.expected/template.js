export const $template = _myButton_template;
export const $walks = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import { $setup as _myButton, $text as _myButton_input_text, $onClick as _myButton_input_onClick, $template as _myButton_template, $walks as _myButton_walks } from "./tags/my-button.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $clickCount = /* @__PURE__ */_$.state("clickCount/1", ($scope, clickCount) => {
  _myButton_input_text($scope["#childScope/0"], clickCount);
  _myButton_input_onClick($scope["#childScope/0"], $onClick($scope));
});
export function $setup($scope) {
  _myButton($scope["#childScope/0"]);
  $clickCount($scope, 0);
}
function $onClick($scope, {
  clickCount
} = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1), clickCount;
  };
}
_$.register("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);