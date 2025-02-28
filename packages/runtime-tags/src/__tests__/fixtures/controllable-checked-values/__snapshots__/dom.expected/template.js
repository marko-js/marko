export const _template_ = "<input type=checkbox><input type=checkbox><input type=checkbox><span> </span>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_checkedValue__checkedValueChange = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    checkedValue,
    _checkedValueChange
  } = _scope;
  _$.controllable_input_checkedValue(_scope, "#input/0", checkedValue, _checkedValueChange, "a");
  _$.controllable_input_checkedValue(_scope, "#input/1", checkedValue, _checkedValueChange, "b");
  _$.controllable_input_checkedValue(_scope, "#input/2", checkedValue, _checkedValueChange, "c");
});
const _checkedValueChange2 = /* @__PURE__ */_$.value("_checkedValueChange", (_scope, _checkedValueChange) => _expr_checkedValue__checkedValueChange(_scope));
const _checkedValue = /* @__PURE__ */_$.state("checkedValue/4", (_scope, checkedValue) => {
  _$.data(_scope["#text/3"], checkedValue);
  _expr_checkedValue__checkedValueChange(_scope);
});
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  _$.controllable_input_checkedValue_effect(_scope, "#input/0");
  _$.controllable_input_checkedValue_effect(_scope, "#input/1");
  _$.controllable_input_checkedValue_effect(_scope, "#input/2");
});
export function _setup_(_scope) {
  _checkedValue(_scope, ["a", "b"]);
  _checkedValueChange2(_scope, _checkedValueChange3(_scope));
  _setup__effect(_scope);
}
function _checkedValueChange3(_scope) {
  return _new_checkedValue => {
    _checkedValue(_scope, _new_checkedValue);
  };
}
_$.register("__tests__/template.marko_0/_checkedValueChange", _checkedValueChange3);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);