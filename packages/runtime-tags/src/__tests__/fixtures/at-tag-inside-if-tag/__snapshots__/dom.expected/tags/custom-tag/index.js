export const _template = "<!><!><div> </div>";
export const _walks = /* replace, over(1), next(1), get, out(1) */"D%bD l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _content = /* @__PURE__ */_$.value("content", _dynamicTag);
export const _x = /* @__PURE__ */_$.value("x", (_scope, x) => _$.data(_scope["#text/1"], x));
export const _thing2 = /* @__PURE__ */_$.value("_thing", (_scope, _thing) => {
  _x(_scope, _thing.x);
  _content(_scope, _thing.content);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _thing2(_scope, input.thing));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag/index.marko", _template, _walks, _setup, _input);