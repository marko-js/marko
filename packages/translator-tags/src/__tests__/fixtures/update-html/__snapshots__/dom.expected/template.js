import { html as _html, value as _value2, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _html(_scope, value, "#text/0"));
const _destructure2 = (_scope, {
  value
}) => {
  _value(_scope, value);
};
const _input = /* @__PURE__ */_value2("input", (_scope, input) => _destructure2(_scope, input));
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const template = "<em>Testing</em> <!>";
export const walks = /* over(2), replace, over(1) */"c%b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/update-html/template.marko");