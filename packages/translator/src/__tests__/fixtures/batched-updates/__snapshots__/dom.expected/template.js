import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, intersection as _intersection, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_a_b_effect = _register("packages/translator/src/__tests__/fixtures/batched-updates/template.marko_0_a_b", _scope => _on(_scope["#button/0"], "click", function () {
  const a = _scope["a"],
    b = _scope["b"];
  _queueSource(_scope, _a, a + 1);
  _queueSource(_scope, _b, b + 1);
}));
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const a = _scope["a"],
    b = _scope["b"];
  _data(_scope["#text/1"], a + b);
  _queueEffect(_scope, _expr_a_b_effect);
});
const _b = /* @__PURE__ */_value("b", (_scope, b, _dirty) => _expr_a_b(_scope, _dirty));
const _a = /* @__PURE__ */_value("a", (_scope, a, _dirty) => _expr_a_b(_scope, _dirty));
const _setup = _scope => {
  _a(_scope, 0);
  _b(_scope, 0);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/batched-updates/template.marko");