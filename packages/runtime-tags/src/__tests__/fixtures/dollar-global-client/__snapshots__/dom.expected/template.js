export const $template = "<div><!><!><button>Toggle</button></div>";
export const $walks = /* next(1), replace, over(1), replace, over(1), get, out(1) */"D%b%b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content2__setup = $scope => {
  _._text($scope["#text/0"], $scope.$global.x);
};
const $if_content__setup = $scope => {
  _._text($scope["#text/0"], $scope.$global.x);
};
const $if = /* @__PURE__ */_._if("#text/0", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $if2 = /* @__PURE__ */_._if("#text/1", "<span class=hidden> </span>", /* next(1), get, out(1) */"D l", $if_content2__setup);
const $show__script = _._script("__tests__/template.marko_0_show", $scope => _._on($scope["#button/2"], "click", function () {
  $show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */_._let("show/3", $scope => {
  $if($scope, $scope.show ? 0 : 1);
  $if2($scope, !$scope.show ? 0 : 1);
  $show__script($scope);
});
export function $setup($scope) {
  $show($scope, false);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);