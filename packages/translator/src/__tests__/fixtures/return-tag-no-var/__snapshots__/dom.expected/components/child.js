import { tagVarSignal as _tagVarSignal, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x = /* @__PURE__ */_value("x", (_scope, x, _dirty) => {
  let _tagVarSignal_value;
  if (_dirty) {
    _tagVarSignal_value = x;
  }
  _tagVarSignal(_scope, _tagVarSignal_value, _dirty);
});
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<span>child</span>";
export const walks = /* over(1) */"b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/return-tag-no-var/components/child.marko");