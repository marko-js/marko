export const _template = "<div>Id is <!></div>";
export const _walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _id = /* @__PURE__ */_$.value("id", (_scope, id) => _$.data(_scope["#text/0"], id));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _id(_scope, input.id));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);