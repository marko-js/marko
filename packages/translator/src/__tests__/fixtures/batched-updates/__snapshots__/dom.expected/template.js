import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, subscriber as _subscriber, register as _register, queueHydrate as _queueHydrate, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_expr_a_b = _register("packages/translator/src/__tests__/fixtures/batched-updates/template.marko_0_a_b", _scope => _on(_scope[0], "click", function () {
  const a = _scope[2],
    b = _scope[3];
  _queueSource(_scope, _a, a + 1);
  _queueSource(_scope, _b, b + 1);
}));
const _expr_a_b = /* @__PURE__ */_subscriber([], 2, (_scope, a = _scope[2], b = _scope[3]) => {
  _data(_scope[1], a + b);
  _queueHydrate(_scope, _hydrate_expr_a_b);
});
const _b = /* @__PURE__ */_source(3, [_expr_a_b]);
const _a = /* @__PURE__ */_source(2, [_expr_a_b]);
const _setup = _scope => {
  _setSource(_scope, _a, 0);
  _setSource(_scope, _b, 0);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);