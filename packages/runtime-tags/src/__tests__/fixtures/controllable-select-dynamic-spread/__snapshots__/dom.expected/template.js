export const _template = "<!><!><span> </span>";
export const _walks = /* replace, over(1), next(1), get, out(1) */"D%bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$tagselect_content_effect = _$.effect("__tests__/template.marko_1", _scope => {
  _$.attrsEvents(_scope, "#option/0");
  _$.attrsEvents(_scope, "#option/1");
  _$.attrsEvents(_scope, "#option/2");
});
const _setup$tagselect_content = _scope => {
  _$.attrs(_scope, "#option/0", {
    value: "a"
  });
  _$.attrs(_scope, "#option/1", {
    value: "b"
  });
  _$.attrs(_scope, "#option/2", {
    value: "c"
  });
  _setup$tagselect_content_effect(_scope);
};
const _tagselect_content = _$.registerContent("__tests__/template.marko_1_renderer", "<option>A</option><option>B</option><option>C</option>", /* get, over(1), get, over(1), get */" b b ", _setup$tagselect_content);
const _expr_value_tag = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    value,
    tag
  } = _scope;
  _dynamicTag(_scope, tag ? "select" : {}, () => ({
    value,
    valueChange: _valueChange(_scope)
  }));
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _tagselect_content);
const _tag = /* @__PURE__ */_$.value("tag", _expr_value_tag);
const _value = /* @__PURE__ */_$.state("value/2", (_scope, value) => {
  _$.data(_scope["#text/1"], value);
  _expr_value_tag(_scope);
});
export function _setup(_scope) {
  _value(_scope, "b");
  _tag(_scope, "select");
}
function _valueChange(_scope) {
  return function (v) {
    _value(_scope, v);
  };
}
_$.register("__tests__/template.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);