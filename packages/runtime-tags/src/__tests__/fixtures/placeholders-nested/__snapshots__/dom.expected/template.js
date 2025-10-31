export const $template = "a<!>h<!>j";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
_._enable_catch();
const $await_content3__data = /* @__PURE__ */_._const("data", $scope => _._text($scope["#text/0"], $scope.data));
const $await_content3__$params = /* @__PURE__ */_._const("$params4", $scope => $await_content3__data($scope, $scope.$params4[0]));
const $await_content3 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content3__$params);
const $await_content2__data = /* @__PURE__ */_._const("data", $scope => _._text($scope["#text/0"], $scope.data));
const $await_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content2__data($scope, $scope.$params3[0]));
const $await_content2 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content2__$params);
const $placeholder_content2 = _._content_resume("__tests__/template.marko_5_content", "_A_", /* over(1) */"b");
const $try_content2__await = /* @__PURE__ */_._await("#text/0", $await_content2);
const $try_content2__setup = $scope => {
  $try_content2__await($scope, resolveAfter("f", 3));
};
const $try_content2 = /* @__PURE__ */_._content_branch("e<!>g", /* over(1), replace, over(2) */"b%c", $try_content2__setup);
const $await_content__data = /* @__PURE__ */_._const("data", $scope => _._text($scope["#text/0"], $scope.data));
const $await_content__$params = /* @__PURE__ */_._const("$params2", $scope => $await_content__data($scope, $scope.$params2[0]));
const $await_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content__$params);
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "_B_", /* over(1) */"b");
const $try_content__await = /* @__PURE__ */_._await("#text/0", $await_content);
const $try_content__try = /* @__PURE__ */_._try("#text/1", $try_content2);
const $try_content__setup = $scope => {
  $try_content__await($scope, resolveAfter("c", 2));
  $try_content__try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content2($scope)
    })
  });
};
const $try_content = /* @__PURE__ */_._content_branch("b<!>d<!><!>", /* over(1), replace, over(2), replace, over(2) */"b%c%c", $try_content__setup);
const $try = /* @__PURE__ */_._try("#text/0", $try_content);
const $await = /* @__PURE__ */_._await("#text/1", $await_content3);
export function $setup($scope) {
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $await($scope, resolveAfter("i", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);