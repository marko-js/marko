import { on as _on, queueSource as _queueSource, data as _data, intersection as _intersection, value as _value, register as _register, queueEffect as _queueEffect, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const {
    a,
    b
  } = _scope;
  _data(_scope["#text/4"], a + b);
});
const _b = /* @__PURE__ */_value("b", (_scope, b, _dirty) => {
  if (_dirty) {
    _data(_scope["#text/3"], b);
  }
  _expr_a_b(_scope, _dirty);
});
const _a = /* @__PURE__ */_value("a", (_scope, a, _dirty) => {
  if (_dirty) {
    _data(_scope["#text/1"], a);
  }
  _expr_a_b(_scope, _dirty);
});
const _setup_effect = _register("packages/translator/src/__tests__/fixtures/counter-intersection/template.marko_0", _scope => {
  _on(_scope["#button/0"], "click", function () {
    _queueSource(_scope, _a, 10);
  });
  _on(_scope["#button/2"], "click", function () {
    _queueSource(_scope, _b, 5);
  });
});
const _setup = _scope => {
  _queueEffect(_scope, _setup_effect);
  _a(_scope, 0);
  _b(_scope, 0);
};
export const template = "<div><button class=a> </button> + <button class=b> </button> = <!></div>";
export const walks = /* next(1), get, next(1), get, out(1), over(1), get, next(1), get, out(1), over(1), replace, out(1) */"D D lb D lb%l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/counter-intersection/template.marko");