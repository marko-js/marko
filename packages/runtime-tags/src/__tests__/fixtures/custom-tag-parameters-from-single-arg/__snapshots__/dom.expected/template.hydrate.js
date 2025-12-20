// size: 272 (min) 195 (brotli)
const $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $input_content__OR__x = _._or(7, ($scope) =>
    $dynamicTag($scope, $scope.f, () => [$scope.g]),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.g + 1);
    }),
  ),
  $x = _._let(6, ($scope) => {
    (_._text($scope.b, $scope.g),
      $input_content__OR__x($scope),
      $x__script($scope));
  });
(_._content_resume(
  "b0",
  "<div>Count: <!></div>",
  "Db%l",
  0,
  ($scope, $params2) =>
    (($scope, count) => _._text($scope.a, count))($scope, $params2[0]),
),
  init());
