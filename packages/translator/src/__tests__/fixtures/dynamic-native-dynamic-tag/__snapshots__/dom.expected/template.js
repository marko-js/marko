import { dynamicTagAttrs as _dynamicTagAttrs, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, intersection as _intersection, conditional as _conditional, value as _value, register as _register, queueEffect as _queueEffect, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _tagNameBody = /* @__PURE__ */_createRenderer("body content", "");
const _expr_dynamicTagName_className = /* @__PURE__ */_intersection(2, (_scope, _dirty) => {
  let _tagName_input;
  if (_dirty) {
    const {
      "#text/0": dynamicTagName,
      className
    } = _scope;
    _tagName_input = () => ({
      class: className
    });
  }
  _dynamicTagAttrs(_scope, "#text/0", _tagName_input, _tagNameBody, _dirty);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", (_scope, _dirty) => _expr_dynamicTagName_className(_scope, _dirty));
const _className = /* @__PURE__ */_value("className", (_scope, className, _dirty) => _expr_dynamicTagName_className(_scope, _dirty));
const _tagName_effect = _register("packages/translator/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    tagName
  } = _scope;
  _queueSource(_scope, _tagName, tagName === "span" ? "div" : "span");
}));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName, _dirty) => {
  let _dynamicTagName_value;
  if (_dirty) {
    _queueEffect(_scope, _tagName_effect);
    _dynamicTagName_value = tagName || _tagNameBody;
  }
  _dynamicTagName(_scope, _dynamicTagName_value, _dirty);
});
const _setup = _scope => {
  _tagName(_scope, "span");
  _className(_scope, "A");
};
export const template = "<!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko");