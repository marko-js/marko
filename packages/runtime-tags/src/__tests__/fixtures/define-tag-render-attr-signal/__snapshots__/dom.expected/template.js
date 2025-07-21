export const $template = "<!><!><button> </button>";
export const $walks = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $number$define$content = /* @__PURE__ */_$.value("number", ($scope, number) => _$.data($scope["#text/0"], number));
const $params2$define$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $temp$define$content($scope, $params2?.[0]));
const $temp$define$content = /* @__PURE__ */_$.value("$temp", ($scope, $temp) => $number$define$content($scope, $temp.number));
const $define_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div> </div>", /* next(1), get */"D ", 0, $params2$define$content);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $expr_x_MyTag = /* @__PURE__ */_$.intersection(5, $scope => {
  const {
    x,
    MyTag
  } = $scope;
  $dynamicTag($scope, MyTag, () => ({
    number: x
  }));
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