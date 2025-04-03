export const $template = "";
export const $walks = "";
export const $setup = () => {};
let id = 0;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_effect = _$.effect("__tests__/tags/child.marko_0_input", ({
  input
}) => input.value()?.classList.add(`child${id++}`));
export const $input = /* @__PURE__ */_$.value("input", $input_effect);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);