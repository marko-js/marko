// size: 878 (min) 262 (brotli)
const multiply = (multiplier, n) => resolveAfter(multiplier * n, n),
  $await_content5__result = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $await_content5__$params = _._const(1, ($scope) =>
    $await_content5__result($scope, $scope[1][0]),
  ),
  $await_content5 = _._content_branch(" ", " b", 0, $await_content5__$params),
  $await_content4__result = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $await_content4__$params = _._const(1, ($scope) =>
    $await_content4__result($scope, $scope[1][0]),
  ),
  $await_content4 = _._content_branch(" ", " b", 0, $await_content4__$params),
  $await_content3__result = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $await_content3__$params = _._const(1, ($scope) =>
    $await_content3__result($scope, $scope[1][0]),
  ),
  $await_content3 = _._content_branch(" ", " b", 0, $await_content3__$params),
  $await_content2__result = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $await_content2__$params = _._const(1, ($scope) =>
    $await_content2__result($scope, $scope[1][0]),
  ),
  $await_content2 = _._content_branch(" ", " b", 0, $await_content2__$params),
  $await_content__result = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $await_content__$params = _._const(1, ($scope) =>
    $await_content__result($scope, $scope[1][0]),
  ),
  $await_content = _._content_branch(" ", " b", 0, $await_content__$params),
  $await = _._await(2, $await_content),
  $await2 = _._await(4, $await_content2),
  $await3 = _._await(6, $await_content3),
  $await4 = _._await(8, $await_content4),
  $await5 = _._await(10, $await_content5),
  $n__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $n($scope, $scope[11] + 1);
    }),
  ),
  $n = _._let(11, ($scope) => {
    (_._text($scope[1], $scope[11]),
      _._text($scope[3], $scope[11]),
      _._text($scope[5], $scope[11]),
      _._text($scope[7], $scope[11]),
      _._text($scope[9], $scope[11]),
      $await($scope, multiply(1, $scope[11])),
      $await2($scope, multiply(2, $scope[11])),
      $await3($scope, multiply(3, $scope[11])),
      $await4($scope, multiply(4, $scope[11])),
      $await5($scope, multiply(5, $scope[11])),
      $n__script($scope));
  });
init();
