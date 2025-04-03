export const $template = "<!><!><button id=changeTag></button>";
export const $walks = /* replace, over(1), get, over(1) */"D%b b";
import { $setup as _counter, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$tagName$content = $scope => {
  _counter($scope["#childScope/0"]);
};
const $tagName_content = _$.registerContent("__tests__/template.marko_1_renderer", _counter_template, /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`, $setup$tagName$content);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $tagName_content);
const $tagName_effect = _$.effect("__tests__/template.marko_0_tagName", ($scope, {
  tagName
}) => _$.on($scope["#button/1"], "click", function () {
  $tagName($scope, tagName === "span" ? "div" : "span");
}));
const $tagName = /* @__PURE__ */_$.state("tagName/2", ($scope, tagName) => {
  $dynamicTag($scope, tagName);
  $tagName_effect($scope);
});
export function $setup($scope) {
  $tagName($scope, "div");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);