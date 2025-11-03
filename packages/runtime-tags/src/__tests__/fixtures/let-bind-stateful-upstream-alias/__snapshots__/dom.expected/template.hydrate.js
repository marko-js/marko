// size: 580 (min) 313 (brotli)
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
    ($store_list($scope, $scope[4]?.list),
      $store_listChange($scope, $scope[4]?.listChange),
      $store_clear($scope, $scope[4]?.clear));
  }),
);
const $for = _._for_of(3, $for_content),
  $list = _._let(9, ($scope) => $for($scope, [$scope[9]])),
  $store_list__OR__store_listChange = _._or(
    7,
    ($scope) => $list($scope, $scope[5], $scope[6]),
    1,
    1,
  ),
  $store_list = _._const(5, $store_list__OR__store_listChange),
  $store_listChange = _._const(6, $store_list__OR__store_listChange),
  $store_clear__script = _._script("b1", ($scope) =>
    _._on($scope[2], "click", $scope[8]),
  ),
  $store_clear = _._const(8, $store_clear__script);
init();
