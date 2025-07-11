// size: 159 (min) 105 (brotli)
_$.enableCatch();
const $error_message$catch$content = _$.value(3, ($scope, error_message) =>
    _$.data($scope[0], error_message),
  ),
  $params2$catch$content = _$.value(1, ($scope, $params2) =>
    $error$catch$content($scope, $params2[0]),
  ),
  $error$catch$content = _$.value(2, ($scope, error) =>
    $error_message$catch$content($scope, error?.message),
  );
_$.registerContent("a0", " ", " ", 0, $params2$catch$content);
