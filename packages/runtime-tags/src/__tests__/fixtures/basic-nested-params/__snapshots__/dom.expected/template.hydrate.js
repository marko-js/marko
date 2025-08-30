// size: 595 (min) 322 (brotli)
const $dynamicTag = _$.dynamicTag(0, 0, 0, 1),
  $expr_content_value = _$.intersection(5, ($scope) => {
    let { 3: content, 4: value } = $scope;
    $dynamicTag($scope, content, () => [value]);
  }),
  $content = _$.value(3, $expr_content_value),
  $value = _$.value(4, $expr_content_value),
  $outer$child$content = _$.dynamicClosureRead(2, ($scope, outer) =>
    _$.data($scope[0], outer),
  ),
  $inner$child$content = _$.value(3, ($scope, inner) =>
    _$.data($scope[1], inner),
  ),
  $setup$child$content2 = $outer$child$content,
  $params3$child$content = _$.value(2, ($scope, $params3) =>
    $inner$child$content($scope, $params3[0]),
  ),
  $child_content2 = _$.registerContent(
    "b0",
    "<div><!>.<!></div>",
    "D%c%l",
    $setup$child$content2,
    $params3$child$content,
  ),
  $y$child$content = _$.dynamicClosureRead(3, ($scope, y) =>
    $value($scope[0], y),
  ),
  $params2$child$content = _$.value(1, ($scope, $params2) =>
    $outer$child$content2($scope, $params2[0]),
  ),
  $outer$child$content2_closure = _$.dynamicClosure($outer$child$content),
  $outer$child$content2 = _$.value(2, $outer$child$content2_closure);
_$.registerContent(
  "b1",
  "<div><!></div>",
  "/D%l&",
  ($scope) => {
    ($scope[0],
      $content($scope[0], $child_content2($scope)),
      $y$child$content($scope));
  },
  $params2$child$content,
);
const $x_effect = _$.effect("b2", ($scope, { 2: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    ($value($scope[1], x), $x_effect($scope));
  });
init();
