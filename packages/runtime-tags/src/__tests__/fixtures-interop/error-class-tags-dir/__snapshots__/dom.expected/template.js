export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import _hello from "./tags/hello.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export function $setup($scope) {
  $dynamicTag($scope, _hello);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);