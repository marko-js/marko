export const $template = _myButton_template;
export const $walks = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _myButton, $content as _myButton_input_content, $onClick as _myButton_input_onClick, $template as _myButton_template, $walks as _myButton_walks } from "./tags/my-button.marko";
const $clickCount$mybutton$content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", ($scope, clickCount) => _$.data($scope["#text/0"], clickCount));
const $mybutton_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", " ", /* get */" ", 0, 0, $clickCount$mybutton$content);
const $clickCount_closure = /* @__PURE__ */_$.dynamicClosure($clickCount$mybutton$content);
const $clickCount = /* @__PURE__ */_$.state("clickCount/1", ($scope, clickCount) => {
  _myButton_input_onClick($scope["#childScope/0"], $onClick($scope));
  $clickCount_closure($scope);
});
export function $setup($scope) {
  _myButton($scope["#childScope/0"]);
  _myButton_input_content($scope["#childScope/0"], $mybutton_content($scope));
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