export const $template = "<!><!><button class=reset>reset</button>";
export const $walks = /* over(1), dynamicTagWithVar, over(1), get, over(1) */"b1b b";
import Counter from "./tags/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $count);
const $count = _._var_resume("__tests__/template.marko_0_count/var", $scope => {});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/2"], "click", function () {
  _._var_change($scope["BranchScopes:#text/0"], 0, "count");
}));
export function $setup($scope) {
  $dynamicTag($scope, getCounter());
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);