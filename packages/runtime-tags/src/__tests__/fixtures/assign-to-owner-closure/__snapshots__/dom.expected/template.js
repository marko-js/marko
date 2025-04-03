export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$if$content_effect = _$.effect("__tests__/template.marko_1", $scope => _$.on($scope["#button/0"], "click", function () {
  $hide($scope._, true);
}));
const $setup$if$content = $setup$if$content_effect;
const $if_content = /* @__PURE__ */_$.createRenderer("<button></button>", /* get */" ", $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
const $hide = /* @__PURE__ */_$.state("hide/1", ($scope, hide) => $if($scope, !hide ? 0 : 1));
export function $setup($scope) {
  $hide($scope, undefined);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);