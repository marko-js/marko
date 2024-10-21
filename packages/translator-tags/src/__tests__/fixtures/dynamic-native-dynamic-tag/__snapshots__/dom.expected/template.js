export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import { on as _on, queueSource as _queueSource, createRendererWithOwner as _createRendererWithOwner, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagNameBody = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("body content", ""));
const _tagName_input = _dynamicTagAttrs("#text/0", _tagNameBody);
const _expr_Text_className = /* @__PURE__ */_intersection(2, _scope => {
  const {
    className
  } = _scope;
  _tagName_input(_scope, () => ({
    class: className
  }));
}, () => _tagName_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, () => _expr_Text_className);
const _className = /* @__PURE__ */_value("className", null, () => _expr_Text_className);
const _onClick = _scope => {
  const {
    tagName
  } = _scope;
  return function () {
    _queueSource(_scope, _tagName, tagName === "span" ? "div" : "span");
  };
};
const _tagName_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => {
  _queueEffect(_scope, _tagName_effect);
  _dynamicTagName(_scope, tagName || _tagNameBody(_scope));
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _tagName(_scope, "span");
  _className(_scope, "A");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko");