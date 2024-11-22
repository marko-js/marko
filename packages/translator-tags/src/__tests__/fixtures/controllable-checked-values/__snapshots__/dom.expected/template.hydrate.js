// size: 487 (min) 153 (brotli)
const _checkedValueChange = _$.register(
    "b",
    (_scope) =>
      function (_new_checkedValue) {
        _checkedValue(_scope, _new_checkedValue);
      },
  ),
  _checkedValueChange2 = _$.register(
    "c",
    (_scope) =>
      function (_new_checkedValue2) {
        _checkedValue(_scope, _new_checkedValue2);
      },
  ),
  _checkedValueChange3 = _$.register(
    "c",
    (_scope) =>
      function (_new_checkedValue3) {
        _checkedValue(_scope, _new_checkedValue3);
      },
  ),
  _checkedValue = _$.state(4, (_scope, checkedValue) => {
    _$.controllable_input_checkedValue(
      _scope,
      0,
      checkedValue,
      _checkedValueChange(_scope),
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
        _checkedValueChange3(_scope),
        "c",
      ),
      _$.data(_scope[3], checkedValue);
  });
_$.effect("d", (_scope) => {
  _$.controllable_input_checkedValue_effect(_scope, 0),
    _$.controllable_input_checkedValue_effect(_scope, 1),
    _$.controllable_input_checkedValue_effect(_scope, 2);
}),
  init();
