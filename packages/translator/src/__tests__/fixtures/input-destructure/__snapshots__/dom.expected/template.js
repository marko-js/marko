import { data as _data, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _destructure2 = (_scope, {
  a,
  b
}) => {
  _a(_scope, a);
  _b(_scope, b);
};
const _b = /* @__PURE__ */_value("b", (_scope, b) => _data(_scope["#text/1"], b));
const _a = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/0"], a));
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input));
export const attrs = _input;
export { _input };
export const template = "<!> <!>";
export const walks = /* replace, over(2), replace, over(1) */"%c%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/input-destructure/template.marko");