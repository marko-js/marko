// size: 169 (min) 115 (brotli)
const $MyTag_content__number = _._const(3, ($scope, number) =>
    _._text($scope[0], number),
  ),
  $x__script = _._script("a0", ($scope, { 3: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(3, ($scope, x) => {
    ($MyTag_content__number($scope[0], x),
      _._text($scope[2], x),
      $x__script($scope));
  });
init();
