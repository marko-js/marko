export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import { data as _data, intersection as _intersection, state as _state, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_value_dummy = /* @__PURE__ */_intersection(2, _scope => {
  const {
    value,
    dummy
  } = _scope;
  _data(_scope["#text/0"], (dummy, value));
});
const _dummy = /* @__PURE__ */_state("dummy", null, () => _expr_value_dummy);
export const _value_ = /* @__PURE__ */_value("value", null, () => _expr_value_dummy);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _value_(_scope, input.value), () => _value_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _dummy(_scope, {});
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");