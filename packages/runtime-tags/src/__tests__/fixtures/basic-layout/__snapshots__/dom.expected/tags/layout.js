export const _template_ = "<body><!></body>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTag(_scope, content));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _content_(_scope, input.content));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/layout.marko", _template_, _walks_, _setup_, () => _params__);