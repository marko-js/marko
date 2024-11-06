export const _template_ = "<!><!><span> </span>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
import { attrs as _attrs, attrsEvents as _attrsEvents, data as _data, createRendererWithOwner as _createRendererWithOwner, register as _register, queueEffect as _queueEffect, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value2, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup$tagSelectBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1", _scope => {
  _attrsEvents(_scope, "#option/0");
  _attrsEvents(_scope, "#option/1");
  _attrsEvents(_scope, "#option/2");
});
const _setup$tagSelectBody = _scope => {
  _attrs(_scope, "#option/0", {
    value: "a"
  });
  _attrs(_scope, "#option/1", {
    value: "b"
  });
  _attrs(_scope, "#option/2", {
    value: "c"
  });
  _queueEffect(_scope, _setup$tagSelectBody_effect);
};
const _tagSelectBody = _register("packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("<option>A</option><option>B</option><option>C</option>", /* get, over(1), get, over(1), get */" b b ", _setup$tagSelectBody));
const _tagSelect_input = _dynamicTagAttrs("#text/0", _tagSelectBody);
const _expr_Text_value = /* @__PURE__ */_intersection(2, _scope => {
  const {
    value
  } = _scope;
  _tagSelect_input(_scope, () => ({
    value,
    valueChange(v) {
      _value(_scope, v);
    }
  }));
}, () => _tagSelect_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, () => _expr_Text_value);
const _tag = /* @__PURE__ */_value2("tag", (_scope, tag) => _dynamicTagName(_scope, (tag ? "select" : {}) || _tagSelectBody(_scope)), () => _dynamicTagName);
const _value = /* @__PURE__ */_state("value", (_scope, value) => _data(_scope["#text/1"], value), () => _expr_Text_value);
export function _setup_(_scope) {
  _value(_scope, "b");
  _tag(_scope, "select");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko");