export const _template = "<select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><span> </span>";
export const _walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.state("value/2", (_scope, value) => {
  _$.controllable_select_value(_scope, "#select/0", value, _valueChange(_scope));
  _$.data(_scope["#text/1"], value);
});
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => _$.controllable_select_value_effect(_scope, "#select/0"));
export function _setup(_scope) {
  _value(_scope, "b");
  _setup_effect(_scope);
}
function _valueChange(_scope) {
  return function (v) {
    _value(_scope, v);
  };
}
_$.register("__tests__/template.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);