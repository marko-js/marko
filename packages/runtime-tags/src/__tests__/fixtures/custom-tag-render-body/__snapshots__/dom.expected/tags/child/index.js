export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1), replace, over(1) */"%b%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _content_ = /* @__PURE__ */_$.value("content/5", (_scope, content) => _dynamicTag(_scope, content));
export const _name_ = /* @__PURE__ */_$.value("name/4", (_scope, name) => _$.data(_scope["#text/0"], name));
export const _input_ = /* @__PURE__ */_$.value("input/3", (_scope, input) => {
  _name_(_scope, input.name);
  _content_(_scope, input.content);
});
export const _params__ = /* @__PURE__ */_$.value("_params_/2", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child/index.marko", _template_, _walks_, _setup_, () => _params__);