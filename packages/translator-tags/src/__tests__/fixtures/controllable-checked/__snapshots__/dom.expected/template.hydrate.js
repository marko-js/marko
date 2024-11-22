// size: 201 (min) 123 (brotli)
const _checkedChange = _$.register(
    "b",
    (_scope) =>
      function (_new_checked) {
        _checked(_scope, _new_checked);
      },
  ),
  _checked = _$.state(2, (_scope, checked) => {
    _$.controllable_input_checked(_scope, 0, checked, _checkedChange(_scope)),
      _$.data(_scope[1], String(checked));
  });
_$.effect("c", (_scope) => _$.controllable_input_checked_effect(_scope, 0)),
  init();
