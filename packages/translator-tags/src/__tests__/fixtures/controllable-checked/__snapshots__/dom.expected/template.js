import { checkedAttr as _checkedAttr, data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checked = /* @__PURE__ */_value("checked", (_scope, checked) => {
  _checkedAttr(_scope["#input/0"], checked);
  _data(_scope["#text/1"], String(checked));
});
const _setup = _scope => {
  _checked(_scope, false);
};
export const _template_ = "<input><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko");