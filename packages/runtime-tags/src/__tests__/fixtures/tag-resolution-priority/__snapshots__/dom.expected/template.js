export const _template = `<div></div>${_foo_template}<!><!>`;
export const _walks = /* over(1), beginChild, _foo_walks, endChild, replace, over(1) */`b/${_foo_walks}&%bD`;
const div = "span";
const foo = "div";
const Bar = "div";
import { _setup as _foo, _template as _foo_template, _walks as _foo_walks } from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export function _setup(_scope) {
  _foo(_scope["#childScope/0"]);
  _dynamicTag(_scope, Bar);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);