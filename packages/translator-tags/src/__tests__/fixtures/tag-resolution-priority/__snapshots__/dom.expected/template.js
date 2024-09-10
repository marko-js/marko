export const _template_ = "<div></div><!>";
export const _walks_ = /* over(1), replace, over(1) */"b%b";
const div = "span";
const baz = "div";
import { conditional as _conditional, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
export function _setup_(_scope) {
  _dynamicTagName(_scope, baz);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/tag-resolution-priority/template.marko");