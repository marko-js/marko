export const $template = "Before<!>After";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $catch_content__err_message = /* @__PURE__ */_._const("err_message", $scope => _._text($scope["#text/0"], $scope.err_message));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", $scope => $catch_content__err($scope, $scope.$params2[0]));
const $catch_content__err = /* @__PURE__ */_._const("err", $scope => $catch_content__err_message($scope, $scope.err?.message));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", 0, $catch_content__$params);
const $try_content__setup = $scope => {
  _._text($scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
};
const $try = /* @__PURE__ */_._try("#text/0", "Inside<!>", /* over(1), replace, over(1) */"b%b", $try_content__setup);
export function $setup($scope) {
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);