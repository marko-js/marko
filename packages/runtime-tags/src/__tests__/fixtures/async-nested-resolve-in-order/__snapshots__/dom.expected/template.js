export const $template = "a<!>g<!>m";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
const $await_content6__result = /* @__PURE__ */_._const("result6", $scope => _._text($scope["#text/0"], $scope.result6));
const $await_content6__$params = /* @__PURE__ */_._const("$params7", $scope => $await_content6__result($scope, $scope.$params7[0]));
const $await_content5__result = /* @__PURE__ */_._const("result5", $scope => _._text($scope["#text/0"], $scope.result5));
const $await_content6 = /* @__PURE__ */_._await_content("#text/1", " ", /* get, over(1) */" b");
const $await_content5__await_promise = /* @__PURE__ */_._await_promise("#text/1", $await_content6__$params);
const $await_content5__setup = $scope => {
  $await_content6($scope);
  $await_content5__await_promise($scope, resolveAfter("j", 1));
};
const $await_content5__$params = /* @__PURE__ */_._const("$params6", $scope => $await_content5__result($scope, $scope.$params6[0]));
const $await_content4__result = /* @__PURE__ */_._const("result4", $scope => _._text($scope["#text/0"], $scope.result4));
const $await_content5 = /* @__PURE__ */_._await_content("#text/1", "<!><!>k", /* replace, over(1), replace, over(2) */"%b%c", $await_content5__setup);
const $await_content4__await_promise = /* @__PURE__ */_._await_promise("#text/1", $await_content5__$params);
const $await_content4__setup = $scope => {
  $await_content5($scope);
  $await_content4__await_promise($scope, resolveAfter("i", 1));
};
const $await_content4__$params = /* @__PURE__ */_._const("$params5", $scope => $await_content4__result($scope, $scope.$params5[0]));
const $await_content3__result = /* @__PURE__ */_._const("result3", $scope => _._text($scope["#text/0"], $scope.result3));
const $await_content3__$params = /* @__PURE__ */_._const("$params4", $scope => $await_content3__result($scope, $scope.$params4[0]));
const $await_content2__result = /* @__PURE__ */_._const("result2", $scope => _._text($scope["#text/0"], $scope.result2));
const $await_content3 = /* @__PURE__ */_._await_content("#text/1", " ", /* get, over(1) */" b");
const $await_content2__await_promise = /* @__PURE__ */_._await_promise("#text/1", $await_content3__$params);
const $await_content2__setup = $scope => {
  $await_content3($scope);
  $await_content2__await_promise($scope, resolveAfter("d", 1));
};
const $await_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content2__result($scope, $scope.$params3[0]));
const $await_content__result = /* @__PURE__ */_._const("result1", $scope => _._text($scope["#text/0"], $scope.result1));
const $await_content2 = /* @__PURE__ */_._await_content("#text/1", "<!><!>e", /* replace, over(1), replace, over(2) */"%b%c", $await_content2__setup);
const $await_content__await_promise = /* @__PURE__ */_._await_promise("#text/1", $await_content2__$params);
const $await_content__setup = $scope => {
  $await_content2($scope);
  $await_content__await_promise($scope, resolveAfter("c", 1));
};
const $await_content__$params = /* @__PURE__ */_._const("$params2", $scope => $await_content__result($scope, $scope.$params2[0]));
const $await_content = /* @__PURE__ */_._await_content("#text/0", "<!><!>f", /* replace, over(1), replace, over(2) */"%b%c", $await_content__setup);
const $await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content__$params);
const $await_content4 = /* @__PURE__ */_._await_content("#text/1", "<!><!>l", /* replace, over(1), replace, over(2) */"%b%c", $await_content4__setup);
const $await_promise2 = /* @__PURE__ */_._await_promise("#text/1", $await_content4__$params);
export function $setup($scope) {
  $await_content($scope);
  $await_content4($scope);
  $await_promise($scope, resolveAfter("b", 1));
  $await_promise2($scope, resolveAfter("h", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);