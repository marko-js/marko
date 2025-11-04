// size: 664 (min) 283 (brotli)
const $Twice_content__value__OR__call = _._or(4, ($scope) =>
    _._return($scope, $_return2($scope)),
  ),
  $Twice_content__call = _._let(3, $Twice_content__value__OR__call),
  $Twice_content__value = _._const(2, $Twice_content__value__OR__call),
  $Once_content__value__OR__call = _._or(4, ($scope) =>
    _._return($scope, $_return($scope)),
  ),
  $Once_content__call = _._let(3, $Once_content__value__OR__call),
  $Once_content__value = _._const(2, $Once_content__value__OR__call),
  $clickOnceCount = _._let(8, ($scope) => {
    ($Once_content__value($scope.a, $onClickOnce($scope)),
      _._text($scope.d, $scope.i));
  }),
  $clickTwiceCount = _._let(10, ($scope) => {
    ($Twice_content__value($scope.e, $onClickTwice($scope)),
      _._text($scope.h, $scope.k));
  }),
  $onClickOnce2__script = _._script("a4", ($scope) =>
    _._on($scope.c, "click", $scope.j),
  );
_._var_resume("a5", _._const(9, $onClickOnce2__script));
const $onClickTwice2__script = _._script("a6", ($scope) =>
  _._on($scope.g, "click", $scope.l),
);
function $_return2($scope) {
  return function () {
    $scope.d && ($Twice_content__call($scope, $scope.d - 1), $scope.c());
  };
}
function $_return($scope) {
  return function () {
    $scope.d && ($Once_content__call($scope, $scope.d - 1), $scope.c());
  };
}
function $onClickOnce($scope) {
  return function () {
    $clickOnceCount($scope, $scope.i + 1);
  };
}
function $onClickTwice($scope) {
  return function () {
    $clickTwiceCount($scope, $scope.k + 1);
  };
}
(_._var_resume("a7", _._const(11, $onClickTwice2__script)),
  _._resume("a2", $_return2),
  _._resume("a0", $_return),
  _._resume("a1", $onClickOnce),
  _._resume("a3", $onClickTwice),
  init());
