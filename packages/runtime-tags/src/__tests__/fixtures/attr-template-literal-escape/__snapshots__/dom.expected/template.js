export const _template = "<div></div>";
export const _walks = /* get, over(1) */" b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_name = /* @__PURE__ */_$.value("input_name", (_scope, input_name) => _$.attr(_scope["#div/0"], "foo", `Hello ${input_name}`));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_name(_scope, input.name));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);