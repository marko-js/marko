// size: 464 (min) 276 (brotli)
const $x__OR__y__script = _._script("a0", ($scope, { 7: x, 8: y }) =>
    _._on($scope[0], "click", function () {
      ($x($scope, ++x), $y($scope, ++y));
    }),
  ),
  $x__OR__y = _._or(9, $x__OR__y__script),
  $dynamicTag = _._dynamic_tag(3, 0, 0, 1),
  $input_content__OR__x__OR__y = _._or(
    10,
    ($scope) => {
      let { 6: input_content, 7: x, 8: y } = $scope;
      $dynamicTag($scope, input_content, () => [x, y]);
    },
    2,
  ),
  $x = _._let(7, ($scope, x) => {
    (_._text($scope[1], x),
      $x__OR__y($scope),
      $input_content__OR__x__OR__y($scope));
  }),
  $y = _._let(8, ($scope, y) => {
    (_._text($scope[2], y),
      $x__OR__y($scope),
      $input_content__OR__x__OR__y($scope));
  }),
  $customtag_content__count = _._const(3, ($scope, count) =>
    _._text($scope[0], count),
  ),
  $customtag_content__count2 = _._const(4, ($scope, count2) =>
    _._text($scope[1], count2),
  ),
  $customtag_content__$params = _._const(2, ($scope, $params2) => {
    ($customtag_content__count($scope, $params2[0]),
      $customtag_content__count2($scope, $params2[1]));
  });
(_._content_resume(
  "b0",
  "<div>Counts: <!>,<!></div>",
  "Db%c%l",
  0,
  $customtag_content__$params,
),
  init());
