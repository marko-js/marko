export const _template = "<span>child</span>";
export const _walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_$.state("x/0", (_scope, x) => _$.tagVarSignal(_scope, x + 3));
export function _setup(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup);