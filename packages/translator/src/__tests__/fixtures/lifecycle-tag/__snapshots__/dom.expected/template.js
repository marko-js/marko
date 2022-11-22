import { setSource as _setSource, queueSource as _queueSource, lifecycle as _lifecycle, on as _on, source as _source, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _onMount = function (_scope) {
  const x = _scope[1];
  document.getElementById("ref").textContent = "Mount " + x;
};
const _onUpdate = function (_scope) {
  const x = _scope[1];
  document.getElementById("ref").textContent = "Update " + x;
};
const _onClick = function (_scope) {
  const x = _scope[1];
  _queueSource(_scope, _x, x + 1);
};
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x", _scope => {
  const x = _scope[1];
  _lifecycle(_scope, 2, {
    onMount: /* @__PURE__ */_bind(_scope, _onMount),
    onUpdate: /* @__PURE__ */_bind(_scope, _onUpdate)
  });
  _on(_scope[0], "click", /* @__PURE__ */_bind(_scope, _onClick));
});
const _x = /* @__PURE__ */_source(1, [], (_scope, x) => _queueHydrate(_scope, _hydrate_x));
const _setup = _scope => {
  _setSource(_scope, _x, 0);
};
export const template = "<div id=ref></div><button id=increment>Increment</button>";
export const walks = /* over(1), get, over(1) */"b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);