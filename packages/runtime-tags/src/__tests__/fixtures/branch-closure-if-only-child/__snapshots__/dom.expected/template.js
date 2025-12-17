export const $template = "<button> </button><div></div>";
export const $walks = /* get, next(1), get, out(1), get, over(1) */" D l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__count = /* @__PURE__ */_._if_closure("#div/2", 0, $scope => _._text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/3", $scope => {
  _._text($scope["#text/1"], $scope.count);
  $if_content__count($scope);
  $count__script($scope);
});
const $if = /* @__PURE__ */_._if("#div/2", " ", /* get, over(1) */" b", $if_content__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#div/2"], "click", function () {}));
export function $setup($scope) {
  $count($scope, 0);
  $if($scope, true ? 0 : 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);