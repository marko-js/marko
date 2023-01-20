import { setSource as _setSource, queueSource as _queueSource, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _y = /* @__PURE__ */_source("y", [], (_scope, y) => _data(_scope["#text/1"], y));
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x", _scope => {
  const x = _scope["x"];
  _queueSource(_scope, _y, x);
  _queueSource(_scope, _x, 2);
});
const _x = /* @__PURE__ */_source("x", [], (_scope, x) => {
  _data(_scope["#text/0"], x);
  _queueHydrate(_scope, _hydrate_x);
});
const _setup = _scope => {
  _setSource(_scope, _x, 1);
  _setSource(_scope, _y, 0);
};
export const template = "<span> </span><span> </span>";
export const walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);