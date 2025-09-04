// size: 326 (min) 222 (brotli)
const $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $input_content__OR__x = _._or(7, ($scope) => {
    let { 5: input_content, 6: x } = $scope;
    $dynamicTag($scope, input_content, () => [x]);
  }),
  $x__script = _._script("a0", ($scope, { 6: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(6, ($scope, x) => {
    (_._text($scope[1], x), $input_content__OR__x($scope), $x__script($scope));
  }),
  $customtag_content__count = _._const(2, ($scope, count) =>
    _._text($scope[0], count),
  ),
  $customtag_content__$params = _._const(1, ($scope, $params2) =>
    $customtag_content__count($scope, $params2[0]),
  );
(_._content_resume(
  "b0",
  "<div>Count: <!></div>",
  "Db%l",
  0,
  $customtag_content__$params,
),
  init());
