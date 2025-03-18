// size: 165 (min) 103 (brotli)
_$.enableCatch();
const _error_message$catch_content = _$.value(3, (_scope, error_message) =>
    _$.data(_scope[0], error_message),
  ),
  _error$catch_content = _$.value(2, (_scope, error) =>
    _error_message$catch_content(_scope, error?.message),
  ),
  _params_2$catch_content = _$.value(1, (_scope, _params_2) =>
    _error$catch_content(_scope, _params_2[0]),
  );
_$.registerContent("a0", " ", " ", 0, _params_2$catch_content);
