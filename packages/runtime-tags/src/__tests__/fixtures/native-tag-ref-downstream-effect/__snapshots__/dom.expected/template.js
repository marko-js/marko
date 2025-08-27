export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$if$content_effect = _$.effect("__tests__/template.marko_1", $scope => ($scope._["#div/0"].textContent = "hello"));
const $setup$if$content = $setup$if$content_effect;
const $if_content = /* @__PURE__ */_$.createRenderer(0, 0, $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
export function $setup($scope) {
  $if($scope, true ? 0 : 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);