import child1 from "./components/child1.marko";
import child2 from "./components/child2.marko";
import { dynamicTagAttrs as _dynamicTagAttrs, on as _on, queueSource as _queueSource, intersection as _intersection, conditional as _conditional, value as _value, register as _register, queueEffect as _queueEffect, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_dynamicTagName_val = /* @__PURE__ */_intersection(2, (_scope, _dirty) => {
  let _tagName_input;
  if (_dirty) {
    const dynamicTagName = _scope["#text/0"],
      val = _scope["val"];
    _tagName_input = () => ({
      value: val
    });
  }
  _dynamicTagAttrs(_scope, "#text/0", _tagName_input, null, _dirty);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", (_scope, _dirty) => _expr_dynamicTagName_val(_scope, _dirty));
const _val = /* @__PURE__ */_value("val", (_scope, val, _dirty) => _expr_dynamicTagName_val(_scope, _dirty));
const _tagName_effect = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", function () {
  const tagName = _scope["tagName"];
  _queueSource(_scope, _tagName, tagName === child1 ? child2 : child1);
}));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName, _dirty) => {
  let _dynamicTagName_value;
  if (_dirty) {
    _queueEffect(_scope, _tagName_effect);
    _dynamicTagName_value = tagName;
  }
  _dynamicTagName(_scope, _dynamicTagName_value, _dirty);
});
const _setup = _scope => {
  _tagName(_scope, child1);
  _val(_scope, 3);
};
export const template = "<!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko");