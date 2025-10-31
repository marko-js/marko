// size: 444 (min) 260 (brotli)
const $x__OR__y__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      ($x($scope, $scope[7] + 1), $y($scope, $scope[8] + 1));
    }),
  ),
  $x__OR__y = _._or(9, $x__OR__y__script),
  $dynamicTag = _._dynamic_tag(3, 0, 0, 1),
  $input_content__OR__x__OR__y = _._or(
    10,
    ($scope) => $dynamicTag($scope, $scope[6], () => [$scope[7], $scope[8]]),
    2,
  ),
  $x = _._let(7, ($scope) => {
    (_._text($scope[1], $scope[7]),
      $x__OR__y($scope),
      $input_content__OR__x__OR__y($scope));
  }),
  $y = _._let(8, ($scope) => {
    (_._text($scope[2], $scope[8]),
      $x__OR__y($scope),
      $input_content__OR__x__OR__y($scope));
  }),
  $customtag_content__count = _._const(3, ($scope) =>
    _._text($scope[0], $scope[3]),
  ),
  $customtag_content__count2 = _._const(4, ($scope) =>
    _._text($scope[1], $scope[4]),
  ),
  $customtag_content__$params = _._const(2, ($scope) => {
    ($customtag_content__count($scope, $scope[2][0]),
      $customtag_content__count2($scope, $scope[2][1]));
  });
(_._content_resume(
  "b0",
  "<div>Counts: <!>,<!></div>",
  "Db%c%l",
  0,
  $customtag_content__$params,
),
  init());
