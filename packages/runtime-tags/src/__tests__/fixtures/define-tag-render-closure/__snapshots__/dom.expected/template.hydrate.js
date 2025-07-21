// size: 195 (min) 129 (brotli)
const $x$define$content = _$.dynamicClosureRead(3, ($scope, x) =>
    _$.data($scope[0], x),
  ),
  $x_closure = _$.dynamicClosure($x$define$content),
  $x_effect = _$.effect("a1", ($scope, { 3: x }) =>
    _$.on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(3, ($scope, x) => {
    (_$.data($scope[2], x), $x_closure($scope), $x_effect($scope));
  });
init();
