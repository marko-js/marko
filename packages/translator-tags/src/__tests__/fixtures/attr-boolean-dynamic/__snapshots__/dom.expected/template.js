export const _template_ = "<input><button> </button>";
export const _walks_ = /* get, over(1), get, next(1), get, out(1) */" b D l";
import { attr as _attr, on as _on, data as _data, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    disabled
  } = _scope;
  return function () {
    _queueSource(_scope, _disabled, !disabled);
  };
};
const _disabled_effect = _register("packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _disabled = /* @__PURE__ */_value("disabled", (_scope, disabled) => {
  _attr(_scope["#input/0"], "disabled", disabled);
  _data(_scope["#text/2"], disabled ? "enable" : "disable");
  _queueEffect(_scope, _disabled_effect);
});
export function _setup_(_scope) {
  _disabled(_scope, true);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko");