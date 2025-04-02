// size: 165 (min) 103 (brotli)
_$.enableCatch();
const _err_message$catch_content = _$.value(3, (_scope, err_message) =>
    _$.data(_scope[0], err_message),
  ),
  _err$catch_content = _$.value(2, (_scope, err) =>
    _err_message$catch_content(_scope, err?.message),
  ),
  _params2$catch_content = _$.value(1, (_scope, _params2) =>
    _err$catch_content(_scope, _params2[0]),
  );
_$.registerContent("a0", " ", " ", 0, _params2$catch_content);
