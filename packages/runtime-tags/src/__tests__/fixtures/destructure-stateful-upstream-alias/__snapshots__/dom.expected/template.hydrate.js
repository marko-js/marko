// size: 484 (min) 261 (brotli)
const $list$1 = _._let(3, ($scope) =>
  _._return($scope, {
    list: $scope.d,
    listChange: $_return($scope),
    clear: $_return2($scope),
  }),
);
function $_return2($scope) {
  return function () {
    $list$1($scope, []);
  };
}
function $_return($scope) {
  return function (v) {
    $list$1($scope, v);
  };
}
(_._resume("a1", $_return2), _._resume("a0", $_return));
const $for_content__item = _._const(2, ($scope) => _._text($scope.a, $scope.c)),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__item($scope, $scope.b[0]),
  ),
  $for_content = _._content_branch(
    "<li> </li>",
    "D l",
    0,
    $for_content__$params,
  );
_._var_resume(
  "b0",
  _._const(4, ($scope) => {
    ($list($scope, $scope.e.list), $clear($scope, $scope.e.clear));
  }),
);
const $for = _._for_of(3, $for_content),
  $list = _._const(5, ($scope) => $for($scope, [$scope.f])),
  $clear__script = _._script("b1", ($scope) =>
    _._on($scope.c, "click", $scope.g),
  ),
  $clear = _._const(6, $clear__script);
init();
