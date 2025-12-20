// size: 392 (min) 243 (brotli)
const $x__OR__y__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      ($x($scope, $scope.h + 1), $y($scope, $scope.i + 1));
    }),
  ),
  $x__OR__y = _._or(9, $x__OR__y__script),
  $dynamicTag = _._dynamic_tag(3, 0, 0, 1),
  $input_content__OR__x__OR__y = _._or(
    10,
    ($scope) => $dynamicTag($scope, $scope.g, () => [$scope.h, $scope.i]),
    2,
  ),
  $x = _._let(7, ($scope) => {
    (_._text($scope.b, $scope.h),
      $x__OR__y($scope),
      $input_content__OR__x__OR__y($scope));
  }),
  $y = _._let(8, ($scope) => {
    (_._text($scope.c, $scope.i),
      $x__OR__y($scope),
      $input_content__OR__x__OR__y($scope));
  });
(_._content_resume(
  "b0",
  "<div>Counts: <!>,<!></div>",
  "Db%c%l",
  0,
  ($scope, $params2) => {
    ((($scope, count) => {
      _._text($scope.a, count);
    })($scope, $params2[0]),
      (($scope, count2) => {
        _._text($scope.b, count2);
      })($scope, $params2[1]));
  },
),
  init());
