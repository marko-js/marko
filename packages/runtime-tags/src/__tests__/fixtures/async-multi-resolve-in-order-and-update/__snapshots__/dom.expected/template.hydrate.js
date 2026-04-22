// size: 599 (min) 214 (brotli)
const multiply = (multiplier, n) => resolveAfter(multiplier * n),
  $await_content5__result = ($scope, result) => _._text($scope.a, result),
  $await_content5__$params = ($scope, $params6) =>
    $await_content5__result($scope, $params6[0]),
  $await_content4__result = ($scope, result) => _._text($scope.a, result),
  $await_content4__$params = ($scope, $params5) =>
    $await_content4__result($scope, $params5[0]),
  $await_content3__result = ($scope, result) => _._text($scope.a, result),
  $await_content3__$params = ($scope, $params4) =>
    $await_content3__result($scope, $params4[0]),
  $await_content2__result = ($scope, result) => _._text($scope.a, result),
  $await_content2__$params = ($scope, $params3) =>
    $await_content2__result($scope, $params3[0]),
  $await_content__result = ($scope, result) => _._text($scope.a, result),
  $await_promise = _._await_promise(2, ($scope, $params2) =>
    $await_content__result($scope, $params2[0]),
  ),
  $await_promise2 = _._await_promise(4, $await_content2__$params),
  $await_promise3 = _._await_promise(6, $await_content3__$params),
  $await_promise4 = _._await_promise(8, $await_content4__$params),
  $await_promise5 = _._await_promise(10, $await_content5__$params),
  $n__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $n($scope, $scope.l + 1);
    }),
  ),
  $n = _._let(11, ($scope) => {
    (_._text($scope.b, $scope.l),
      _._text($scope.d, $scope.l),
      _._text($scope.f, $scope.l),
      _._text($scope.h, $scope.l),
      _._text($scope.j, $scope.l),
      $await_promise($scope, multiply(1, $scope.l)),
      $await_promise2($scope, multiply(2, $scope.l)),
      $await_promise3($scope, multiply(3, $scope.l)),
      $await_promise4($scope, multiply(4, $scope.l)),
      $await_promise5($scope, multiply(5, $scope.l)),
      $n__script($scope));
  });
init();
