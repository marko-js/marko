// size: 535 (min) 309 (brotli)
const $input_onCount__OR__clickCount__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $scope.e($clickCount($scope, $scope.f + 1));
    }),
  ),
  $input_onCount__OR__clickCount = _._or(
    6,
    $input_onCount__OR__clickCount__script,
  ),
  $clickCount = _._let(5, ($scope) => {
    (_._text(
      $scope.b,
      ((() => {
        if ($scope.f > 0)
          throw Error(
            `This should not have executed since the parent removes this component when the count is greater than 0`,
          );
      })(),
      $scope.f),
    ),
      $input_onCount__OR__clickCount($scope));
  });
function $setup($scope) {
  $clickCount($scope, 0);
}
const $input_onCount = _._const(4, $input_onCount__OR__clickCount),
  $if_content__onCount = _._if_closure(0, 0, ($scope) =>
    $input_onCount($scope.a, $scope._.c),
  ),
  $if = _._if(
    0,
    ((_w0) => `<div>${_w0}</div>`)(`<button> </button>`),
    ((_w0) => `D/${_w0}&l`)(` D l`),
    ($scope) => {
      ($if_content__onCount._($scope), $setup($scope.a));
    },
  ),
  $show = _._let(1, ($scope) => $if($scope, +!$scope.b));
function $onCount($scope) {
  return function (count) {
    $show($scope, count < 1);
  };
}
(_._resume(`b0`, $onCount), init());
