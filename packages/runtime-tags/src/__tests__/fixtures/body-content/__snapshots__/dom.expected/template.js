export const $template = _FancyButton_template;
export const $walks = /* beginChild, _FancyButton_walks, endChild */`/${_FancyButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _FancyButton, $input as _FancyButton_input, $template as _FancyButton_template, $walks as _FancyButton_walks } from "./tags/FancyButton.marko";
const $clickCount$FancyButton$content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", ($scope, clickCount) => _$.data($scope["#text/0"], clickCount));
const $setup$FancyButton$content = $clickCount$FancyButton$content;
const $FancyButton_content = _$.registerContent("__tests__/template.marko_1_renderer", " ", /* get */" ", $setup$FancyButton$content);
const $clickCount_closure = /* @__PURE__ */_$.dynamicClosure($clickCount$FancyButton$content);
const $clickCount = /* @__PURE__ */_$.state("clickCount/1", ($scope, clickCount) => {
  _FancyButton_input($scope["#childScope/0"], {
    onClick: $onClick($scope),
    content: $FancyButton_content($scope)
  });
  $clickCount_closure($scope);
});
export function $setup($scope) {
  _FancyButton($scope["#childScope/0"]);
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