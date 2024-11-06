export const _template_ = "<span>child</span>";
export const _walks_ = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _$.tagVarSignal(_scope, x), () => _$.tagVarSignal);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/return-tag-no-var/components/child.marko", _template_, _walks_, _setup_);