export const _template_ = "<!><!><!><!>";
export const _walks_ = /* replace, over(1), replace, over(1) */"D%b%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/1");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _input_content_ = /* @__PURE__ */_$.value("input_content", (_scope, input_content) => {
  _dynamicTag(_scope, input_content);
  _dynamicTag2(_scope, input_content);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_content_(_scope, input.content));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", _template_, _walks_, _setup_, () => _params__);