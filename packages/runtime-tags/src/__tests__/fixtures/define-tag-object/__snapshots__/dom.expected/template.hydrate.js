// size: 196 (min) 146 (brotli)
const $myObj = _._const(4, ($scope, myObj) =>
    _._text($scope[0], JSON.stringify(myObj)),
  ),
  $x__script = _._script("a0", ($scope, { 3: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[2], x),
      $myObj($scope, { foo: 1, bar: x + 1 }),
      $x__script($scope));
  });
init();
