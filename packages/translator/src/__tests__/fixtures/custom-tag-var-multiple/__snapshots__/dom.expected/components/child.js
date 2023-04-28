import { tagVarSignal as _tagVarSignal, intersection as _intersection, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_x_y = /* @__PURE__ */_intersection(2, (_scope, _dirty) => {
  let _tagVarSignal_value;
  if (_dirty) {
    const {
      x,
      y
    } = _scope;
    _tagVarSignal_value = x + y;
  }
  _tagVarSignal(_scope, _tagVarSignal_value, _dirty);
});
const _y = /* @__PURE__ */_value("y", (_scope, y, _dirty) => _expr_x_y(_scope, _dirty));
const _x = /* @__PURE__ */_value("x", (_scope, x, _dirty) => _expr_x_y(_scope, _dirty));
const _setup = _scope => {
  _x(_scope, 1);
  _y(_scope, 2);
};
export const template = "<span>child</span>";
export const walks = /* over(1) */"b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/custom-tag-var-multiple/components/child.marko");