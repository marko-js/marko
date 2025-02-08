export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _content_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/0");
const _expr_Text_value = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    value
  } = _scope;
  _content_input(_scope, () => value);
}, () => _content_input);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _expr_Text_value);
export const _value_ = /* @__PURE__ */_$.value("value", 0, () => _expr_Text_value);
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTag(_scope, content), () => _dynamicTag);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _content_(_scope, input.content);
  _value_(_scope, input.value);
}, () => _$.intersections([_content_, _value_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, () => _params__);