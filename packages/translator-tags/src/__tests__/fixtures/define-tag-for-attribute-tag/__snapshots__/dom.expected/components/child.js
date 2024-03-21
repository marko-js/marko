import { classAttr as _classAttr, conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _classAttr(_scope["#div/0"], {
    "selected": input.thing.selected
  });
  _dynamicTagName(_scope, input.thing.renderBody);
}, void 0, _dynamicTagName);
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export const template = "<div><!></div>";
export const walks = /* get, next(1), replace, out(1) */" D%l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/components/child.marko");