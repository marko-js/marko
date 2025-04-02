export const _template = "a";
export const _walks = /* over(1) */"b";
const __ = _scope => {};
export function _setup(_scope) {
  __(_scope, (() => {
    throw new Error("ERROR!");
  })());
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);