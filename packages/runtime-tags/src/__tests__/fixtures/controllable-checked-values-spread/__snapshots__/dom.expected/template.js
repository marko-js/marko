export const _template_ = `${_checkbox_template}${_checkbox_template}${_checkbox_template}<span> </span>`;
export const _walks_ = /* beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&/${_checkbox_walks}&/${_checkbox_walks}&D l`;
import { _setup_ as _checkbox, _input_ as _checkbox_input, _template_ as _checkbox_template, _walks_ as _checkbox_walks } from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_checkedValue__checkedValueChange = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    checkedValue,
    _checkedValueChange
  } = _scope;
  _checkbox_input(_scope["#childScope/0"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange,
    value: "a"
  });
  _checkbox_input(_scope["#childScope/1"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange,
    value: "b"
  });
  _checkbox_input(_scope["#childScope/2"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange,
    value: "c"
  });
});
const _checkedValueChange2 = /* @__PURE__ */_$.value("_checkedValueChange", (_scope, _checkedValueChange) => _expr_checkedValue__checkedValueChange(_scope));
const _checkedValue = /* @__PURE__ */_$.state("checkedValue/4", (_scope, checkedValue) => {
  _$.data(_scope["#text/3"], checkedValue);
  _expr_checkedValue__checkedValueChange(_scope);
});
export function _setup_(_scope) {
  _checkbox(_scope["#childScope/0"]);
  _checkbox(_scope["#childScope/1"]);
  _checkbox(_scope["#childScope/2"]);
  _checkedValue(_scope, ["a", "b"]);
  _checkedValueChange2(_scope, _checkedValueChange3(_scope));
}
function _checkedValueChange3(_scope) {
  return _new_checkedValue => {
    _checkedValue(_scope, _new_checkedValue);
  };
}
_$.register("__tests__/template.marko_0/_checkedValueChange", _checkedValueChange3);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);