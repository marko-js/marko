export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTag(_scope, content), () => _dynamicTag);
const _onClick__effect = _$.effect("__tests__/tags/my-button.marko_0_onClick", (_scope, {
  onClick
}) => _$.on(_scope["#button/0"], "click", onClick));
export const _onClick_ = /* @__PURE__ */_$.value("onClick", (_scope, onClick) => _onClick__effect(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _onClick_(_scope, input.onClick);
  _content_(_scope, input.content);
}, () => _content_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", _template_, _walks_, _setup_, () => _params__);