export const $template = "<button></button><div style=\"border:1px solid black\">foo bar</div>";
export const $walks = /* get, over(1), get, over(1) */" b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $open_effect = _$.effect("__tests__/template.marko_0_open", ($scope, {
  open
}) => _$.on($scope["#button/0"], "click", function () {
  $open($scope, !open);
}));
const $open = /* @__PURE__ */_$.state("open/2", ($scope, open) => {
  _$.styleItem($scope["#div/1"], "display", open ? undefined : "none");
  $open_effect($scope);
});
export function $setup($scope) {
  $open($scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);