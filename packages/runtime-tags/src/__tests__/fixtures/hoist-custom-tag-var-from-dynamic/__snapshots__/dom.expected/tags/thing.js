export const _template = "<!><!><!><!>";
export const _walks = /* replace, over(1), replace, over(1) */"D%b%bD";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/1");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _input_content = /* @__PURE__ */_$.value("input_content", (_scope, input_content) => {
  _dynamicTag(_scope, input_content);
  _dynamicTag2(_scope, input_content);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_content(_scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", _template, _walks, _setup, _input);