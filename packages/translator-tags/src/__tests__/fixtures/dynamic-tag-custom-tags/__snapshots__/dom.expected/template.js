import child1 from "./components/child1.marko";
import child2 from "./components/child2.marko";
import { on as _on, queueSource as _queueSource, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _tagName_input = _dynamicTagAttrs("#text/0");
const _expr__dynamicTagName_val = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/0": _dynamicTagName,
    val
  } = _scope;
  _tagName_input(_scope, () => ({
    value: val
  }));
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, _expr__dynamicTagName_val);
const _val = /* @__PURE__ */_value("val", null, _expr__dynamicTagName_val);
const _tagName_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    tagName
  } = _scope;
  _queueSource(_scope, _tagName, tagName === child1 ? child2 : child1);
}));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => {
  _queueEffect(_scope, _tagName_effect);
  _dynamicTagName(_scope, tagName);
}, void 0, _dynamicTagName);
const _setup = _scope => {
  _tagName(_scope, child1);
  _val(_scope, 3);
};
export const template = "<!><!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"D%b b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko");