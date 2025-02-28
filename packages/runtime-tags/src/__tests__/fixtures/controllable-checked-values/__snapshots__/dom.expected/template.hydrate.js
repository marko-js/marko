// size: 450 (min) 178 (brotli)
const _expr_checkedValue__checkedValueChange = _$.intersection(6, (_scope) => {
    const { 4: checkedValue, 5: _checkedValueChange } = _scope;
    _$.controllable_input_checkedValue(
      _scope,
      0,
      checkedValue,
      _checkedValueChange,
      "a",
    ),
      _$.controllable_input_checkedValue(
        _scope,
        1,
        checkedValue,
        _checkedValueChange,
        "b",
      ),
      _$.controllable_input_checkedValue(
        _scope,
        2,
        checkedValue,
        _checkedValueChange,
        "c",
      );
  }),
  _checkedValue = _$.state(4, (_scope, checkedValue) => {
    _$.data(_scope[3], checkedValue),
      _expr_checkedValue__checkedValueChange(_scope);
  });
_$.effect("a1", (_scope) => {
  _$.controllable_input_checkedValue_effect(_scope, 0),
    _$.controllable_input_checkedValue_effect(_scope, 1),
    _$.controllable_input_checkedValue_effect(_scope, 2);
}),
  _$.register("a0", function (_scope) {
    return (_new_checkedValue) => {
      _checkedValue(_scope, _new_checkedValue);
    };
  }),
  init();
