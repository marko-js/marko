// size: 250 (min) 157 (brotli)
(_._enable_catch(), _._content_resume("a0", "loading...", "b"));
const $await_content__value = _._closure_get(
    3,
    ($scope) => _._text($scope.a, $scope._._.d),
    ($scope) => $scope._._,
    "a1",
  ),
  $value__closure = _._closure($await_content__value),
  $value__script = _._script("a2", ($scope) =>
    _._on($scope.a, "click", function () {
      $value($scope, $scope.d + 1);
    }),
  ),
  $value = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $value__closure($scope),
      $value__script($scope));
  });
init();
