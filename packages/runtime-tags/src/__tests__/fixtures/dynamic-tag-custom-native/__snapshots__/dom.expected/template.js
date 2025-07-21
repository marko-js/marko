export const $template = "<button></button><!><!>";
export const $walks = /* get, over(1), replace, over(1) */" b%bD";
import child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
const $tagName_effect = _$.effect("__tests__/template.marko_0_tagName", ($scope, {
  tagName
}) => _$.on($scope["#button/0"], "click", function () {
  $tagName($scope, tagName = tagName === child ? "div" : child);
}));
const $tagName = /* @__PURE__ */_$.state("tagName/2", ($scope, tagName) => {
  $dynamicTag($scope, tagName, () => ({
    id: "dynamic"
  }));
  $tagName_effect($scope);
});
export function $setup($scope) {
  $tagName($scope, child);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);