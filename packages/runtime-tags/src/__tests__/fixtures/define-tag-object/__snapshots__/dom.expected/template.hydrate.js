// size: 200 (min) 144 (brotli)
const $myObj = _$.value(4, ($scope, myObj) =>
    _$.data($scope[0], JSON.stringify(myObj)),
  ),
  $x_effect = _$.effect("a0", ($scope, { 3: x }) =>
    _$.on($scope[1], "click", function () {
      $x($scope, x + 1);
    }),
  ),
  $x = _$.state(3, ($scope, x) => {
    _$.data($scope[2], x),
      $myObj($scope, { foo: 1, bar: x + 1 }),
      $x_effect($scope);
  });
init();
