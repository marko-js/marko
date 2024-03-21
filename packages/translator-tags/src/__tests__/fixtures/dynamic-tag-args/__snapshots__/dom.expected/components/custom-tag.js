import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => _data(_scope["#text/0"], input));
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args/components/custom-tag.marko");