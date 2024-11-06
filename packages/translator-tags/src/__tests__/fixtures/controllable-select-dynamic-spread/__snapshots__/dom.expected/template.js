export const _template_ = "<!><!><span> </span>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$tagSelectBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1", _scope => {
  _$.attrsEvents(_scope, "#option/0");
  _$.attrsEvents(_scope, "#option/1");
  _$.attrsEvents(_scope, "#option/2");
});
const _setup$tagSelectBody = _scope => {
  _$.attrs(_scope, "#option/0", {
    value: "a"
  });
  _$.attrs(_scope, "#option/1", {
    value: "b"
  });
  _$.attrs(_scope, "#option/2", {
    value: "c"
  });
  _setup$tagSelectBody_effect(_scope);
};
const _tagSelectBody = _$.register("packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<option>A</option><option>B</option><option>C</option>", /* get, over(1), get, over(1), get */" b b ", _setup$tagSelectBody));
const _tagSelect_input = _$.dynamicTagAttrs("#text/0", _tagSelectBody);
const _expr_Text_value = /* @__PURE__ */_$.intersection(2, _scope => {
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
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", null, () => _expr_Text_value);
const _tag = /* @__PURE__ */_$.value("tag", (_scope, tag) => _dynamicTagName(_scope, (tag ? "select" : {}) || _tagSelectBody(_scope)), () => _dynamicTagName);
const _value = /* @__PURE__ */_$.state("value", (_scope, value) => _$.data(_scope["#text/1"], value), () => _expr_Text_value);
export function _setup_(_scope) {
  _value(_scope, "b");
  _tag(_scope, "select");
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko");