const div = "span";
const baz = "div";
import { conditional as _conditional, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _setup = _scope => {
  _dynamicTagName(_scope, baz);
};
export const template = "<div></div><!>";
export const walks = /* over(1), replace, over(1) */"b%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/tag-resolution-priority/template.marko");