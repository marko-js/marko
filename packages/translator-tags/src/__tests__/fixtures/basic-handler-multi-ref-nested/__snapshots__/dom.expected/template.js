import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, intersection as _intersection, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_a_b_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    a
  } = _scope;
  _queueSource(_scope, _a, a.map(a => {
    const {
      b
    } = _scope;
    return b;
  }));
}));
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const {
    a,
    b
  } = _scope;
  _queueEffect(_scope, _expr_a_b_effect);
});
const _b = /* @__PURE__ */_value("b", null, _expr_a_b);
const _a = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/1"], a.join("")), _expr_a_b);
const _setup = _scope => {
  _a(_scope, [0]);
  _b(_scope, 1);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko");