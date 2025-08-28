export const $template = "<!><!><button class=reset>reset</button>";
export const $walks = /* over(1), dynamicTagWithVar, over(1), get, over(1) */"b1b b";
import Counter from "./tags/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => $count);
const $count = _$.registerBoundSignal("__tests__/template.marko_0_count/var", $scope => {});
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/2"], "click", function () {
  _$.tagVarSignalChange($scope["ConditionalScope:#text/0"], 0);
}));
export function $setup($scope) {
  $dynamicTag($scope, getCounter());
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);