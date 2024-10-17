export const _template_ = `<div></div>${_foo_template}<!>`;
export const _walks_ = /* over(1), beginChild, _foo_walks, endChild, replace, over(1) */`b/${_foo_walks}&%b`;
const div = "span";
const foo = "div";
const Bar = "div";
import { _setup_ as _foo, _template_ as _foo_template, _walks_ as _foo_walks } from "./components/foo.marko";
import { conditional as _conditional, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
export function _setup_(_scope) {
  _foo(_scope["#childScope/0"]);
  _dynamicTagName(_scope, Bar);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/tag-resolution-priority/template.marko");