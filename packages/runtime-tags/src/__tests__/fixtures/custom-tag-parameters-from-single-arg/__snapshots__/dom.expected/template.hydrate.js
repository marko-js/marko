// size: 298 (min) 204 (brotli)
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
  }),
  $customtag_content__count = _._const(2, ($scope) =>
    _._text($scope.a, $scope.c),
  ),
  $customtag_content__$params = _._const(1, ($scope) =>
    $customtag_content__count($scope, $scope.b[0]),
  );
(_._content_resume(
  "b0",
  "<div>Count: <!></div>",
  "Db%l",
  0,
  $customtag_content__$params,
),
  init());
