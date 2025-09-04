export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import baz from "./tags/baz.marko";
import foo from "./tags/foo.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $x = /* @__PURE__ */_._let("x/1", ($scope, x) => $dynamicTag($scope, x === 1 ? baz : foo));
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);