// size: 685 (min) 276 (brotli)
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
    ($Once_content__value($scope[0], $onClickOnce($scope)),
      _._text($scope[3], $scope[8]));
  }),
  $clickTwiceCount = _._let(10, ($scope) => {
    ($Twice_content__value($scope[4], $onClickTwice($scope)),
      _._text($scope[7], $scope[10]));
  }),
  $onClickOnce2__script = _._script("a4", ($scope) =>
    _._on($scope[2], "click", $scope[9]),
  );
_._var_resume("a5", _._const(9, $onClickOnce2__script));
const $onClickTwice2__script = _._script("a6", ($scope) =>
  _._on($scope[6], "click", $scope[11]),
);
function $_return2($scope) {
  return function () {
    $scope[3] && ($Twice_content__call($scope, $scope[3] - 1), $scope[2]());
  };
}
function $_return($scope) {
  return function () {
    $scope[3] && ($Once_content__call($scope, $scope[3] - 1), $scope[2]());
  };
}
function $onClickOnce($scope) {
  return function () {
    $clickOnceCount($scope, $scope[8] + 1);
  };
}
function $onClickTwice($scope) {
  return function () {
    $clickTwiceCount($scope, $scope[10] + 1);
  };
}
(_._var_resume("a7", _._const(11, $onClickTwice2__script)),
  _._resume("a2", $_return2),
  _._resume("a0", $_return),
  _._resume("a1", $onClickOnce),
  _._resume("a3", $onClickTwice),
  init());
