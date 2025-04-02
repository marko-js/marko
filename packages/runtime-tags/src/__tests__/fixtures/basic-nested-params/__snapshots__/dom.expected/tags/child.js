export const _template = "<div><!></div>";
export const _walks = /* next(1), replace, out(1) */"D%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_content_value = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    content,
    value
  } = _scope;
  _dynamicTag(_scope, content, () => value);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _value = /* @__PURE__ */_$.value("value", _scope => _expr_content_value(_scope));
export const _content = /* @__PURE__ */_$.value("content", _scope => _expr_content_value(_scope));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _content(_scope, input.content);
  _value(_scope, input.value);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);