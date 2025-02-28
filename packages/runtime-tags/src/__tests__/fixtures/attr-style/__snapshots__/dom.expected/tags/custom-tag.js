export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _style_ = /* @__PURE__ */_$.value("style/3", (_scope, style) => _$.styleAttr(_scope["#div/0"], style));
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => _style_(_scope, input.style));
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _template_, _walks_, _setup_, () => _params__);