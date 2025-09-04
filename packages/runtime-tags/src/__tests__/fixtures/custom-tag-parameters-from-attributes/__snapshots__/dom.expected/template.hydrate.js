// size: 436 (min) 274 (brotli)
const $dynamicTag = _._dynamic_tag(2),
  $input_content__OR__input_name__OR__x = _._or(
    8,
    ($scope) => {
      let { 5: input_content, 6: input_name, 7: x } = $scope;
      $dynamicTag($scope, input_content, () => ({
        count: x,
        name: input_name,
      }));
    },
    2,
  ),
  $x__script = _._script("a0", ($scope, { 7: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(7, ($scope, x) => {
    (_._text($scope[1], x),
      $input_content__OR__input_name__OR__x($scope),
      $x__script($scope));
  }),
  $customtag_content__name = _._const(5, ($scope, name) =>
    _._text($scope[0], name),
  ),
  $customtag_content__count = _._const(4, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $customtag_content__$params = _._const(2, ($scope, $params2) =>
    $customtag_content__$temp($scope, $params2?.[0]),
  ),
  $customtag_content__$temp = _._const(3, ($scope, $temp) => {
    ($customtag_content__count($scope, $temp.count),
      $customtag_content__name($scope, $temp.name));
  });
(_._content_resume(
  "b0",
  "<div>Count (<!>): <!></div>",
  "Db%c%l",
  0,
  $customtag_content__$params,
),
  init());
