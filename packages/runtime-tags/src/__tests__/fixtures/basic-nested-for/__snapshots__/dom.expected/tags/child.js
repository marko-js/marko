export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _name_ = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _name_(_scope, input.name));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, _input_);