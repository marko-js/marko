import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import _myButton from "./components/my-button.marko";
_._resume("__tests__/components/my-button.marko", _myButton);
const $mybutton_content__count = /* @__PURE__ */_._closure_get("count", ($scope, count) => _._text($scope["#text/0"], count));
const $mybutton_content__setup = $mybutton_content__count;
const $mybutton_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $mybutton_content__setup);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $mybutton_content);
const $count__closure = /* @__PURE__ */_._closure($mybutton_content__count);
const $count = /* @__PURE__ */_._let("count/1", ($scope, count) => {
  $dynamicTag($scope, _myButton, () => ({
    onClick: $onClick($scope)
  }));
  $count__closure($scope);
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
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);