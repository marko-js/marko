export const $template = "a<!>d<!>f";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content2__data = /* @__PURE__ */_._const("data", ($scope, data) => _._text($scope["#text/0"], data));
const $await_content2__$params = /* @__PURE__ */_._const("$params4", ($scope, $params4) => $await_content2__data($scope, $params4[0]));
const $await_content2 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content2__$params);
const $await_content__data = /* @__PURE__ */_._const("data", ($scope, data) => _._text($scope["#text/0"], data));
const $await_content__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $await_content__data($scope, $params3[0]));
const $await_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content__$params);
const $catch_content__error_message = /* @__PURE__ */_._const("error_message", ($scope, error_message) => _._text($scope["#text/0"], error_message));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $catch_content__error($scope, $params2[0]));
const $catch_content__error = /* @__PURE__ */_._const("error", ($scope, error) => $catch_content__error_message($scope, error?.message));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", 0, $catch_content__$params);
const $try_content__await = /* @__PURE__ */_._await("#text/0", $await_content);
const $try_content__setup = $scope => {
  $try_content__await($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $try_content = /* @__PURE__ */_._content_branch("b<!>c", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $try = /* @__PURE__ */_._try("#text/0", $try_content);
const $await = /* @__PURE__ */_._await("#text/1", $await_content2);
export function $setup($scope) {
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
  $await($scope, resolveAfter("e", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);