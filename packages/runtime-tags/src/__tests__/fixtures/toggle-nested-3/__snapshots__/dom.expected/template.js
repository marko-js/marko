export const $template = "<div><button id=outer></button><!> hello</div>";
export const $walks = /* next(1), get, over(1), replace, out(1) */"D b%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content2__count__script = _._script("__tests__/template.marko_2_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope._._, $scope._._.count + 1);
}));
const $if_content2__count = /* @__PURE__ */_._closure_get("count", $scope => {
  _._text($scope["#text/1"], $scope._._.count);
  $if_content2__count__script($scope);
}, $scope => $scope._._);
const $if_content2__setup = $if_content2__count;
const $if_content__if = /* @__PURE__ */_._if("#text/1", "<button id=count> </button>", /* get, next(1), get, out(1) */" D l", $if_content2__setup);
const $if_content__inner__script = _._script("__tests__/template.marko_1_inner", $scope => _._on($scope["#button/0"], "click", function () {
  $inner($scope._, !$scope._.inner);
}));
const $if_content__inner = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => {
  $if_content__if($scope, $scope._.inner ? 0 : 1);
  $if_content__inner__script($scope);
});
const $if_content__setup = $if_content__inner;
const $if = /* @__PURE__ */_._if("#text/1", "<button id=inner></button><!><!>", /* get, over(1), replace, over(2) */" b%c", $if_content__setup);
const $outer__script = _._script("__tests__/template.marko_0_outer", $scope => _._on($scope["#button/0"], "click", function () {
  $outer($scope, !$scope.outer);
}));
const $outer = /* @__PURE__ */_._let("outer/2", $scope => {
  $if($scope, $scope.outer ? 0 : 1);
  $outer__script($scope);
});
const $inner = /* @__PURE__ */_._let("inner/3", $if_content__inner);
const $count__closure = /* @__PURE__ */_._closure($if_content2__count);
const $count = /* @__PURE__ */_._let("count/4", $count__closure);
export function $setup($scope) {
  $outer($scope, true);
  $inner($scope, true);
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);