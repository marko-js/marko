// size: 403 (min) 239 (brotli)
const $dynamicTag = _._dynamic_tag(2),
  $input_content__OR__input_name__OR__x = _._or(
    8,
    ($scope) =>
      $dynamicTag($scope, $scope.f, () => ({
        count: $scope.h,
        name: $scope.g,
      })),
    2,
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.h + 1);
    }),
  ),
  $x = _._let(7, ($scope) => {
    (_._text($scope.b, $scope.h),
      $input_content__OR__input_name__OR__x($scope),
      $x__script($scope));
  }),
  $customtag_content__name = _._const(5, ($scope) =>
    _._text($scope.a, $scope.f),
  ),
  $customtag_content__count = _._const(4, ($scope) =>
    _._text($scope.b, $scope.e),
  ),
  $customtag_content__$params = _._const(2, ($scope) =>
    $customtag_content__$temp($scope, $scope.c?.[0]),
  ),
  $customtag_content__$temp = _._const(3, ($scope) => {
    ($customtag_content__count($scope, $scope.d.count),
      $customtag_content__name($scope, $scope.d.name));
  });
(_._content_resume(
  "b0",
  "<div>Count (<!>): <!></div>",
  "Db%c%l",
  0,
  $customtag_content__$params,
),
  init());
