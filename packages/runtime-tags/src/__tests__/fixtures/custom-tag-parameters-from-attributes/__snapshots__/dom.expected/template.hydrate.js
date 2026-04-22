// size: 361 (min) 232 (brotli)
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
  $x__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $x($scope, $scope.h + 1);
    }),
  ),
  $x = _._let(7, ($scope) => {
    (_._text($scope.b, $scope.h),
      $input_content__OR__input_name__OR__x($scope),
      $x__script($scope));
  }),
  $customtag_content__name = ($scope, name) => _._text($scope.a, name),
  $customtag_content__count = ($scope, count) => _._text($scope.b, count),
  $customtag_content__$params = ($scope, $params2) =>
    $customtag_content__$temp($scope, $params2?.[0]),
  $customtag_content__$temp = ($scope, $temp) => {
    ($customtag_content__count($scope, $temp.count),
      $customtag_content__name($scope, $temp.name));
  };
(_._content_resume(
  `b0`,
  `<div>Count (<!>): <!></div>`,
  `Db%c%l`,
  0,
  $customtag_content__$params,
),
  init());
