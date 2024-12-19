export const _template_ = "<!><!><div> </div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _content_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _content_input(_scope, () => ({})), () => _content_input);
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTagName(_scope, content), () => _dynamicTagName);
export const _x_ = /* @__PURE__ */_$.value("x", (_scope, x) => _$.data(_scope["#text/1"], x));
export const _pattern__ = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => {
  _x_(_scope, _pattern_.x);
  _content_(_scope, _pattern_.content);
}, () => _content_);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _pattern__(_scope, input.thing), () => _pattern__);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag/index.marko", _template_, _walks_, _setup_, void 0, () => _params__);