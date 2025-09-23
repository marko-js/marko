const $define_content__walks = /* next(1), over(1), replace, out(1) */"Db%l",
  $define_content__template = "<div>Hello <!></div>";
export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__value = /* @__PURE__ */_._const("value", ($scope, value) => _._text($scope["#text/0"], value));
const $define_content__setup = _._child_setup();
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $define_content__value($scope, $temp.value));
const $define_content = _._content_resume("__tests__/template.marko_2_content", $define_content__template, $define_content__walks, $define_content__setup, $define_content__$params);
const $if_content__setup = $scope => {
  $define_content__setup($scope["#childScope/0"], $scope._);
  $if_content__x._($scope);
};
const $if_content__x = /* @__PURE__ */_._if_closure("x", "#text/0", 0, ($scope, x) => $define_content__value($scope["#childScope/0"], x));
const $if_content = /* @__PURE__ */_._content_branch(`<!>${$define_content__template}<!>`, /* over(1), beginChild, $define_content__walks, endChild, over(1) */`b/${$define_content__walks}&b`, $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
const $show = /* @__PURE__ */_._let("show/3", ($scope, show) => $if($scope, show ? 0 : 1));
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x);
  $show($scope, true);
}));
const $x = /* @__PURE__ */_._let("x/4", ($scope, x) => {
  _._text($scope["#text/2"], x);
  $if_content__x($scope);
  $x__script($scope);
});
export function $setup($scope) {
  $show($scope, true);
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);