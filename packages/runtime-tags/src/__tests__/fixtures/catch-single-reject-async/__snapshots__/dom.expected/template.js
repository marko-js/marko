export const $template = "a<!>d<!>f";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content2__data = /* @__PURE__ */_._const("data", $scope => _._text($scope["#text/0"], $scope.data));
const $await_content2__$params = /* @__PURE__ */_._const("$params4", $scope => $await_content2__data($scope, $scope.$params4[0]));
const $await_content__data = /* @__PURE__ */_._const("data", $scope => _._text($scope["#text/0"], $scope.data));
const $await_content__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content__data($scope, $scope.$params3[0]));
const $catch_content__error_message = /* @__PURE__ */_._const("error_message", $scope => _._text($scope["#text/0"], $scope.error_message));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", $scope => $catch_content__error($scope, $scope.$params2[0]));
const $catch_content__error = /* @__PURE__ */_._const("error", $scope => $catch_content__error_message($scope, $scope.error?.message));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", 0, $catch_content__$params);
const $try_content__await = /* @__PURE__ */_._await("#text/0", " ", /* get, over(1) */" b", 0, $await_content__$params);
const $try_content__setup = $scope => {
  $try_content__await($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $try = /* @__PURE__ */_._try("#text/0", "b<!>c", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $await = /* @__PURE__ */_._await("#text/1", " ", /* get, over(1) */" b", 0, $await_content2__$params);
export function $setup($scope) {
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
  $await($scope, resolveAfter("e", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);