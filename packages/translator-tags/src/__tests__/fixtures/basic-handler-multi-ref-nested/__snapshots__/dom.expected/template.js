export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import { on as _on, data as _data, register as _register, queueEffect as _queueEffect, intersection as _intersection, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    b
  } = _scope;
  return a => b;
};
const _onClick2 = _scope => {
  const {
    a,
    b
  } = _scope;
  return function () {
    _a(_scope, a.map(_onClick(_scope)));
  };
};
const _expr_a_b_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b", _scope => _on(_scope["#button/0"], "click", _onClick2(_scope)));
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const {
    a,
    b
  } = _scope;
  _queueEffect(_scope, _expr_a_b_effect);
});
const _b = /* @__PURE__ */_state("b", null, () => _expr_a_b);
const _a = /* @__PURE__ */_state("a", (_scope, a) => _data(_scope["#text/1"], a.join("")), () => _expr_a_b);
export function _setup_(_scope) {
  _a(_scope, [0]);
  _b(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko");