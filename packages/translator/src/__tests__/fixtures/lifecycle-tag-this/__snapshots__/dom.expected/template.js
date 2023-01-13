import { setSource as _setSource, lifecycle as _lifecycle, on as _on, queueSource as _queueSource, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-this/template.marko_0_x", _scope => {
  _lifecycle(_scope, 2, {
    onMount: function () {
      this.onUpdate();
    },
    onUpdate: function () {
      const x = _scope[1];
      document.getElementById("ref").textContent = `x=${x}, was=${this.cur}`;
      this.cur = x;
    }
  });
  _on(_scope[0], "click", function () {
    const x = _scope[1];
    _queueSource(_scope, _x, x + 1);
  });
});
const _x = /* @__PURE__ */_source(1, [], (_scope, x) => _queueHydrate(_scope, _hydrate_x));
const _setup = _scope => {
  _setSource(_scope, _x, 0);
};
export const template = "<div id=ref></div><button id=increment>Increment</button>";
export const walks = /* over(1), get, over(1) */"b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);