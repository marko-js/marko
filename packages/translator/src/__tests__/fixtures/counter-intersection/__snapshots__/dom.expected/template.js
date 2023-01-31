import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, subscriber as _subscriber, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_a_b = /* @__PURE__ */_subscriber([], 2, (_scope, a = _scope["a"], b = _scope["b"]) => _data(_scope["#text/4"], a + b));
const _b = /* @__PURE__ */_source("b", [_expr_a_b], (_scope, b) => _data(_scope["#text/3"], b));
const _a = /* @__PURE__ */_source("a", [_expr_a_b], (_scope, a) => _data(_scope["#text/1"], a));
const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/counter-intersection/template.marko_0", _scope => {
  _on(_scope["#button/0"], "click", function () {
    _queueSource(_scope, _a, 10);
  });
  _on(_scope["#button/2"], "click", function () {
    _queueSource(_scope, _b, 5);
  });
});
const _setup = _scope => {
  _setSource(_scope, _a, 0);
  _setSource(_scope, _b, 0);
  _queueHydrate(_scope, _hydrate_setup);
};
export const template = "<div><button class=a> </button> + <button class=b> </button> = <!></div>";
export const walks = /* next(1), get, next(1), get, out(1), over(1), get, next(1), get, out(1), over(1), replace, out(1) */"D D lb D lb%l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);