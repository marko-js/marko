import { setSource as _setSource, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _xBody = /* @__PURE__ */_createRenderer("Body Content", "");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, x = _scope["x"]) => x || _xBody, _dynamicAttrsProxy("#text/0"), _scope => _dynamicTagAttrs(_scope, "#text/0", () => ({}), _xBody));
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const x = _scope["x"];
  _queueSource(_scope, _x, x ? null : "div");
}));
const _x = /* @__PURE__ */_source("x", [_dynamicTagName], (_scope, x) => _queueHydrate(_scope, _hydrate_x));
const _setup = _scope => {
  _setSource(_scope, _x, null);
};
export const template = "<!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko");