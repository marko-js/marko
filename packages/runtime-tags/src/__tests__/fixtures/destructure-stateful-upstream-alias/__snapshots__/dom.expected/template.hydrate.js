// size: 417 (min) 244 (brotli)
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
  ($list($scope, store.list), $clear($scope, store.clear));
});
const $for = _._for_of(3, "<li> </li>", "D l", 0, $for_content__$params),
  $list = ($scope, list) => $for($scope, [list]),
  $clear__script = _._script("b1", ($scope) =>
    _._on($scope.c, "click", $scope.g),
  ),
  $clear = _._const(6, $clear__script);
init();
