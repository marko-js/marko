import { data as _data, queueSource as _queueSource, userEffect as _userEffect, intersection as _intersection, value as _value, register as _register, queueEffect as _queueEffect, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const {
    a,
    b
  } = _scope;
  _data(_scope["#text/0"], "" + a + b);
});
const _b = /* @__PURE__ */_value("b", (_scope, b, _dirty) => _expr_a_b(_scope, _dirty));
const _a = /* @__PURE__ */_value("a", (_scope, a, _dirty) => _expr_a_b(_scope, _dirty));
const _input_effect = _register("packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko_0_input", _scope => _userEffect(_scope, "cleanup", function () {
  const {
    input
  } = _scope;
  const previousValue = _queueSource(_scope, _a, input.value + 1);
  return () => _queueSource(_scope, _b, previousValue);
}));
const _input = /* @__PURE__ */_value("input", (_scope, input) => _queueEffect(_scope, _input_effect));
const _setup = _scope => {
  _a(_scope, 0);
  _b(_scope, 0);
};
export const attrs = _input;
export { _input };
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko");