import { queueSource as _queueSource, data as _data, value as _value, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/let-undefined-until-dom/template.marko_0", _scope => _queueSource(_scope, _x, "Client Only"));
const _setup = _scope => {
  _queueHydrate(_scope, _hydrate_setup);
  _x(_scope, undefined);
};
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/let-undefined-until-dom/template.marko");