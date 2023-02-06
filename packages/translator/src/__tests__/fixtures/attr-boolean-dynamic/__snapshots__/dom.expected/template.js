import { setSource as _setSource, attr as _attr, on as _on, queueSource as _queueSource, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_disabled = _register("packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled", _scope => _on(_scope["#button/1"], "click", function () {
  const disabled = _scope["disabled"];
  _queueSource(_scope, _disabled, !disabled);
}));
const _disabled = /* @__PURE__ */_source("disabled", [], (_scope, disabled) => {
  _attr(_scope["#input/0"], "disabled", disabled);
  _data(_scope["#text/2"], disabled ? "enable" : "disable");
  _queueHydrate(_scope, _hydrate_disabled);
});
const _setup = _scope => {
  _setSource(_scope, _disabled, true);
};
export const template = "<input><button> </button>";
export const walks = /* get, over(1), get, next(1), get, out(1) */" b D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko");