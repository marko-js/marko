import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _myButton from "./components/my-button.marko";
_$.register("__tests__/components/my-button.marko", _myButton);
const $count$mybutton$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => _$.data($scope["#text/0"], count));
const $setup$mybutton$content = $count$mybutton$content;
const $mybutton_content = _$.registerContent("__tests__/template.marko_1_renderer", " ", /* get, over(1) */" b", $setup$mybutton$content);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $mybutton_content);
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$mybutton$content);
const $count = /* @__PURE__ */_$.state("count/1", ($scope, count) => {
  $dynamicTag($scope, _myButton, () => ({
    onClick: $onClick($scope)
  }));
  $count_closure($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
function $onClick($scope, {
  count
} = $scope) {
  return function () {
    $count($scope, ++count)
  };
}
_$.register("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);