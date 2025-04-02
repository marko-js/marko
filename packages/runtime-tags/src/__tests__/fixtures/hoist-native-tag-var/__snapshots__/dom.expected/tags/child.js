export const _template = "";
export const _walks = "";
export const _setup = () => {};
let id = 0;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_effect = _$.effect("__tests__/tags/child.marko_0_input", ({
  input
}) => input.value()?.classList.add(`child${id++}`));
export const _input = /* @__PURE__ */_$.value("input", _scope => _input_effect(_scope));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);