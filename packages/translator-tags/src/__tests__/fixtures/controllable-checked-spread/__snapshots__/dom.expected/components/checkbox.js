export const _template_ = "<input>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import { attrs as _attrs, attrsEvents as _attrsEvents, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _input__effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/components/checkbox.marko_0_input", _scope => _attrsEvents(_scope, "#input/0"));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _attrs(_scope, "#input/0", {
    type: "checkbox",
    ...input
  });
  _queueEffect(_scope, _input__effect);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/components/checkbox.marko");