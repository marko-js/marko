// size: 193 (min) 125 (brotli)
const _valueChange = _$.register(
    "a0",
    (_scope) =>
      function (v) {
        _value(_scope, v);
      },
  ),
  _value = _$.state(2, (_scope, value) => {
    _$.controllable_select_value(_scope, 0, value, _valueChange(_scope)),
      _$.data(_scope[1], value);
  });
_$.effect("a1", (_scope) => _$.controllable_select_value_effect(_scope, 0)),
  init();
