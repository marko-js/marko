// size: 160 (min) 107 (brotli)
_$.enableCatch();
const $err_message$catch$content = _$.value(3, ($scope, err_message) =>
    _$.data($scope[0], err_message),
  ),
  $params2$catch$content = _$.value(1, ($scope, $params2) =>
    $err$catch$content($scope, $params2[0]),
  ),
  $err$catch$content = _$.value(2, ($scope, err) =>
    $err_message$catch$content($scope, err?.message),
  );
_$.registerContent("a0", " ", " b", 0, $params2$catch$content);
