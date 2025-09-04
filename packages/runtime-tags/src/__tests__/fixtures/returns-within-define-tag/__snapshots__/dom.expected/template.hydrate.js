// size: 1134 (min) 411 (brotli)
const $define_content2__value__OR__call = _._or(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _._return($scope, $_return2($scope));
  }),
  $define_content2__call = _._let(3, $define_content2__value__OR__call),
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
  ($scope) => {
    $define_content2__call($scope, 2);
  },
  $define_content2__$params,
);
const $define_content__value__OR__call = _._or(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _._return($scope, $_return($scope));
  }),
  $define_content__call = _._let(3, $define_content__value__OR__call),
  $define_content__value = _._const(2, $define_content__value__OR__call),
  $define_content__$params = _._const(0, ($scope, $params2) =>
    $define_content__$temp($scope, $params2?.[0]),
  ),
  $define_content__$temp = _._const(1, ($scope, $temp) =>
    $define_content__value($scope, $temp.value),
  );
_._content_resume(
  "a5",
  0,
  0,
  ($scope) => {
    $define_content__call($scope, 1);
  },
  $define_content__$params,
);
const $dynamicTag = _._dynamic_tag(0, 0, () => $onClickOnce2),
  $Once__OR__clickOnceCount = _._or(10, ($scope) => {
    let { 8: Once, 9: clickOnceCount } = $scope;
    $dynamicTag($scope, Once, () => ({ value: $onClickOnce($scope) }));
  }),
  $clickOnceCount = _._let(9, ($scope, clickOnceCount) => {
    (_._text($scope[3], clickOnceCount), $Once__OR__clickOnceCount($scope));
  }),
  $dynamicTag2 = _._dynamic_tag(4, 0, () => $onClickTwice2),
  $Twice__OR__clickTwiceCount = _._or(14, ($scope) => {
    let { 12: Twice, 13: clickTwiceCount } = $scope;
    $dynamicTag2($scope, Twice, () => ({ value: $onClickTwice($scope) }));
  }),
  $clickTwiceCount = _._let(13, ($scope, clickTwiceCount) => {
    (_._text($scope[7], clickTwiceCount), $Twice__OR__clickTwiceCount($scope));
  }),
  $onClickOnce2__script = _._script("a6", ($scope, { 11: onClickOnce }) =>
    _._on($scope[2], "click", onClickOnce),
  ),
  $onClickOnce2 = _._var_resume("a7", _._const(11, $onClickOnce2__script)),
  $onClickTwice2__script = _._script("a8", ($scope, { 15: onClickTwice }) =>
    _._on($scope[6], "click", onClickTwice),
  ),
  $onClickTwice2 = _._var_resume("a9", _._const(15, $onClickTwice2__script));
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
function $onClickOnce($scope, { 9: clickOnceCount } = $scope) {
  return function () {
    $clickOnceCount($scope, ++clickOnceCount);
  };
}
function $onClickTwice($scope, { 13: clickTwiceCount } = $scope) {
  return function () {
    $clickTwiceCount($scope, ++clickTwiceCount);
  };
}
(_._resume("a2", $_return2),
  _._resume("a0", $_return),
  _._resume("a1", $onClickOnce),
  _._resume("a3", $onClickTwice),
  init());
