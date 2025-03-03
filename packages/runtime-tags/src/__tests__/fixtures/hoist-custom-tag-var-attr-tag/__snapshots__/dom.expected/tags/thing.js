export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _input_what_ = /* @__PURE__ */_$.value("input_what", (_scope, input_what) => _dynamicTag(_scope, input_what));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_what_(_scope, input.what));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", _template_, _walks_, _setup_, () => _params__);