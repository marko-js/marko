export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _renderBody_input = _$.dynamicTagAttrs("#text/0");
const _expr_Text_value = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    value
  } = _scope;
  _renderBody_input(_scope, () => value);
}, () => _renderBody_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", 0, () => _expr_Text_value);
export const _value_ = /* @__PURE__ */_$.value("value", 0, () => _expr_Text_value);
export const _renderBody_ = /* @__PURE__ */_$.value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _renderBody_(_scope, input.renderBody);
  _value_(_scope, input.value);
}, () => _$.intersections([_renderBody_, _value_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/components/child.marko", _template_, _walks_, _setup_, void 0, () => _params__);