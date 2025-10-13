const $MyTag_content__walks = /* next(1), over(1), replace, out(1) */"Db%l",
  $MyTag_content__template = "<div>Hello <!></div>";
export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyTag_content__value = /* @__PURE__ */_._const("value", ($scope, value) => _._text($scope["#text/0"], value));
const $MyTag_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $MyTag_content__$temp($scope, $params2?.[0]));
const $MyTag_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $MyTag_content__value($scope, $temp.value));
const $if_content__x = /* @__PURE__ */_._if_closure("x", "#text/0", 0, ($scope, x) => $MyTag_content__value($scope["#childScope/0"], x));
const $if_content__setup = $if_content__x;
const $if_content = /* @__PURE__ */_._content_branch(`<!>${$MyTag_content__template}<!>`, /* over(1), beginChild, $MyTag_content__walks, endChild, over(1) */`b/${$MyTag_content__walks}&b`, $if_content__setup);
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