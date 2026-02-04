export const $template = "<!><!><!>";
export const $walks = /* over(1), dynamicTagWithVar, over(2) */"b1c";
import Child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Child_content__setHtml__script = _._script("__tests__/template.marko_1_setHtml", $scope => $scope._.setHtml("Hello World"));
const $Child_content__setHtml = /* @__PURE__ */_._closure_get("setHtml", $Child_content__setHtml__script);
const $Child_content__setup = $Child_content__setHtml;
const $Child_content = _._content_resume("__tests__/template.marko_1_content", 0, 0, $Child_content__setup);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $Child_content, () => $setHtml);
const $setHtml__closure = /* @__PURE__ */_._closure($Child_content__setHtml);
const $setHtml = _._var_resume("__tests__/template.marko_0_setHtml/var", /* @__PURE__ */_._const("setHtml", $setHtml__closure));
export function $setup($scope) {
  $dynamicTag($scope, 1 && Child);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);