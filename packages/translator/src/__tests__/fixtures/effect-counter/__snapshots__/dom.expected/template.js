import { setSource as _setSource, on as _on, queueSource as _queueSource, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_clickCount = _register("packages/translator/src/__tests__/fixtures/effect-counter/template.marko_0_clickCount", _scope => {
  const clickCount = _scope["clickCount"];
  document.getElementById("button").textContent = clickCount;
  _on(_scope["#button/0"], "click", function () {
    const clickCount = _scope["clickCount"];
    _queueSource(_scope, _clickCount, clickCount + 1);
  });
});
const _clickCount = /* @__PURE__ */_source("clickCount", [], (_scope, clickCount) => _queueHydrate(_scope, _hydrate_clickCount));
const _setup = _scope => {
  _setSource(_scope, _clickCount, 0);
};
export const template = "<div><button id=button>0</button></div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);