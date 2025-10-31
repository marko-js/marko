// size: 163 (min) 120 (brotli)
_._enable_catch();
const $catch_content__error_message = _._const(3, ($scope) =>
    _._text($scope[0], $scope[3]),
  ),
  $catch_content__$params = _._const(1, ($scope) =>
    $catch_content__error($scope, $scope[1][0]),
  ),
  $catch_content__error = _._const(2, ($scope) =>
    $catch_content__error_message($scope, $scope[2]?.message),
  );
_._content_resume("a0", " ", " b", 0, $catch_content__$params);
