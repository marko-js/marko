export const _template_ = "<!><!><div> </div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
export const _setup_ = () => {};
import { data as _data, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _thing_input = _dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _thing_input(_scope, () => ({})), () => _thing_input);
export const _thing_ = /* @__PURE__ */_value("thing", (_scope, thing) => {
  _data(_scope["#text/1"], thing.x);
  _dynamicTagName(_scope, thing);
}, () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _thing_(_scope, input.thing), () => _thing_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/components/custom-tag/index.marko");