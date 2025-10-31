// size: 280 (min) 163 (brotli)
_._enable_catch();
const $catch_content__err_message = _._const(3, ($scope) =>
    _._text($scope[0], $scope[3]),
  ),
  $catch_content__$params = _._const(1, ($scope) =>
    $catch_content__err($scope, $scope[1][0]),
  ),
  $catch_content__err = _._const(2, ($scope) =>
    $catch_content__err_message($scope, $scope[2]?.message),
  );
(_._content_resume("a0", " ", " b", 0, $catch_content__$params),
  _._script(
    "a1",
    ($scope) => ($scope._[0].textContent = "This shouldn't happen"),
  ),
  _._script("a2", ($scope) => ($scope[2].textContent = "This is good")),
  init());
