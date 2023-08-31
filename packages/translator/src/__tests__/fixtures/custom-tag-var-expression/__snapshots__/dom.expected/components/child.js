import { tagVarSignal as _tagVarSignal, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _x = /* @__PURE__ */_value("x", (_scope, x) => _tagVarSignal(_scope, x + 3), void 0, _tagVarSignal);
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<span>child</span>";
export const walks = /* over(1) */"b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/custom-tag-var-expression/components/child.marko");