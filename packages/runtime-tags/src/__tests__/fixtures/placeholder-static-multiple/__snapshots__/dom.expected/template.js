export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $mounted$if$content = /* @__PURE__ */_$.conditionalClosure("mounted", "#div/0", 0, ($scope, mounted) => _$.data($scope["#text/0"], mounted && "C"));
const $setup$if$content = $mounted$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("AB<!>D", /* over(1), replace, over(2) */"b%c", $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#div/0", $if_content);
const $mounted = /* @__PURE__ */_$.state("mounted/1", ($scope, mounted) => {
  $if($scope, mounted ? 0 : 1);
  $mounted$if$content($scope);
});
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => $mounted($scope, true));
export function $setup($scope) {
  $mounted($scope, undefined);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);