export const _template_ = "<div></div><div></div><div></div>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1) */" b b b";
import { attrs as _attrs, attrsEvents as _attrsEvents, register as _register, queueEffect as _queueEffect, intersection as _intersection, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_input_a_effect = _register("packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_a", _scope => {
  _attrsEvents(_scope, "#div/1");
  _attrsEvents(_scope, "#div/2");
});
const _expr_input_a = /* @__PURE__ */_intersection(2, _scope => {
  const {
    input,
    a
  } = _scope;
  _attrs(_scope, "#div/1", {
    a: a,
    ...input.value
  });
  _attrs(_scope, "#div/2", {
    ...input.value,
    a: a
  });
  _queueEffect(_scope, _expr_input_a_effect);
});
const _a = /* @__PURE__ */_value("a", null, () => _expr_input_a);
const _input__effect = _register("packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input", _scope => _attrsEvents(_scope, "#div/0"));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _attrs(_scope, "#div/0", input.value);
  _queueEffect(_scope, _input__effect);
}, () => _expr_input_a);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _a(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko");