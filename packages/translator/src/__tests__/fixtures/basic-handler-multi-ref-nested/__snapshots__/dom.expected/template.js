import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, subscriber as _subscriber, register as _register, queueHydrate as _queueHydrate, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_expr_a_b = _register("packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b", _scope => _on(_scope["#button/0"], "click", function () {
  const a = _scope["a"];
  _queueSource(_scope, _a, a.map(a => {
    const b = _scope["b"];
    return b;
  }));
}));
const _expr_a_b = /* @__PURE__ */_subscriber([], 2, (_scope, a = _scope["a"], b = _scope["b"]) => _queueHydrate(_scope, _hydrate_expr_a_b));
const _b = /* @__PURE__ */_source("b", [_expr_a_b]);
const _a = /* @__PURE__ */_source("a", [_expr_a_b], (_scope, a) => _data(_scope["#text/1"], a.join("")));
const _setup = _scope => {
  _setSource(_scope, _a, [0]);
  _setSource(_scope, _b, 1);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko");