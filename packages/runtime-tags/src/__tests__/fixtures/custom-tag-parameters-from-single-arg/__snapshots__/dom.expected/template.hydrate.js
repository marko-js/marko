// size: 307 (min) 207 (brotli)
const $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $input_content__OR__x = _._or(7, ($scope) =>
    $dynamicTag($scope, $scope[5], () => [$scope[6]]),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[6] + 1);
    }),
  ),
  $x = _._let(6, ($scope) => {
    (_._text($scope[1], $scope[6]),
      $input_content__OR__x($scope),
      $x__script($scope));
  }),
  $customtag_content__count = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $customtag_content__$params = _._const(1, ($scope) =>
    $customtag_content__count($scope, $scope[1][0]),
  );
(_._content_resume(
  "b0",
  "<div>Count: <!></div>",
  "Db%l",
  0,
  $customtag_content__$params,
),
  init());
