import { attr as _attr, on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _disabled_effect = _register("packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    disabled
  } = _scope;
  _queueSource(_scope, _disabled, !disabled);
}));
const _disabled = /* @__PURE__ */_value("disabled", (_scope, disabled) => {
  _attr(_scope["#input/0"], "disabled", disabled);
  _data(_scope["#text/2"], disabled ? "enable" : "disable");
  _queueEffect(_scope, _disabled_effect);
});
const _setup = _scope => {
  _disabled(_scope, true);
};
export const template = "<input><button> </button>";
export const walks = /* get, over(1), get, next(1), get, out(1) */" b D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko");