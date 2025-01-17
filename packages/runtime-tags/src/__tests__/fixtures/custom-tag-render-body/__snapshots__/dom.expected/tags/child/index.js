export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1), replace, over(1) */"%b%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _content_input = _$.dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/1", _scope => _content_input(_scope, () => ({})), () => _content_input);
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTagName(_scope, content), () => _dynamicTagName);
export const _name_ = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _name_(_scope, input.name);
  _content_(_scope, input.content);
}, () => _content_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child/index.marko", _template_, _walks_, _setup_, () => _params__);