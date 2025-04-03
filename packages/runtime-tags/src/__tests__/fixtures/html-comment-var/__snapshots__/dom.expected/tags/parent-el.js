export const $template = "<!--Body Text-->";
export const $walks = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $tagName = /* @__PURE__ */_$.state("tagName/1", _$.tagVarSignal);
const $setup_effect = _$.effect("__tests__/tags/parent-el.marko_0", $scope => $tagName($scope, $scope["#comment/0"].parentElement.tagName));
export function $setup($scope) {
  $tagName($scope, undefined);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/parent-el.marko", $template, $walks, $setup);