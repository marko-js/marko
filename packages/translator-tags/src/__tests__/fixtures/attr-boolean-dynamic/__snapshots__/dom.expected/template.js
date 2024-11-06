export const _template_ = "<input><button> </button>";
export const _walks_ = /* get, over(1), get, next(1), get, out(1) */" b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    disabled
  } = _scope;
  return function () {
    _disabled(_scope, !disabled);
  };
};
const _disabled_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _disabled = /* @__PURE__ */_$.state("disabled", (_scope, disabled) => {
  _$.attr(_scope["#input/0"], "disabled", disabled);
  _$.data(_scope["#text/2"], disabled ? "enable" : "disable");
  _disabled_effect(_scope);
});
export function _setup_(_scope) {
  _disabled(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko", _template_, _walks_, _setup_);