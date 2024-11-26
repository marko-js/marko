// size: 203 (min) 138 (brotli)
const _checkedChange = _$.register(
    "a0",
    (_scope) =>
      function (_new_checked) {
        _checked(_scope, _new_checked);
      },
  ),
  _checked = _$.state(2, (_scope, checked) => {
    _$.controllable_input_checked(_scope, 0, checked, _checkedChange(_scope)),
      _$.data(_scope[1], String(checked));
  });
_$.effect("a1", (_scope) => _$.controllable_input_checked_effect(_scope, 0)),
  init();
