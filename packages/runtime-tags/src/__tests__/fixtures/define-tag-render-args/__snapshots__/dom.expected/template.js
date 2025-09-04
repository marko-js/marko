export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__a = /* @__PURE__ */_._const("a", ($scope, a) => _._text($scope["#text/0"], a));
const $define_content__b = /* @__PURE__ */_._const("b", ($scope, b) => _._text($scope["#text/1"], b));
const $define_content__c = /* @__PURE__ */_._const("c", ($scope, c) => _._text($scope["#text/2"], c));
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => {
  $define_content__a($scope, $params2[0]);
  $define_content__b($scope, $params2[1]);
  $define_content__c($scope, $params2[2]);
});
const $define_content = _._content_resume("__tests__/template.marko_1_content", "<div><!>|<!>|<!></div>", /* next(1), replace, over(2), replace, over(2), replace, out(1) */"D%c%c%l", 0, $define_content__$params);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, 0, 1);
const $x__OR__MyTag = /* @__PURE__ */_._or(5, $scope => {
  let {
    x,
    MyTag
  } = $scope;
  $dynamicTag($scope, MyTag, () => [1, "Hello", x]);
});
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x)
}));
const $x = /* @__PURE__ */_._let("x/3", ($scope, x) => {
  _._text($scope["#text/2"], x);
  $x__OR__MyTag($scope);
  $x__script($scope);
});
const $MyTag = /* @__PURE__ */_._const("MyTag", $x__OR__MyTag);
export function $setup($scope) {
  $x($scope, 1);
  $MyTag($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);