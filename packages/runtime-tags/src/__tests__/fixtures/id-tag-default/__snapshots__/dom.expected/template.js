export const $template = "<button>toggle</button><div>foo</div><div>bar</div><div>baz</div>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $sometimesBar = ($scope, sometimesBar) => _._attr($scope["#div/2"], "id", sometimesBar);
const $bar__OR__baz__script = _._script("__tests__/template.marko_0_bar_baz", $scope => _._on($scope["#button/0"], "click", function () {
  $bar($scope, $scope.bar ? null : "bar");
  $baz($scope, $scope.baz ? null : "baz");
}));
const $bar__OR__baz = /* @__PURE__ */_._or(6, $bar__OR__baz__script);
const $bar = /* @__PURE__ */_._let("bar/4", $scope => {
  $sometimesBar($scope, $scope.bar || _._id($scope));
  $bar__OR__baz($scope);
});
const $sometimesBaz = ($scope, sometimesBaz) => _._attr($scope["#div/3"], "id", sometimesBaz);
const $baz = /* @__PURE__ */_._let("baz/5", $scope => {
  $sometimesBaz($scope, $scope.baz || _._id($scope));
  $bar__OR__baz($scope);
});
const $alwaysFoo = ($scope, alwaysFoo) => _._attr($scope["#div/1"], "id", alwaysFoo);
export function $setup($scope) {
  $bar($scope, undefined);
  $baz($scope, "baz");
  $alwaysFoo($scope, "foo" || _._id($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);