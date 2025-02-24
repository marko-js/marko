export const _template_ = "<!><!><span> </span>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$tagSelect_content_effect = _$.effect("__tests__/template.marko_1", _scope => {
  _$.attrsEvents(_scope, "#option/0");
  _$.attrsEvents(_scope, "#option/1");
  _$.attrsEvents(_scope, "#option/2");
});
const _setup$tagSelect_content = _scope => {
  _$.attrs(_scope, "#option/0", {
    value: "a"
  });
  _$.attrs(_scope, "#option/1", {
    value: "b"
  });
  _$.attrs(_scope, "#option/2", {
    value: "c"
  });
  _setup$tagSelect_content_effect(_scope);
};
const _tagSelect_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<option>A</option><option>B</option><option>C</option>", /* get, over(1), get, over(1), get */" b b ", _setup$tagSelect_content));
const _expr_value_tag = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    value,
    tag
  } = _scope;
  _dynamicTag(_scope, tag ? "select" : {}, () => ({
    value,
    valueChange: _valueChange(_scope)
  }));
}, () => _dynamicTag);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _tagSelect_content);
const _tag = /* @__PURE__ */_$.value("tag", 0, () => _expr_value_tag);
const _value = /* @__PURE__ */_$.state("value", (_scope, value) => _$.data(_scope["#text/1"], value), () => _expr_value_tag);
export function _setup_(_scope) {
  _value(_scope, "b");
  _tag(_scope, "select");
}
function _valueChange(_scope) {
  return function (v) {
    _value(_scope, v);
  };
}
_$.register("__tests__/template.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);