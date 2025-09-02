export const $template = "<button>toggle</button><div>foo</div><div>bar</div><div>baz</div>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $sometimesBar = /* @__PURE__ */_$.value("sometimesBar", ($scope, sometimesBar) => _$.attr($scope["#div/2"], "id", sometimesBar));
const $expr_bar_baz_effect = _$.effect("__tests__/template.marko_0_bar_baz", ($scope, {
  bar,
  baz
}) => _$.on($scope["#button/0"], "click", function () {
  $bar($scope, bar = bar ? null : "bar");
  $baz($scope, baz = baz ? null : "baz");
}));
const $expr_bar_baz = /* @__PURE__ */_$.intersection(6, $expr_bar_baz_effect);
const $bar = /* @__PURE__ */_$.state("bar/4", ($scope, bar) => {
  $sometimesBar($scope, bar || _$.nextTagId($scope));
  $expr_bar_baz($scope);
});
const $sometimesBaz = /* @__PURE__ */_$.value("sometimesBaz", ($scope, sometimesBaz) => _$.attr($scope["#div/3"], "id", sometimesBaz));
const $baz = /* @__PURE__ */_$.state("baz/5", ($scope, baz) => {
  $sometimesBaz($scope, baz || _$.nextTagId($scope));
  $expr_bar_baz($scope);
});
const $alwaysFoo = /* @__PURE__ */_$.value("alwaysFoo", ($scope, alwaysFoo) => _$.attr($scope["#div/1"], "id", alwaysFoo));
export function $setup($scope) {
  $bar($scope, undefined);
  $baz($scope, "baz");
  $alwaysFoo($scope, "foo" || _$.nextTagId($scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);