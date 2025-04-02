export const _template = "<body><!></body>";
export const _walks = /* next(1), replace, out(1) */"D%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _content = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTag(_scope, content));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _content(_scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/layout.marko", _template, _walks, _setup, _input);