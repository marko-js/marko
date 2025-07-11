// size: 474 (min) 272 (brotli)
const $expr_x_y_effect = _$.effect("a0", ($scope, { 7: x, 8: y }) =>
    _$.on($scope[0], "click", function () {
      ($x($scope, x + 1), $y($scope, y + 1));
    }),
  ),
  $expr_x_y = _$.intersection(9, $expr_x_y_effect),
  $dynamicTag = _$.dynamicTag(3, 0, 0, 1),
  $expr_input_content_x_y = _$.intersection(
    10,
    ($scope) => {
      const { 6: input_content, 7: x, 8: y } = $scope;
      $dynamicTag($scope, input_content, () => [x, y]);
    },
    2,
  ),
  $x = _$.state(7, ($scope, x) => {
    (_$.data($scope[1], x), $expr_x_y($scope), $expr_input_content_x_y($scope));
  }),
  $y = _$.state(8, ($scope, y) => {
    (_$.data($scope[2], y), $expr_x_y($scope), $expr_input_content_x_y($scope));
  }),
  $count$customtag$content = _$.value(3, ($scope, count) =>
    _$.data($scope[0], count),
  ),
  $count2$customtag$content = _$.value(4, ($scope, count2) =>
    _$.data($scope[1], count2),
  ),
  $params2$customtag$content = _$.value(2, ($scope, $params2) => {
    ($count$customtag$content($scope, $params2[0]),
      $count2$customtag$content($scope, $params2[1]));
  });
(_$.registerContent(
  "b0",
  "<div>Counts: <!>,<!></div>",
  "Db%c%",
  0,
  $params2$customtag$content,
),
  init());
