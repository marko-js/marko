// size: 857 (min) 259 (brotli)
const multiply = (multiplier, n) => resolveAfter(multiplier * n, n),
  $await_content5__result = _._const(2, ($scope, result) =>
    _._text($scope[0], result),
  ),
  $await_content5__$params = _._const(1, ($scope, $params6) =>
    $await_content5__result($scope, $params6[0]),
  ),
  $await_content5 = _._content_branch(" ", " b", 0, $await_content5__$params),
  $await_content4__result = _._const(2, ($scope, result) =>
    _._text($scope[0], result),
  ),
  $await_content4__$params = _._const(1, ($scope, $params5) =>
    $await_content4__result($scope, $params5[0]),
  ),
  $await_content4 = _._content_branch(" ", " b", 0, $await_content4__$params),
  $await_content3__result = _._const(2, ($scope, result) =>
    _._text($scope[0], result),
  ),
  $await_content3__$params = _._const(1, ($scope, $params4) =>
    $await_content3__result($scope, $params4[0]),
  ),
  $await_content3 = _._content_branch(" ", " b", 0, $await_content3__$params),
  $await_content2__result = _._const(2, ($scope, result) =>
    _._text($scope[0], result),
  ),
  $await_content2__$params = _._const(1, ($scope, $params3) =>
    $await_content2__result($scope, $params3[0]),
  ),
  $await_content2 = _._content_branch(" ", " b", 0, $await_content2__$params),
  $await_content__result = _._const(2, ($scope, result) =>
    _._text($scope[0], result),
  ),
  $await_content__$params = _._const(1, ($scope, $params2) =>
    $await_content__result($scope, $params2[0]),
  ),
  $await_content = _._content_branch(" ", " b", 0, $await_content__$params),
  $await = _._await(2, $await_content),
  $await2 = _._await(4, $await_content2),
  $await3 = _._await(6, $await_content3),
  $await4 = _._await(8, $await_content4),
  $await5 = _._await(10, $await_content5),
  $n__script = _._script("a0", ($scope, { 11: n }) =>
    _._on($scope[0], "click", function () {
      $n($scope, ++n);
    }),
  ),
  $n = _._let(11, ($scope, n) => {
    (_._text($scope[1], n),
      _._text($scope[3], n),
      _._text($scope[5], n),
      _._text($scope[7], n),
      _._text($scope[9], n),
      $await($scope, multiply(1, n)),
      $await2($scope, multiply(2, n)),
      $await3($scope, multiply(3, n)),
      $await4($scope, multiply(4, n)),
      $await5($scope, multiply(5, n)),
      $n__script($scope));
  });
init();
