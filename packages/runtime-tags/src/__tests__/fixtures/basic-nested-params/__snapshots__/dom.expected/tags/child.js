export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_content_value = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    "content/3": content,
    "value/4": value
  } = _scope;
  _dynamicTag(_scope, content, () => value);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _value_ = /* @__PURE__ */_$.value("value/4", (_scope, value) => _expr_content_value(_scope));
export const _content_ = /* @__PURE__ */_$.value("content/3", (_scope, content) => _expr_content_value(_scope));
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => {
  _content_(_scope, input.content);
  _value_(_scope, input.value);
});
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, () => _params__);