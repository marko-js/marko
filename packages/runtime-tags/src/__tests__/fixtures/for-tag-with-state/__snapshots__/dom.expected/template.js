export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content2__i = /* @__PURE__ */_._const("i", ($scope, i) => _._text($scope["#text/0"], i));
const $for_content2__val = /* @__PURE__ */_._const("val", ($scope, val) => _._text($scope["#text/1"], val));
const $for_content2__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => {
  $for_content2__val($scope, $params3[0]);
  $for_content2__i($scope, $params3[1]);
});
const $for_content2 = /* @__PURE__ */_._content_branch("<div><!>: <!></div>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", 0, $for_content2__$params);
const $for_content__i = /* @__PURE__ */_._const("i", ($scope, i) => _._text($scope["#text/0"], i));
const $for_content__val = /* @__PURE__ */_._const("val", ($scope, val) => _._text($scope["#text/1"], val));
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => {
  $for_content__val($scope, $params2[0]);
  $for_content__i($scope, $params2[1]);
});
const $for_content = /* @__PURE__ */_._content_branch("<div><!>: <!></div>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
const $arrA = /* @__PURE__ */_._const("arrA", ($scope, arrA) => $for($scope, [arrA]));
const $for2 = /* @__PURE__ */_._for_of("#text/1", $for_content2);
const $arrB = /* @__PURE__ */_._let("arrB/3", ($scope, arrB) => $for2($scope, [arrB]));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $arrB($scope, [1, 2]));
export function $setup($scope) {
  $arrA($scope, [1, 2, 3]);
  $arrB($scope, [1, 2, 3]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);