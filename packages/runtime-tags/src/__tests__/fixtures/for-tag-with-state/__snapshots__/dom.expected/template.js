export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content2__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content2__val = /* @__PURE__ */_._const("val", $scope => _._text($scope["#text/1"], $scope.val));
const $for_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $for_content2__val($scope, $scope.$params3[0]));
const $for_content__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content__val = /* @__PURE__ */_._const("val", $scope => _._text($scope["#text/1"], $scope.val));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__val($scope, $scope.$params2[0]));
const $for = /* @__PURE__ */_._for_of("#text/0", "<div><!>: <!></div>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", $for_content__setup, $for_content__$params);
const $arrA = /* @__PURE__ */_._const("arrA", $scope => $for($scope, [$scope.arrA]));
const $for2 = /* @__PURE__ */_._for_of("#text/1", "<div><!>: <!></div>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", $for_content2__setup, $for_content2__$params);
const $arrB = /* @__PURE__ */_._let("arrB/3", $scope => $for2($scope, [$scope.arrB]));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $arrB($scope, [1, 2]));
export function $setup($scope) {
  $arrA($scope, [1, 2, 3]);
  $arrB($scope, [1, 2, 3]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);