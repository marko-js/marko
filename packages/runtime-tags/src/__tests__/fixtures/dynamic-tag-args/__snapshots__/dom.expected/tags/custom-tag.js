export const _template = "<div> </div>";
export const _walks = /* next(1), get, out(1) */"D l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _$.data(_scope["#text/0"], JSON.stringify(input)));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _template, _walks, _setup, _input);