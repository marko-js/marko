export const $template = "<div><button id=outer></button><!></div>";
export const $walks = /* next(1), get, over(1), replace, out(1) */"D b%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content2__count__script = _._script("__tests__/template.marko_2_count", ($scope, {
  _: {
    _: {
      count
    }
  }
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope._._, ++count)
}));
const $if_content2__count = /* @__PURE__ */_._closure_get("count", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $if_content2__count__script($scope);
}, $scope => $scope._._);
const $if_content2__setup = $if_content2__count;
const $if_content2 = /* @__PURE__ */_._content_branch("<button id=count> </button>", /* get, next(1), get, out(1) */" D l", $if_content2__setup);
const $if_content__if = /* @__PURE__ */_._if("#text/1", $if_content2);
const $if_content__inner__script = _._script("__tests__/template.marko_1_inner", ($scope, {
  _: {
    inner
  }
}) => _._on($scope["#button/0"], "click", function () {
  $inner($scope._, inner = !inner);
}));
const $if_content__inner = /* @__PURE__ */_._if_closure("inner", "#text/1", 0, ($scope, inner) => {
  $if_content__if($scope, inner ? 0 : 1);
  $if_content__inner__script($scope);
});
const $if_content__setup = $if_content__inner;
const $if_content = /* @__PURE__ */_._content_branch("<button id=inner></button><!><!>", /* get, over(1), replace, over(2) */" b%c", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
const $outer__script = _._script("__tests__/template.marko_0_outer", ($scope, {
  outer
}) => _._on($scope["#button/0"], "click", function () {
  $outer($scope, outer = !outer);
}));
const $outer = /* @__PURE__ */_._let("outer/2", ($scope, outer) => {
  $if($scope, outer ? 0 : 1);
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