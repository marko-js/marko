import { data as _data, tagVarSignal as _tagVarSignal, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _data(_scope["#text/0"], input);
  _tagVarSignal(_scope, input);
}, void 0, _tagVarSignal);
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export const template = "<div>Child: <!></div>";
export const walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/components/custom-tag.marko");