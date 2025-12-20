// size: 509 (min) 297 (brotli)
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
const $for_content__$params = ($scope, $params2) =>
  (($scope, item) => _._text($scope.a, item))($scope, $params2[0]);
_._var_resume("b0", ($scope, store) => {
  ($store_list($scope, store?.list),
    $store_listChange($scope, store?.listChange),
    $store_clear($scope, store?.clear));
});
const $for = _._for_of(3, "<li> </li>", "D l", 0, $for_content__$params),
  $list = _._let(9, ($scope) => $for($scope, [$scope.j])),
  $store_list__OR__store_listChange = _._or(
    7,
    ($scope) => $list($scope, $scope.f, $scope.g),
    1,
    1,
  ),
  $store_list = _._const(5, $store_list__OR__store_listChange),
  $store_listChange = _._const(6, $store_list__OR__store_listChange),
  $store_clear__script = _._script("b1", ($scope) =>
    _._on($scope.c, "click", $scope.i),
  ),
  $store_clear = _._const(8, $store_clear__script);
init();
