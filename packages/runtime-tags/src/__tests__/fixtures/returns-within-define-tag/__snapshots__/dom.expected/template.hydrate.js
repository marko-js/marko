// size: 1186 (min) 426 (brotli)
const $expr_value_call$define$content2 = _$.intersection(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _$.tagVarSignal($scope, $_return2($scope));
  }),
  $call$define$content2 = _$.state(3, $expr_value_call$define$content2),
  $value$define$content2 = _$.value(2, $expr_value_call$define$content2),
  $params3$define$content = _$.value(0, ($scope, $params3) =>
    $temp2$define$content($scope, $params3?.[0]),
  ),
  $temp2$define$content = _$.value(1, ($scope, $temp2) =>
    $value$define$content2($scope, $temp2.value),
  );
_$.registerContent(
  "a4",
  0,
  0,
  ($scope) => {
    $call$define$content2($scope, 2);
  },
  $params3$define$content,
);
const $expr_value_call$define$content = _$.intersection(4, ($scope) => {
    let { 2: value, 3: call } = $scope;
    _$.tagVarSignal($scope, $_return($scope));
  }),
  $call$define$content = _$.state(3, $expr_value_call$define$content),
  $value$define$content = _$.value(2, $expr_value_call$define$content),
  $params2$define$content = _$.value(0, ($scope, $params2) =>
    $temp$define$content($scope, $params2?.[0]),
  ),
  $temp$define$content = _$.value(1, ($scope, $temp) =>
    $value$define$content($scope, $temp.value),
  );
_$.registerContent(
  "a5",
  0,
  0,
  ($scope) => {
    $call$define$content($scope, 1);
  },
  $params2$define$content,
);
const $dynamicTag = _$.dynamicTag(0, 0, () => $onClickOnce2),
  $expr_Once_clickOnceCount = _$.intersection(10, ($scope) => {
    let { 8: Once, 9: clickOnceCount } = $scope;
    $dynamicTag($scope, Once, () => ({ value: $onClickOnce($scope) }));
  }),
  $clickOnceCount = _$.state(9, ($scope, clickOnceCount) => {
    (_$.data($scope[3], clickOnceCount), $expr_Once_clickOnceCount($scope));
  }),
  $dynamicTag2 = _$.dynamicTag(4, 0, () => $onClickTwice2),
  $expr_Twice_clickTwiceCount = _$.intersection(14, ($scope) => {
    let { 12: Twice, 13: clickTwiceCount } = $scope;
    $dynamicTag2($scope, Twice, () => ({ value: $onClickTwice($scope) }));
  }),
  $clickTwiceCount = _$.state(13, ($scope, clickTwiceCount) => {
    (_$.data($scope[7], clickTwiceCount), $expr_Twice_clickTwiceCount($scope));
  }),
  $onClickOnce2_effect = _$.effect("a6", ($scope, { 11: onClickOnce }) =>
    _$.on($scope[2], "click", onClickOnce),
  ),
  $onClickOnce2 = _$.registerBoundSignal(
    "a7",
    _$.value(11, $onClickOnce2_effect),
  ),
  $onClickTwice2_effect = _$.effect("a8", ($scope, { 15: onClickTwice }) =>
    _$.on($scope[6], "click", onClickTwice),
  ),
  $onClickTwice2 = _$.registerBoundSignal(
    "a9",
    _$.value(15, $onClickTwice2_effect),
  );
function $_return2($scope, { 2: value, 3: call } = $scope) {
  return function () {
    call && ($call$define$content2($scope, --call), value());
  };
}
function $_return($scope, { 2: value, 3: call } = $scope) {
  return function () {
    call && ($call$define$content($scope, --call), value());
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
(_$.register("a2", $_return2),
  _$.register("a0", $_return),
  _$.register("a1", $onClickOnce),
  _$.register("a3", $onClickTwice),
  init());
