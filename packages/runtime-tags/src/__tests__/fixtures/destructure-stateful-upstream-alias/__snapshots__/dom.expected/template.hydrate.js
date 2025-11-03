// size: 493 (min) 267 (brotli)
const $list$1 = _._let(3, ($scope) =>
  _._return($scope, {
    list: $scope[3],
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
const $for_content__item = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__item($scope, $scope[1][0]),
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
    ($list($scope, $scope[4].list), $clear($scope, $scope[4].clear));
  }),
);
const $for = _._for_of(3, $for_content),
  $list = _._const(5, ($scope) => $for($scope, [$scope[5]])),
  $clear__script = _._script("b1", ($scope) =>
    _._on($scope[2], "click", $scope[6]),
  ),
  $clear = _._const(6, $clear__script);
init();
