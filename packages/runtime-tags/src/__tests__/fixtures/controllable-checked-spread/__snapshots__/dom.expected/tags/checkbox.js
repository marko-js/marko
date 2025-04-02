export const _template = "<input>";
export const _walks = /* get, over(1) */" b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_effect = _$.effect("__tests__/tags/checkbox.marko_0_input", _scope => _$.attrsEvents(_scope, "#input/0"));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.attrs(_scope, "#input/0", {
    type: "checkbox",
    ...input
  });
  _input_effect(_scope);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/checkbox.marko", _template, _walks, _setup, _input);