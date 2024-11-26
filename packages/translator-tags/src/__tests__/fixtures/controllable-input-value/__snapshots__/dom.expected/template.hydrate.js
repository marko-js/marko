// size: 191 (min) 134 (brotli)
const _valueChange = _$.register(
    "a0",
    (_scope) =>
      function (_new_value) {
        _value(_scope, _new_value);
      },
  ),
  _value = _$.state(2, (_scope, value) => {
    _$.controllable_input_value(_scope, 0, value, _valueChange(_scope)),
      _$.data(_scope[1], value);
  });
_$.effect("a1", (_scope) => _$.controllable_input_value_effect(_scope, 0)),
  init();
