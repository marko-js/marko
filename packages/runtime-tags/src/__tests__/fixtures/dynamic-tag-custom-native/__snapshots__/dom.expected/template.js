export const $template = "<button></button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $tagName__script = _._script("__tests__/template.marko_0_tagName", ($scope, {
  tagName
}) => _._on($scope["#button/0"], "click", function () {
  $tagName($scope, tagName = tagName === child ? "div" : child);
}));
const $tagName = /* @__PURE__ */_._let("tagName/2", ($scope, tagName) => {
  $dynamicTag($scope, tagName, () => ({
    id: "dynamic"
  }));
  $tagName__script($scope);
});
export function $setup($scope) {
  $tagName($scope, child);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);