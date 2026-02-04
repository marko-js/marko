import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
_._resume("__tests__/components/class-layout.marko", _classLayout);
const $classlayout_content__multiplier__OR__baseCount = /* @__PURE__ */_._or(7, $scope => _._text($scope["#text/4"], $scope._.multiplier * $scope.baseCount));
const $classlayout_content__multiplier__script = _._script("__tests__/template.marko_1_multiplier", $scope => _._on($scope["#button/1"], "click", function () {
  $multiplier($scope._, $scope._.multiplier + 1);
}));
const $classlayout_content__multiplier = /* @__PURE__ */_._closure_get("multiplier", $scope => {
  _._text($scope["#text/2"], $scope._.multiplier);
  $classlayout_content__multiplier__OR__baseCount($scope);
  $classlayout_content__multiplier__script($scope);
});
const $classlayout_content__setup = $classlayout_content__multiplier;
const $classlayout_content__message = ($scope, message) => _._text($scope["#text/0"], message);
const $classlayout_content__baseCount = /* @__PURE__ */_._const("baseCount", $scope => {
  _._text($scope["#text/3"], $scope.baseCount);
  $classlayout_content__multiplier__OR__baseCount($scope);
});
const $classlayout_content__$params = ($scope, $params2) => {
  $classlayout_content__baseCount($scope, $params2[0]);
  $classlayout_content__message($scope, $params2[1]);
};
const $classlayout_content = _._content_resume("__tests__/template.marko_1_content", "<h1> </h1><button id=tags><!> * <!> = <!></button>", /* next(1), get, out(1), get, next(1), replace, over(2), replace, over(2), replace, out(1) */"D l D%c%c%l", $classlayout_content__setup, $classlayout_content__$params);
const $multiplier__closure = /* @__PURE__ */_._closure($classlayout_content__multiplier);
const $multiplier = /* @__PURE__ */_._let("multiplier/1", $multiplier__closure);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $classlayout_content);
export function $setup($scope) {
  $multiplier($scope, 1);
  $dynamicTag($scope, _classLayout);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);