export const $template = "a<!>h<!>j";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content3__data = ($scope, data) => _._text($scope["#text/0"], data);
const $await_content3__$params = ($scope, $params4) => $await_content3__data($scope, $params4[0]);
const $await_content2__data = ($scope, data) => _._text($scope["#text/0"], data);
const $await_content2__$params = ($scope, $params3) => $await_content2__data($scope, $params3[0]);
const $placeholder_content2 = _._content_resume("__tests__/template.marko_5_content", "_A_", /* over(1) */"b");
const $await_content2 = /* @__PURE__ */_._await_content("#text/0", " ", /* get, over(1) */" b");
const $try_content2__await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = $scope => {
  $await_content2($scope);
  $try_content2__await_promise($scope, resolveAfter("f", 3));
};
const $await_content__data = ($scope, data) => _._text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "_B_", /* over(1) */"b");
const $await_content = /* @__PURE__ */_._await_content("#text/0", " ", /* get, over(1) */" b");
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content__$params);
const $try_content__try = /* @__PURE__ */_._try("#text/1", "e<!>g", /* over(1), replace, over(2) */"b%c", $try_content2__setup);
const $try_content__setup = $scope => {
  $await_content($scope);
  $try_content__await_promise($scope, resolveAfter("c", 2));
  $try_content__try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content2($scope)
    })
  });
};
const $try = /* @__PURE__ */_._try("#text/0", "b<!>d<!><!>", /* over(1), replace, over(2), replace, over(2) */"b%c%c", $try_content__setup);
const $await_content3 = /* @__PURE__ */_._await_content("#text/1", " ", /* get, over(1) */" b");
const $await_promise = /* @__PURE__ */_._await_promise("#text/1", $await_content3__$params);
export function $setup($scope) {
  $await_content3($scope);
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $await_promise($scope, resolveAfter("i", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);