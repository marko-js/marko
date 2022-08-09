import { setSource as _setSource, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/effect-tag/template.marko_0_x", _scope => {
  const x = _scope[0];
  document.getElementById("ref").textContent = x;
});

const _x = _source(0, [], (_scope, x) => _queueHydrate(_scope, _hydrate_x));

const _setup = _scope => {
  _setSource(_scope, _x, 1);
};

export const template = "<div id=ref>0</div>";
export const walks =
/* over(1) */
"b";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);