// size: 629 (min) 314 (brotli)
const $expr_content_value = _$.intersection(5, ($scope) => {
    const { 3: content, 4: value } = $scope;
    $dynamicTag($scope, content, () => [value]);
  }),
  $dynamicTag = _$.dynamicTag(0, 0, 0, 1),
  $value = _$.value(4, $expr_content_value),
  $content = _$.value(3, $expr_content_value),
  $inner$child$content = _$.value(3, ($scope, inner) =>
    _$.data($scope[1], inner),
  ),
  $outer$child$content = _$.dynamicClosureRead(2, ($scope, outer) =>
    _$.data($scope[0], outer),
  ),
  $params3$child$content = _$.value(2, ($scope, $params3) =>
    $inner$child$content($scope, $params3[0]),
  ),
  $child_content2 = _$.registerContent(
    "b0",
    "<div><!>.<!></div>",
    "D%c%",
    0,
    $params3$child$content,
    ($scope) => $outer$child$content($scope),
  ),
  $y$child$content = _$.dynamicClosureRead(3, ($scope, y) =>
    $value($scope[0], y),
  ),
  $outer$child$content2_closure = _$.dynamicClosure($outer$child$content),
  $outer$child$content2 = _$.value(2, $outer$child$content2_closure),
  $params2$child$content = _$.value(1, ($scope, $params2) =>
    $outer$child$content2($scope, $params2[0]),
  );
_$.registerContent(
  "b1",
  "<div><!></div>",
  "/D%l&",
  ($scope) => {
    $scope[0], $content($scope[0], $child_content2($scope));
  },
  $params2$child$content,
  ($scope) => $y$child$content($scope),
);
const $x_effect = _$.effect("b2", ($scope, { 2: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, x + 1);
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    $value($scope[1], x), $x_effect($scope);
  });
init();
