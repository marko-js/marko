import { lifecycle as _lifecycle, on as _on, queueSource as _queueSource, register as _register, queueHydrate as _queueHydrate, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-this/template.marko_0_x", _scope => {
  _lifecycle(_scope, "cleanup", {
    onMount: function () {
      this.onUpdate();
    },
    onUpdate: function () {
      const x = _scope["x"];
      document.getElementById("ref").textContent = `x=${x}, was=${this.cur}`;
      this.cur = x;
    }
  });
  _on(_scope["#button/0"], "click", function () {
    const x = _scope["x"];
    _queueSource(_scope, _x, x + 1);
  });
});
const _x = /* @__PURE__ */_value("x", (_scope, x) => _queueHydrate(_scope, _hydrate_x));
const _setup = _scope => {
  _x(_scope, 0);
};
export const template = "<div id=ref></div><button id=increment>Increment</button>";
export const walks = /* over(1), get, over(1) */"b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/lifecycle-tag-this/template.marko");