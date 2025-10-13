// size: 746 (min) 296 (brotli)
const $Twice_content__value__OR__call = _._or(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _._return($scope, $_return2($scope));
  }),
  $Twice_content__call = _._let(3, $Twice_content__value__OR__call),
  $Twice_content__value = _._const(2, $Twice_content__value__OR__call),
  $Once_content__value__OR__call = _._or(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _._return($scope, $_return($scope));
  }),
  $Once_content__call = _._let(3, $Once_content__value__OR__call),
  $Once_content__value = _._const(2, $Once_content__value__OR__call),
  $clickOnceCount = _._let(8, ($scope, clickOnceCount) => {
    ($Once_content__value($scope[0], $onClickOnce($scope)),
      _._text($scope[3], clickOnceCount));
  }),
  $clickTwiceCount = _._let(10, ($scope, clickTwiceCount) => {
    ($Twice_content__value($scope[4], $onClickTwice($scope)),
      _._text($scope[7], clickTwiceCount));
  }),
  $onClickOnce2__script = _._script("a4", ($scope, { 9: onClickOnce }) =>
    _._on($scope[2], "click", onClickOnce),
  );
_._var_resume("a5", _._const(9, $onClickOnce2__script));
const $onClickTwice2__script = _._script("a6", ($scope, { 11: onClickTwice }) =>
  _._on($scope[6], "click", onClickTwice),
);
function $_return2($scope, { 2: value, 3: call } = $scope) {
  return function () {
    call && ($Twice_content__call($scope, --call), value());
  };
}
function $_return($scope, { 2: value, 3: call } = $scope) {
  return function () {
    call && ($Once_content__call($scope, --call), value());
  };
}
function $onClickOnce($scope, { 8: clickOnceCount } = $scope) {
  return function () {
    $clickOnceCount($scope, ++clickOnceCount);
  };
}
function $onClickTwice($scope, { 10: clickTwiceCount } = $scope) {
  return function () {
    $clickTwiceCount($scope, ++clickTwiceCount);
  };
}
(_._var_resume("a7", _._const(11, $onClickTwice2__script)),
  _._resume("a2", $_return2),
  _._resume("a0", $_return),
  _._resume("a1", $onClickOnce),
  _._resume("a3", $onClickTwice),
  init());
