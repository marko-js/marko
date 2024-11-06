export const _template_ = "<span>child</span>";
export const _walks_ = /* over(1) */"b";
import { tagVarSignal as _tagVarSignal, intersection as _intersection, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_x_y = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _tagVarSignal(_scope, x + y);
}, () => _tagVarSignal);
const _y = /* @__PURE__ */_state("y", null, () => _expr_x_y);
const _x = /* @__PURE__ */_state("x", null, () => _expr_x_y);
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 2);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-multiple/components/child.marko");