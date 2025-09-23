// size: 1012 (min) 368 (brotli)
const $define_content2__value__OR__call = _._or(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _._return($scope, $_return2($scope));
  }),
  $define_content2__call = _._let(3, $define_content2__value__OR__call),
  $define_content2__setup = _._child_setup(($scope) =>
    $define_content2__call($scope, 2),
  ),
  $define_content2__value = _._const(2, $define_content2__value__OR__call),
  $define_content2__$params = _._const(0, ($scope, $params3) =>
    $define_content2__$temp($scope, $params3?.[0]),
  ),
  $define_content2__$temp = _._const(1, ($scope, $temp2) =>
    $define_content2__value($scope, $temp2.value),
  );
_._content_resume(
  "a4",
  0,
  0,
  $define_content2__setup,
  $define_content2__$params,
);
const $define_content__value__OR__call = _._or(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _._return($scope, $_return($scope));
  }),
  $define_content__call = _._let(3, $define_content__value__OR__call),
  $define_content__setup = _._child_setup(($scope) =>
    $define_content__call($scope, 1),
  ),
  $define_content__value = _._const(2, $define_content__value__OR__call),
  $define_content__$params = _._const(0, ($scope, $params2) =>
    $define_content__$temp($scope, $params2?.[0]),
  ),
  $define_content__$temp = _._const(1, ($scope, $temp) =>
    $define_content__value($scope, $temp.value),
  );
_._content_resume("a5", 0, 0, $define_content__setup, $define_content__$params);
const $clickOnceCount = _._let(8, ($scope, clickOnceCount) => {
    ($define_content__value($scope[0], $onClickOnce($scope)),
      _._text($scope[3], clickOnceCount));
  }),
  $clickTwiceCount = _._let(10, ($scope, clickTwiceCount) => {
    ($define_content2__value($scope[4], $onClickTwice($scope)),
      _._text($scope[7], clickTwiceCount));
  }),
  $onClickOnce2__script = _._script("a6", ($scope, { 9: onClickOnce }) =>
    _._on($scope[2], "click", onClickOnce),
  );
_._var_resume("a7", _._const(9, $onClickOnce2__script));
const $onClickTwice2__script = _._script("a8", ($scope, { 11: onClickTwice }) =>
  _._on($scope[6], "click", onClickTwice),
);
function $_return2($scope, { 2: value, 3: call } = $scope) {
  return function () {
    call && ($define_content2__call($scope, --call), value());
  };
}
function $_return($scope, { 2: value, 3: call } = $scope) {
  return function () {
    call && ($define_content__call($scope, --call), value());
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
(_._var_resume("a9", _._const(11, $onClickTwice2__script)),
  _._resume("a2", $_return2),
  _._resume("a0", $_return),
  _._resume("a1", $onClickOnce),
  _._resume("a3", $onClickTwice),
  init());
