export const _template_ = "<span>child</span>";
export const _walks_ = /* over(1) */"b";
import { tagVarSignal as _tagVarSignal, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_value("x", (_scope, x) => _tagVarSignal(_scope, x + 3), _tagVarSignal);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-expression/components/child.marko");