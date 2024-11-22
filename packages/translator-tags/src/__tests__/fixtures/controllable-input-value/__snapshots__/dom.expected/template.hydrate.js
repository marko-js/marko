// size: 189 (min) 125 (brotli)
const _valueChange = _$.register(
    "b",
    (_scope) =>
      function (_new_value) {
        _value(_scope, _new_value);
      },
  ),
  _value = _$.state(2, (_scope, value) => {
    _$.controllable_input_value(_scope, 0, value, _valueChange(_scope)),
      _$.data(_scope[1], value);
  });
_$.effect("c", (_scope) => _$.controllable_input_value_effect(_scope, 0)),
  init();
