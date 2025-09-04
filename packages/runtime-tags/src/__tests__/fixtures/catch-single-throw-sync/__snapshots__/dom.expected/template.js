export const $template = "a<!>d";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $catch_content__error_message = /* @__PURE__ */_._const("error_message", ($scope, error_message) => _._text($scope["#text/0"], error_message));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $catch_content__error($scope, $params2[0]));
const $catch_content__error = /* @__PURE__ */_._const("error", ($scope, error) => $catch_content__error_message($scope, error?.message));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", 0, $catch_content__$params);
const $try_content__setup = $scope => {
  _._text($scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
};
const $try_content = /* @__PURE__ */_._content_branch("b<!>", /* over(1), replace, over(1) */"b%b", $try_content__setup);
const $try = /* @__PURE__ */_._try("#text/0", $try_content);
export function $setup($scope) {
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);