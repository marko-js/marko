// size: 436 (min) 274 (brotli)
const $dynamicTag = _$.dynamicTag(2),
  $expr_input_content_input_name_x = _$.intersection(
    8,
    ($scope) => {
      const { 5: input_content, 6: input_name, 7: x } = $scope;
      $dynamicTag($scope, input_content, () => ({
        count: x,
        name: input_name,
      }));
    },
    2,
  ),
  $x_effect = _$.effect("a0", ($scope, { 7: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(7, ($scope, x) => {
    (_$.data($scope[1], x),
      $expr_input_content_input_name_x($scope),
      $x_effect($scope));
  }),
  $name$customtag$content = _$.value(5, ($scope, name) =>
    _$.data($scope[0], name),
  ),
  $count$customtag$content = _$.value(4, ($scope, count) =>
    _$.data($scope[1], count),
  ),
  $params2$customtag$content = _$.value(2, ($scope, $params2) =>
    $temp$customtag$content($scope, $params2?.[0]),
  ),
  $temp$customtag$content = _$.value(3, ($scope, $temp) => {
    ($count$customtag$content($scope, $temp.count),
      $name$customtag$content($scope, $temp.name));
  });
(_$.registerContent(
  "b0",
  "<div>Count (<!>): <!></div>",
  "Db%c%",
  0,
  $params2$customtag$content,
),
  init());
