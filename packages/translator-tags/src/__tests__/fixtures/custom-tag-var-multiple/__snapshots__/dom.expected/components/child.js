export const _template_ = "<span>child</span>";
export const _walks_ = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_x_y = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _$.tagVarSignal(_scope, x + y);
}, () => _$.tagVarSignal);
const _y = /* @__PURE__ */_$.state("y", null, () => _expr_x_y);
const _x = /* @__PURE__ */_$.state("x", null, () => _expr_x_y);
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 2);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-multiple/components/child.marko");