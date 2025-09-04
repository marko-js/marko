// size: 166 (min) 112 (brotli)
_._enable_catch();
const $catch_content__error_message = _._const(3, ($scope, error_message) =>
    _._text($scope[0], error_message),
  ),
  $catch_content__$params = _._const(1, ($scope, $params2) =>
    $catch_content__error($scope, $params2[0]),
  ),
  $catch_content__error = _._const(2, ($scope, error) =>
    $catch_content__error_message($scope, error?.message),
  );
_._content_resume("a0", " ", " b", 0, $catch_content__$params);
