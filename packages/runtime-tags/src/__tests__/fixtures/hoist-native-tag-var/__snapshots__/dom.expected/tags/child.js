export const _template_ = "";
export const _walks_ = "";
export const _setup_ = () => {};
let id = 0;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input__effect = _$.effect("__tests__/tags/child.marko_0_input", ({
  input
}) => input.value()?.classList.add(`child${id++}`));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input__effect(_scope));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, _input_);