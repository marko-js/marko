export const _template = "<div>B <!></div>";
export const _walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _content = /* @__PURE__ */_$.value("content", _dynamicTag);
export const _other = /* @__PURE__ */_$.value("other", (_scope, other) => _$.attr(_scope["#div/0"], "data-other", other));
export const _className = /* @__PURE__ */_$.value("className", (_scope, className) => _$.classAttr(_scope["#div/0"], className));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _className(_scope, input.class);
  _other(_scope, input.other);
  _content(_scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-b/index.marko", _template, _walks, _setup, _input);