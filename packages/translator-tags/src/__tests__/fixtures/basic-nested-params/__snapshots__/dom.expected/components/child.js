export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import { dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value, intersections as _intersections, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _renderBody_input = _dynamicTagAttrs("#text/0");
const _expr_Text_value = /* @__PURE__ */_intersection(2, _scope => {
  const {
    value
  } = _scope;
  _renderBody_input(_scope, () => value);
}, _renderBody_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, _expr_Text_value);
export const _value_ = /* @__PURE__ */_value("value", null, _expr_Text_value);
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), _dynamicTagName);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _renderBody_(_scope, input.renderBody);
  _value_(_scope, input.value);
}, _intersections([_renderBody_, _value_]));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), _input_);
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/components/child.marko");