// size: 238 (min) 139 (brotli)
_._enable_catch();
const $catch_content__err = ($scope, err) =>
  (($scope, err_message) => _._text($scope.a, err_message))(
    $scope,
    err?.message,
  );
(_._content_resume("a0", " ", " b", 0, ($scope, $params2) =>
  $catch_content__err($scope, $params2[0]),
),
  _._script(
    "a1",
    ($scope) => ($scope._.a.textContent = "This shouldn't happen"),
  ),
  _._script("a2", ($scope) => ($scope.c.textContent = "This is good")),
  init());
