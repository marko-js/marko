export const $template = "<!--Body Text-->";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagName = /* @__PURE__ */_._let("tagName/1", $scope => _._return($scope, $scope.tagName));
const $setup__script = _._script("__tests__/tags/parent-el.marko_0", $scope => $tagName($scope, _._el_read($scope["#comment/0"]).parentElement.tagName));
export function $setup($scope) {
  $tagName($scope, undefined);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/tags/parent-el.marko", $template, $walks, $setup);