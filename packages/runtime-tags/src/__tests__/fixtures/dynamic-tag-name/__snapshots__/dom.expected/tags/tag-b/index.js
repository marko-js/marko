export const _template_ = "<div>B <!></div>";
export const _walks_ = /* get, next(1), over(1), replace, out(1) */" Db%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _content_input = _$.dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/1", _scope => _content_input(_scope, () => ({})), () => _content_input);
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTagName(_scope, content), () => _dynamicTagName);
export const _other_ = /* @__PURE__ */_$.value("other", (_scope, other) => _$.attr(_scope["#div/0"], "data-other", other));
export const _className_ = /* @__PURE__ */_$.value("className", (_scope, className) => _$.classAttr(_scope["#div/0"], className));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _className_(_scope, input.class);
  _other_(_scope, input.other);
  _content_(_scope, input.content);
}, () => _content_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-b/index.marko", _template_, _walks_, _setup_, void 0, () => _params__);