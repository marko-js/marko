export const $template = "a<!>c<!>e";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
const $await_content2__value = /* @__PURE__ */_._const("value", $scope => _._text($scope["#text/0"], $scope.value));
const $await_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content2__value($scope, $scope.$params3[0]));
const $await_content2 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content2__$params);
const $await_content__value = /* @__PURE__ */_._const("value", $scope => _._text($scope["#text/0"], $scope.value));
const $await_content__$params = /* @__PURE__ */_._const("$params2", $scope => $await_content__value($scope, $scope.$params2[0]));
const $await_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content__$params);
const $await = /* @__PURE__ */_._await("#text/0", $await_content);
const $await2 = /* @__PURE__ */_._await("#text/1", $await_content2);
export function $setup($scope) {
  $await($scope, resolveAfter("b", 1));
  $await2($scope, resolveAfter("d", 2));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);