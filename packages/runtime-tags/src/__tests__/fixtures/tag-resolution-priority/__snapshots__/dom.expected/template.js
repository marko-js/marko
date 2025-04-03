export const $template = `<div></div>${_foo_template}<!><!>`;
export const $walks = /* over(1), beginChild, _foo_walks, endChild, replace, over(1) */`b/${_foo_walks}&%bD`;
const div = "span";
const foo = "div";
const Bar = "div";
import { $setup as _foo, $template as _foo_template, $walks as _foo_walks } from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export function $setup($scope) {
  _foo($scope["#childScope/0"]);
  $dynamicTag($scope, Bar);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);