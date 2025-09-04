export const $template = "a<!>c<!>e";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content__data = /* @__PURE__ */_._const("data", ($scope, data) => _._text($scope["#text/0"], data));
const $await_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $await_content__data($scope, $params2[0]));
const $await_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content__$params);
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "_A_", /* over(1) */"b");
const $try_content = /* @__PURE__ */_._content_branch("b", /* over(1) */"b");
const $try = /* @__PURE__ */_._try("#text/0", $try_content);
const $await = /* @__PURE__ */_._await("#text/1", $await_content);
export function $setup($scope) {
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $await($scope, resolveAfter("d", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);