import { on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _clickCount_effect = _register("packages/translator/src/__tests__/fixtures/effect-counter/template.marko_0_clickCount", _scope => {
  const clickCount = _scope["clickCount"];
  document.getElementById("button").textContent = clickCount;
  _on(_scope["#button/0"], "click", function () {
    const clickCount = _scope["clickCount"];
    _queueSource(_scope, _clickCount, clickCount + 1);
  });
});
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => _queueEffect(_scope, _clickCount_effect));
const _setup = _scope => {
  _clickCount(_scope, 0);
};
export const template = "<div><button id=button>0</button></div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/effect-counter/template.marko");