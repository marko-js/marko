import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, initValue as _initValue, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _b_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko_0_b", _scope => _on(_scope["#button/0"], "click", () => {
  const {
    b
  } = _scope;
  return _queueSource(_scope, _b, b + 1), b;
}));
const _b = /* @__PURE__ */_value("b", (_scope, b) => {
  _data(_scope["#text/2"], b);
  _queueEffect(_scope, _b_effect);
});
const _b_init = _initValue("b", _b);
const _a = /* @__PURE__ */_value("a", (_scope, a) => {
  _data(_scope["#text/1"], a);
  _b_init(_scope, a * 2);
});
const _destructure2 = (_scope, {
  a
}) => {
  _a(_scope, a);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input));
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<button>Increment</button><!> <!>";
export const walks = /* get, over(1), replace, over(2), replace, over(1) */" b%c%b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko");