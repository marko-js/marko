import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, intersection as _intersection, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _expr_a_b_effect = _register("packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko_0_a_b", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    a,
    b
  } = _scope;
  let c = a;
  let _a2;
  let _b2;
  let _d2;
  ({
    a: _a2,
    _b: _b2,
    c,
    ..._d2
  } = {
    a: b,
    _b: a + b,
    c: b,
    foo: 1,
    bar: 2
  });
  _queueSource(_scope, _d, _d2);
  _queueSource(_scope, _b, _b2);
  _queueSource(_scope, _a, _a2);
  console.log(c);
}));
const _expr_a_b = /* @__PURE__ */_intersection(2, _scope => {
  const {
    a,
    b
  } = _scope;
  _queueEffect(_scope, _expr_a_b_effect);
});
const _d = (_scope, d) => {};
const _b = /* @__PURE__ */_value("b", (_scope, b) => _data(_scope["#text/2"], b), _expr_a_b);
const _a = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/1"], a), _expr_a_b);
const _setup = _scope => {
  _a(_scope, 0);
  _b(_scope, 0);
  _d(_scope, {});
};
export const template = "<button><!> <!></button>";
export const walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko");