import { on as _on, queueSource as _queueSource, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value, register as _register, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _tagNameBody = /* @__PURE__ */_createRenderer("body content", "");
const _tagName_input = _dynamicTagAttrs("#text/0", _tagNameBody);
const _expr__dynamicTagName_className = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/0": _dynamicTagName,
    className
  } = _scope;
  _tagName_input(_scope, () => ({
    class: className
  }));
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, _expr__dynamicTagName_className);
const _className = /* @__PURE__ */_value("className", null, _expr__dynamicTagName_className);
const _tagName_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    tagName
  } = _scope;
  _queueSource(_scope, _tagName, tagName === "span" ? "div" : "span");
}));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => {
  _queueEffect(_scope, _tagName_effect);
  _dynamicTagName(_scope, tagName || _tagNameBody);
}, void 0, _dynamicTagName);
const _setup = _scope => {
  _tagName(_scope, "span");
  _className(_scope, "A");
};
export const template = "<!><!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"D%b b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko");