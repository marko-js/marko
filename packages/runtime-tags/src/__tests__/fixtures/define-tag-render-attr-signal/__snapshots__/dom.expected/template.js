export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__number = /* @__PURE__ */_._const("number", ($scope, number) => _._text($scope["#text/0"], number));
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $define_content__number($scope, $temp.number));
const $define_content = _._content_resume("__tests__/template.marko_1_content", "<div> </div>", /* next(1), get, out(1) */"D l", 0, $define_content__$params);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $x__OR__MyTag = /* @__PURE__ */_._or(5, $scope => {
  let {
    x,
    MyTag
  } = $scope;
  $dynamicTag($scope, MyTag, () => ({
    number: x
  }));
});
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x);
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