export const _template_ = "<div id=ref></div><button id=increment>Increment</button>";
export const _walks_ = /* over(1), get, over(1) */"b b";
import { lifecycle as _lifecycle, on as _on, register as _register, queueEffect as _queueEffect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
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
    _x(_scope, x + 1);
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-this/template.marko_0_x", _scope => {
  _lifecycle(_scope, "_lifecycle", {
    onMount: function () {
      this.onUpdate();
    },
    onUpdate: _onUpdate(_scope)
  });
  _on(_scope["#button/0"], "click", _onClick(_scope));
});
const _x = /* @__PURE__ */_state("x", (_scope, x) => _queueEffect(_scope, _x_effect));
export function _setup_(_scope) {
  _x(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-this/template.marko");