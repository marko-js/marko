export const $template = "= <!><button>Inc</button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/1"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/2", ($scope, count) => {
  _$.data($scope["#text/0"], count);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);