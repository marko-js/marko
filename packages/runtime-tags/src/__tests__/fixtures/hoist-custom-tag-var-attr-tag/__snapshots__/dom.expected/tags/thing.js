export const _template = "<!><!><!>";
export const _walks = /* replace, over(1) */"D%bD";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const _input_what = /* @__PURE__ */_$.value("input_what", _dynamicTag);
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_what(_scope, input.what));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", _template, _walks, _setup, _input);