export const _template_ = "<div><button class=a> </button> + <button class=b> </button> = <!></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), over(1), get, next(1), get, out(1), over(1), replace, out(1) */"D D lb D lb%l";
import { on as _on, data as _data, intersection as _intersection, state as _state, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const {
    a,
    b
  } = _scope;
  _data(_scope["#text/4"], a + b);
});
const _b = /* @__PURE__ */_state("b", (_scope, b) => _data(_scope["#text/3"], b), () => _expr_a_b);
const _a = /* @__PURE__ */_state("a", (_scope, a) => _data(_scope["#text/1"], a), () => _expr_a_b);
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/counter-intersection/template.marko_0", _scope => {
  _on(_scope["#button/0"], "click", function () {
    _a(_scope, 10);
  });
  _on(_scope["#button/2"], "click", function () {
    _b(_scope, 5);
  });
});
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _a(_scope, 0);
  _b(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/counter-intersection/template.marko");