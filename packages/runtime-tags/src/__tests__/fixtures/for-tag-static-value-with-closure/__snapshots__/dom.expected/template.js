export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__count = /* @__PURE__ */_._for_closure("#text/0", $scope => _._text($scope["#text/1"], $scope._.count));
const $for_content__setup = $scope => {
  $for_content__count._($scope);
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/1"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/3", $scope => {
  _._text($scope["#text/2"], $scope.count);
  $for_content__count($scope);
  $count__script($scope);
});
const $for = /* @__PURE__ */_._for_to("#text/0", "<!>-<!>", /* replace, over(2), replace, over(1) */"%c%b", $for_content__setup);
export function $setup($scope) {
  $count($scope, 0);
  $for($scope, [3, 0, 1]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);