import { lifecycle as _lifecycle, on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _temp = _scope => function () {
  this.onUpdate();
};
const _onUpdate = _scope => {
  const {
    x
  } = _scope;
  return function () {
    document.getElementById("ref").textContent = `x=${x}, was=${this.cur}`;
    this.cur = x;
  };
};
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _queueSource(_scope, _x, x + 1);
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-this/template.marko_0_x", _scope => {
  _lifecycle(_scope, "_lifecycle", {
    onMount: _temp(_scope),
    onUpdate: _onUpdate(_scope)
  });
  _on(_scope["#button/0"], "click", _onClick(_scope));
});
const _x = /* @__PURE__ */_value("x", (_scope, x) => _queueEffect(_scope, _x_effect));
const _setup = _scope => {
  _x(_scope, 0);
};
export const _template_ = "<div id=ref></div><button id=increment>Increment</button>";
export const _walks_ = /* over(1), get, over(1) */"b b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-this/template.marko");