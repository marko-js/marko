export const _template_ = "a";
export const _walks_ = /* over(1) */"b";
const _2 = (_scope, _) => {};
export function _setup_(_scope) {
  _2(_scope, (() => {
    throw new Error("ERROR!");
  })());
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);