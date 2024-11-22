// size: 191 (min) 120 (brotli)
const _valueChange = _$.register(
    "b",
    (_scope) =>
      function (v) {
        _value(_scope, v);
      },
  ),
  _value = _$.state(2, (_scope, value) => {
    _$.controllable_select_value(_scope, 0, value, _valueChange(_scope)),
      _$.data(_scope[1], value);
  });
_$.effect("c", (_scope) => _$.controllable_select_value_effect(_scope, 0)),
  init();
