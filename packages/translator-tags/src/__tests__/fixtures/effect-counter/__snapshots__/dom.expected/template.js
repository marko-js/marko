export const _template_ = "<div><button id=button>0</button></div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import { on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
};
const _clickCount_effect = _register("packages/translator-tags/src/__tests__/fixtures/effect-counter/template.marko_0_clickCount", _scope => {
  const {
    clickCount
  } = _scope;
  document.getElementById("button").textContent = clickCount;
  _on(_scope["#button/0"], "click", _onClick(_scope));
});
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => _queueEffect(_scope, _clickCount_effect));
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/effect-counter/template.marko");