export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_name_ = /* @__PURE__ */_$.value("input_name", (_scope, input_name) => _$.attr(_scope["#div/0"], "foo", `Hello ${input_name}`));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_name_(_scope, input.name));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);