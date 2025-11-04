// size: 274 (min) 161 (brotli)
_._enable_catch();
const $catch_content__err_message = _._const(3, ($scope) =>
    _._text($scope.a, $scope.d),
  ),
  $catch_content__$params = _._const(1, ($scope) =>
    $catch_content__err($scope, $scope.b[0]),
  ),
  $catch_content__err = _._const(2, ($scope) =>
    $catch_content__err_message($scope, $scope.c?.message),
  );
(_._content_resume("a0", " ", " b", 0, $catch_content__$params),
  _._script(
    "a1",
    ($scope) => ($scope._.a.textContent = "This shouldn't happen"),
  ),
  _._script("a2", ($scope) => ($scope.c.textContent = "This is good")),
  init());
