export const $template = /*@__PURE__*/(_w0 => `<div></div>${_w0}<!><!>`)(_foo_template);
export const $walks =
/*@__PURE__*/
/* over(1), <foo>, replace, over(2) */
(_w0 => `b/${_w0}&%c`)(_foo_walks);
const div = "span";
const foo = "div";
const Bar = "div";
import { $setup as _foo, $template as _foo_template, $walks as _foo_walks } from "./tags/foo.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export function $setup($scope) {
  _foo($scope["#childScope/0"]);
  $dynamicTag($scope, Bar);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);