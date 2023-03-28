import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueHydrate as _queueHydrate, intersection as _intersection, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_expr_a_b = _register("packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b", _scope => _on(_scope["#button/0"], "click", function () {
  const a = _scope["a"];
  _queueSource(_scope, _a, a.map(a => {
    const b = _scope["b"];
    return b;
  }));
}));
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const a = _scope["a"],
    b = _scope["b"];
  _queueHydrate(_scope, _hydrate_expr_a_b);
});
const _b = /* @__PURE__ */_value("b", (_scope, b, _dirty) => _expr_a_b(_scope, _dirty));
const _a = /* @__PURE__ */_value("a", (_scope, a, _dirty) => {
  if (_dirty) {
    _data(_scope["#text/1"], a.join(""));
  }
  _expr_a_b(_scope, _dirty);
});
const _setup = _scope => {
  _a(_scope, [0]);
  _b(_scope, 1);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko");