export const _template_ = "<!><!><div> </div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
export const _setup_ = () => {};
import { data as _data, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _renderBody_input = _dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _renderBody_input(_scope, () => ({})), () => _renderBody_input);
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), () => _dynamicTagName);
export const _x_ = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/1"], x));
export const _pattern__ = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => {
  _x_(_scope, _pattern_.x);
  _renderBody_(_scope, _pattern_.renderBody);
}, () => _renderBody_);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _pattern__(_scope, input.thing), () => _pattern__);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/components/custom-tag/index.marko");