// size: 515 (min) 163 (brotli)
const _checkedValue = _$.state(4, (_scope, checkedValue) => {
  _$.controllable_input_checkedValue(
    _scope,
    0,
    checkedValue,
    _checkedValueChange3(_scope),
    "a",
  ),
    _$.controllable_input_checkedValue(
      _scope,
      1,
      checkedValue,
      _checkedValueChange2(_scope),
      "b",
    ),
    _$.controllable_input_checkedValue(
      _scope,
      2,
      checkedValue,
      _checkedValueChange(_scope),
      "c",
    ),
    _$.data(_scope[3], checkedValue);
});
function _checkedValueChange(_scope) {
  return (_new_checkedValue3) => {
    _checkedValue(_scope, _new_checkedValue3);
  };
}
function _checkedValueChange2(_scope) {
  return (_new_checkedValue2) => {
    _checkedValue(_scope, _new_checkedValue2);
  };
}
function _checkedValueChange3(_scope) {
  return (_new_checkedValue) => {
    _checkedValue(_scope, _new_checkedValue);
  };
}
_$.effect("a2", (_scope) => {
  _$.controllable_input_checkedValue_effect(_scope, 0),
    _$.controllable_input_checkedValue_effect(_scope, 1),
    _$.controllable_input_checkedValue_effect(_scope, 2);
}),
  _$.register("a1", _checkedValueChange),
  _$.register("a1", _checkedValueChange2),
  _$.register("a0", _checkedValueChange3),
  init();
