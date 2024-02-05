import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _b = /* @__PURE__ */_value("b", (_scope, b) => _data(_scope["#text/1"], b));
const _a = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/0"], a));
const _destructure2 = (_scope, {
  a,
  b
}) => {
  _a(_scope, a);
  _b(_scope, b);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input));
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<!> <!>";
export const walks = /* replace, over(2), replace, over(1) */"%c%b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/input-destructure/template.marko");