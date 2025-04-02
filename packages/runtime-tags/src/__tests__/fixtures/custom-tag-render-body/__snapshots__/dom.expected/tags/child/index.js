export const _template = "<!><!><!>";
export const _walks = /* replace, over(1), replace, over(1) */"%b%bD";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _content = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTag(_scope, content));
export const _name = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _name(_scope, input.name);
  _content(_scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child/index.marko", _template, _walks, _setup, _input);