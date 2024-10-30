export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1), replace, over(1) */"%b%bD";
export const _setup_ = () => {};
import { data as _data, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _renderBody_input = _dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1", _scope => _renderBody_input(_scope, () => ({})), () => _renderBody_input);
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), () => _dynamicTagName);
export const _name_ = /* @__PURE__ */_value("name", (_scope, name) => _data(_scope["#text/0"], name));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _name_(_scope, input.name);
  _renderBody_(_scope, input.renderBody);
}, () => _renderBody_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/components/child/index.marko");