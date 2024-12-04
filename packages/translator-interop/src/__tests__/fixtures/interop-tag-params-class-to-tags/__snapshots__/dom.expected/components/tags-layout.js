export const _template_ = "<button id=tags> </button><div><!></div>";
export const _walks_ = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputRenderBody_input = _$.dynamicTagAttrs("#text/2", void 0, 1);
const _expr_Text_count = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    count
  } = _scope;
  _inputRenderBody_input(_scope, () => [count, "hello"]);
}, () => _inputRenderBody_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/2", 0, () => _expr_Text_count);
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _$.effect("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
}, () => _expr_Text_count);
export const _input_renderBody_ = /* @__PURE__ */_$.value("input_renderBody", (_scope, input_renderBody) => _dynamicTagName(_scope, input_renderBody), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_renderBody_(_scope, input.renderBody), () => _input_renderBody_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko", _template_, _walks_, _setup_, void 0, () => _params__);