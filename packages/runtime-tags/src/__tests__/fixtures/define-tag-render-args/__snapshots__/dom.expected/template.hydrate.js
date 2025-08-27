// size: 442 (min) 250 (brotli)
const $a$define$content = _$.value(4, ($scope, a) => _$.data($scope[0], a)),
  $b$define$content = _$.value(5, ($scope, b) => _$.data($scope[1], b)),
  $c$define$content = _$.value(6, ($scope, c) => _$.data($scope[2], c)),
  $params2$define$content = _$.value(3, ($scope, $params2) => {
    ($a$define$content($scope, $params2[0]),
      $b$define$content($scope, $params2[1]),
      $c$define$content($scope, $params2[2]));
  });
_$.registerContent(
  "a0",
  "<div><!>|<!>|<!></div>",
  "D%c%c%l",
  0,
  $params2$define$content,
);
const $dynamicTag = _$.dynamicTag(0, 0, 0, 1),
  $expr_x_MyTag = _$.intersection(5, ($scope) => {
    const { 3: x, 4: MyTag } = $scope;
    $dynamicTag($scope, MyTag, () => [1, "Hello", x]);
  }),
  $x_effect = _$.effect("a1", ($scope, { 3: x }) =>
    _$.on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(3, ($scope, x) => {
    (_$.data($scope[2], x), $expr_x_MyTag($scope), $x_effect($scope));
  });
init();
