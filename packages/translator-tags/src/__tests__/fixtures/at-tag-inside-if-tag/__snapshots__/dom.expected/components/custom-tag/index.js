export const _template_ = "<!><!><div> </div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _renderBody_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _renderBody_input(_scope, () => ({})), () => _renderBody_input);
export const _renderBody_ = /* @__PURE__ */_$.value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), () => _dynamicTagName);
export const _x_ = /* @__PURE__ */_$.value("x", (_scope, x) => _$.data(_scope["#text/1"], x));
export const _pattern__ = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => {
  _x_(_scope, _pattern_.x);
  _renderBody_(_scope, _pattern_.renderBody);
}, () => _renderBody_);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _pattern__(_scope, input.thing), () => _pattern__);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/components/custom-tag/index.marko", _template_, _walks_, _setup_, void 0, () => _params__);