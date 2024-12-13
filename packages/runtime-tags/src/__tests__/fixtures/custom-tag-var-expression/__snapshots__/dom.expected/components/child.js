export const _template_ = "<span>child</span>";
export const _walks_ = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _$.tagVarSignal(_scope, x + 3), () => _$.tagVarSignal);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/child.marko", _template_, _walks_, _setup_);