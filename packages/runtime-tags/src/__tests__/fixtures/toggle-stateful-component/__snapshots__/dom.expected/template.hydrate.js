// size: 507 (min) 302 (brotli)
const $input_onCount__OR__clickCount__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
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
          throw new Error(
            "This should not have executed since the parent removes this component when the count is greater than 0",
          );
      })(),
      $scope.f),
    ),
      $input_onCount__OR__clickCount($scope));
  });
const $input_onCount = _._const(4, $input_onCount__OR__clickCount),
  $if_content__onCount = _._if_closure(0, 0, ($scope) =>
    $input_onCount($scope.a, $scope._.c),
  ),
  $if_content__setup = ($scope) => {
    ($if_content__onCount._($scope),
      (function ($scope) {
        $clickCount($scope, 0);
      })($scope.a));
  },
  $if = _._if(
    0,
    "<div><button> </button></div>",
    "D/ D l&l",
    $if_content__setup,
  ),
  $show = _._let(1, ($scope) => $if($scope, $scope.b ? 0 : 1));
(_._resume("b0", function ($scope) {
  return function (count) {
    $show($scope, count < 1);
  };
}),
  init());
