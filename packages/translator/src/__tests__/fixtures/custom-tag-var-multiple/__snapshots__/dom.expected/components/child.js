import { tagVarSignal as _tagVarSignal, intersection as _intersection, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_x_y = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _tagVarSignal(_scope, x + y);
});
const _y = /* @__PURE__ */_value("y", null, _expr_x_y);
const _x = /* @__PURE__ */_value("x", null, _expr_x_y);
const _setup = _scope => {
  _x(_scope, 1);
  _y(_scope, 2);
};
export const template = "<span>child</span>";
export const walks = /* over(1) */"b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/custom-tag-var-multiple/components/child.marko");