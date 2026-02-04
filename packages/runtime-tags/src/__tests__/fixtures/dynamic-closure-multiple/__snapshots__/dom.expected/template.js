export const $template = "<button></button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $if_content__a = /* @__PURE__ */_._closure_get("a", $scope => _._text($scope["#text/0"], $scope._._.a), $scope => $scope._._);
const $if_content__setup = $scope => {
  $if_content__a($scope);
  $if_content__b($scope);
};
const $if_content__b = /* @__PURE__ */_._closure_get("b", $scope => _._text($scope["#text/1"], $scope._._.b), $scope => $scope._._);
const $try_content__if = /* @__PURE__ */_._if("#text/0", "<div> </div><div> </div>", /* next(1), get, out(1), next(1), get, out(1) */"D lD l", $if_content__setup);
const $try_content__setup = $scope => $try_content__if($scope, true ? 0 : 1);
const $a__OR__b__script = _._script("__tests__/template.marko_0_a_b", $scope => _._on($scope["#button/0"], "click", function () {
  $a($scope, $scope.a + 1);
  $b($scope, $scope.b + 1);
}));
const $a__OR__b = /* @__PURE__ */_._or(4, $a__OR__b__script);
const $a__closure = /* @__PURE__ */_._closure($if_content__a);
const $a = /* @__PURE__ */_._let("a/2", $scope => {
  $a__OR__b($scope);
  $a__closure($scope);
});
const $b__closure = /* @__PURE__ */_._closure($if_content__b);
const $b = /* @__PURE__ */_._let("b/3", $scope => {
  $a__OR__b($scope);
  $b__closure($scope);
});
const $try = /* @__PURE__ */_._try("#text/1", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
  $try($scope, {});
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);