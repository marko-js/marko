export const $template = "a<!>f<!>h";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content2__data = /* @__PURE__ */_._const("data", $scope => _._text($scope["#text/0"], $scope.data));
const $await_content2__$params = /* @__PURE__ */_._const("$params4", $scope => $await_content2__data($scope, $scope.$params4[0]));
const $await_content__data = /* @__PURE__ */_._const("data", $scope => _._text($scope["#text/0"], $scope.data));
const $await_content__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content__data($scope, $scope.$params3[0]));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", "ERROR!", /* over(1) */"b");
const $await_content = /* @__PURE__ */_._await_content("#text/0", " ", /* get, over(1) */" b");
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content__$params);
const $try_content__setup = $scope => {
  $await_content($scope);
  $try_content__await_promise($scope, resolveAfter("c", 2));
};
const $try = /* @__PURE__ */_._try("#text/0", "b<!>d", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $await_content2 = /* @__PURE__ */_._await_content("#text/1", " ", /* get, over(1) */" b");
const $await_promise = /* @__PURE__ */_._await_promise("#text/1", $await_content2__$params);
export function $setup($scope) {
  $await_content2($scope);
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
  $await_promise($scope, resolveAfter("g", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);