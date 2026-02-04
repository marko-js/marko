export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__a__OR__b = /* @__PURE__ */_._or(1, $scope => _._text($scope["#text/0"], $scope._.a + $scope._.b));
const $if_content__a = /* @__PURE__ */_._if_closure("#text/0", 0, $if_content__a__OR__b);
const $if_content__setup = $scope => {
  $if_content__a._($scope);
  $if_content__b._($scope);
};
const $if_content__b = /* @__PURE__ */_._if_closure("#text/0", 0, $if_content__a__OR__b);
const $a = /* @__PURE__ */_._let("a/1");
const $b = /* @__PURE__ */_._let("b/2");
const $if = /* @__PURE__ */_._if("#text/0", " ", /* get, over(1) */" b", $if_content__setup);
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
  $if($scope, true ? 0 : 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);