import { queueSource as _queueSource, register as _register, bindFunction as _bindFunction, lifecycle as _lifecycle, data as _data, on as _on, value as _value, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onMount = _register("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0/onMount", function (_scope) {
  const {
    x
  } = _scope;
  this.cur = x;
});
const _onUpdate = _register("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0/onUpdate", function (_scope) {
  const {
    x
  } = _scope;
  _queueSource(_scope, _prev, this.cur);
  this.cur = x;
});
const _prev = /* @__PURE__ */_value("prev", (_scope, prev) => _data(_scope["#text/1"], prev));
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x", _scope => {
  _lifecycle(_scope, "_lifecycle", {
    onMount: /* @__PURE__ */_bindFunction(_scope, _onMount),
    onUpdate: /* @__PURE__ */_bindFunction(_scope, _onUpdate)
  });
  _on(_scope["#button/2"], "click", function () {
    const {
      x
    } = _scope;
    _queueSource(_scope, _x, x + 1);
  });
});
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/0"], x);
  _queueEffect(_scope, _x_effect);
});
const _setup = _scope => {
  _x(_scope, 0);
  _prev(_scope, false);
};
export const template = "<div>x=<span> </span>, was=<!></div><button id=increment>Increment</button>";
export const walks = /* next(1), over(1), next(1), get, out(1), over(1), replace, out(1), get, over(1) */"DbD lb%l b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko");