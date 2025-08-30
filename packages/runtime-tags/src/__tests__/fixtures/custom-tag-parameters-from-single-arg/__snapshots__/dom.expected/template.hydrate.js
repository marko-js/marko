// size: 328 (min) 227 (brotli)
const $dynamicTag = _$.dynamicTag(2, 0, 0, 1),
  $expr_input_content_x = _$.intersection(7, ($scope) => {
    let { 5: input_content, 6: x } = $scope;
    $dynamicTag($scope, input_content, () => [x]);
  }),
  $x_effect = _$.effect("a0", ($scope, { 6: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(6, ($scope, x) => {
    (_$.data($scope[1], x), $expr_input_content_x($scope), $x_effect($scope));
  }),
  $count$customtag$content = _$.value(2, ($scope, count) =>
    _$.data($scope[0], count),
  ),
  $params2$customtag$content = _$.value(1, ($scope, $params2) =>
    $count$customtag$content($scope, $params2[0]),
  );
(_$.registerContent(
  "b0",
  "<div>Count: <!></div>",
  "Db%l",
  0,
  $params2$customtag$content,
),
  init());
