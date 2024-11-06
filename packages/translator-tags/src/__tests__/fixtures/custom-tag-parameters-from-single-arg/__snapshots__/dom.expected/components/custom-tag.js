export const _template_ = "<button class=inc> </button><!><!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputRenderBody_input = _$.dynamicTagAttrs("#text/2");
const _expr_Text_x = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x
  } = _scope;
  _inputRenderBody_input(_scope, () => x);
}, () => _inputRenderBody_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/2", null, () => _expr_Text_x);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/components/custom-tag.marko_0_x", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _x_effect(_scope);
}, () => _expr_Text_x);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), () => _dynamicTagName);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/components/custom-tag.marko");