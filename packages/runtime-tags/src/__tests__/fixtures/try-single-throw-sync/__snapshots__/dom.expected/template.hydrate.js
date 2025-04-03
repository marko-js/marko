// size: 165 (min) 103 (brotli)
_$.enableCatch();
const $err_message$catch$content = _$.value(3, ($scope, err_message) =>
    _$.data($scope[0], err_message),
  ),
  $err$catch$content = _$.value(2, ($scope, err) =>
    $err_message$catch$content($scope, err?.message),
  ),
  $params2$catch$content = _$.value(1, ($scope, $params2) =>
    $err$catch$content($scope, $params2[0]),
  );
_$.registerContent("a0", " ", " ", 0, $params2$catch$content);
