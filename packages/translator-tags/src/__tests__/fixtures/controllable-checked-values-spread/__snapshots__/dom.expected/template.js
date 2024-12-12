export const _template_ = `${_checkbox_template}${_checkbox_template}${_checkbox_template}<span> </span>`;
export const _walks_ = /* beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&/${_checkbox_walks}&/${_checkbox_walks}&D l`;
import { _setup_ as _checkbox, _input_ as _checkbox_input, _template_ as _checkbox_template, _walks_ as _checkbox_walks } from "./components/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _checkedValue = /* @__PURE__ */_$.state("checkedValue", (_scope, checkedValue) => {
  _$.data(_scope["#text/3"], checkedValue);
  _checkbox_input(_scope["#childScope/0"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange(_scope),
    value: "a"
  });
  _checkbox_input(_scope["#childScope/1"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange2(_scope),
    value: "b"
  });
  _checkbox_input(_scope["#childScope/2"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange3(_scope),
    value: "c"
  });
}, () => _$.intersections([_$.inChild("#childScope/0", _checkbox_input), _$.inChild("#childScope/1", _checkbox_input), _$.inChild("#childScope/2", _checkbox_input)]));
export function _setup_(_scope) {
  _checkbox(_scope["#childScope/0"]);
  _checkbox(_scope["#childScope/1"]);
  _checkbox(_scope["#childScope/2"]);
  _checkedValue(_scope, ["a", "b"]);
}
function _checkedValueChange(_scope) {
  return _new_checkedValue => {
    _checkedValue(_scope, _new_checkedValue);
  };
}
function _checkedValueChange2(_scope) {
  return _new_checkedValue2 => {
    _checkedValue(_scope, _new_checkedValue2);
  };
}
function _checkedValueChange3(_scope) {
  return _new_checkedValue3 => {
    _checkedValue(_scope, _new_checkedValue3);
  };
}
_$.register("__tests__/template.marko_0/checkedValueChange", _checkedValueChange);
_$.register("__tests__/template.marko_0/checkedValueChange_0", _checkedValueChange2);
_$.register("__tests__/template.marko_0/checkedValueChange_0", _checkedValueChange3);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);