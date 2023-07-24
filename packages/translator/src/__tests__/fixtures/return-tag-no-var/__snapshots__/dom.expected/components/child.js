import { tagVarSignal as _tagVarSignal, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x = /* @__PURE__ */_value("x", (_scope, x) => _tagVarSignal(_scope, x), void 0, _tagVarSignal);
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<span>child</span>";
export const walks = /* over(1) */"b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/return-tag-no-var/components/child.marko");