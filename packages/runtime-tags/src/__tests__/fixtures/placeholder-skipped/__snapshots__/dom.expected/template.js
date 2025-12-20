export const $template = "a<!>c<!>e";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content__data = ($scope, data) => _._text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "_A_", /* over(1) */"b");
const $try = /* @__PURE__ */_._try("#text/0", "b", /* over(1) */"b");
const $await_content = /* @__PURE__ */_._await_content("#text/1", " ", /* get, over(1) */" b");
const $await_promise = /* @__PURE__ */_._await_promise("#text/1", $await_content__$params);
export function $setup($scope) {
  $await_content($scope);
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $await_promise($scope, resolveAfter("d", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);