// size: 417 (min) 255 (brotli)
const $dynamicTag = _._dynamic_tag(2),
  $input_content__OR__input_name__OR__x = _._or(
    8,
    ($scope) =>
      $dynamicTag($scope, $scope[5], () => ({
        count: $scope[7],
        name: $scope[6],
      })),
    2,
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[7] + 1);
    }),
  ),
  $x = _._let(7, ($scope) => {
    (_._text($scope[1], $scope[7]),
      $input_content__OR__input_name__OR__x($scope),
      $x__script($scope));
  }),
  $customtag_content__name = _._const(5, ($scope) =>
    _._text($scope[0], $scope[5]),
  ),
  $customtag_content__count = _._const(4, ($scope) =>
    _._text($scope[1], $scope[4]),
  ),
  $customtag_content__$params = _._const(2, ($scope) =>
    $customtag_content__$temp($scope, $scope[2]?.[0]),
  ),
  $customtag_content__$temp = _._const(3, ($scope) => {
    ($customtag_content__count($scope, $scope[3].count),
      $customtag_content__name($scope, $scope[3].name));
  });
(_._content_resume(
  "b0",
  "<div>Count (<!>): <!></div>",
  "Db%c%l",
  0,
  $customtag_content__$params,
),
  init());
