export const $template = "";
export const $walks = "";
export const $setup = () => {};
let id = 0;
import * as _ from "@marko/runtime-tags/debug/dom";
const $input__script = _._script("__tests__/tags/child.marko_0_input", ({
  input
}) => input.value()?.classList.add(`child${id++}`));
export const $input = /* @__PURE__ */_._const("input", $input__script);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);