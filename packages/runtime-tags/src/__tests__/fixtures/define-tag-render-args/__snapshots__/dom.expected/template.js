export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $a$define$content = /* @__PURE__ */_$.value("a", ($scope, a) => _$.data($scope["#text/0"], a));
const $b$define$content = /* @__PURE__ */_$.value("b", ($scope, b) => _$.data($scope["#text/1"], b));
const $c$define$content = /* @__PURE__ */_$.value("c", ($scope, c) => _$.data($scope["#text/2"], c));
const $params2$define$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $a$define$content($scope, $params2[0]);
  $b$define$content($scope, $params2[1]);
  $c$define$content($scope, $params2[2]);
});
const $define_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div><!>|<!>|<!></div>", /* next(1), replace, over(2), replace, over(2), replace, out(1) */"D%c%c%l", 0, $params2$define$content);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, 0, 1);
const $expr_x_MyTag = /* @__PURE__ */_$.intersection(5, $scope => {
  let {
    x,
    MyTag
  } = $scope;
  $dynamicTag($scope, MyTag, () => [1, "Hello", x]);
});
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/1"], "click", function () {
  $x($scope, ++x)
}));
const $x = /* @__PURE__ */_$.state("x/3", ($scope, x) => {
  _$.data($scope["#text/2"], x);
  $expr_x_MyTag($scope);
  $x_effect($scope);
});
const $MyTag = /* @__PURE__ */_$.value("MyTag", $expr_x_MyTag);
export function $setup($scope) {
  $x($scope, 1);
  $MyTag($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);