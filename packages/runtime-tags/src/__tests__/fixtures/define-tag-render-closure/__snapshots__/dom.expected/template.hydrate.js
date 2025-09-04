// size: 186 (min) 126 (brotli)
const $define_content__x = _._closure_get(3, ($scope, x) =>
    _._text($scope[0], x),
  ),
  $x__closure = _._closure($define_content__x),
  $x__script = _._script("a1", ($scope, { 3: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[2], x), $x__closure($scope), $x__script($scope));
  });
init();
