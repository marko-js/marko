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
export const _args_ = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const _template_ = "<!> <!>";
export const _walks_ = /* replace, over(2), replace, over(1) */"%c%b";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/input-destructure/template.marko");