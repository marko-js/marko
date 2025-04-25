export const $template = "<div><button id=outer></button><!></div>";
export const $walks = /* next(1), get, over(1), replace, out(1) */"D b%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count$if$content_effect = _$.effect("__tests__/template.marko_2_count", ($scope, {
  _: {
    _: {
      count
    }
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope._._, count + 1), count;
}));
const $count$if$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $count$if$content_effect($scope);
}, $scope => $scope._._);
const $setup$if$content = $count$if$content;
const $if_content2 = /* @__PURE__ */_$.createRenderer("<button id=count> </button>", /* get, next(1), get */" D ", $setup$if$content);
const $if$if$content = /* @__PURE__ */_$.conditional("#text/1", $if_content2);
const $inner$if$content_effect = _$.effect("__tests__/template.marko_1_inner", ($scope, {
  _: {
    inner
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $inner($scope._, !inner);
}));
const $inner$if$content = /* @__PURE__ */_$.conditionalClosure("inner", "#text/1", 0, ($scope, inner) => {
  $if$if$content($scope, inner ? 0 : 1);
  $inner$if$content_effect($scope);
});
const $setup$if$content2 = $inner$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("<button id=inner></button><!><!>", /* get, over(1), replace */" b%D", $setup$if$content2);
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
const $outer_effect = _$.effect("__tests__/template.marko_0_outer", ($scope, {
  outer
}) => _$.on($scope["#button/0"], "click", function () {
  $outer($scope, !outer);
}));
const $outer = /* @__PURE__ */_$.state("outer/2", ($scope, outer) => {
  $if($scope, outer ? 0 : 1);
  $outer_effect($scope);
});
const $inner = /* @__PURE__ */_$.state("inner/3", $inner$if$content);
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$if$content);
const $count = /* @__PURE__ */_$.state("count/4", $count_closure);
export function $setup($scope) {
  $outer($scope, true);
  $inner($scope, true);
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);