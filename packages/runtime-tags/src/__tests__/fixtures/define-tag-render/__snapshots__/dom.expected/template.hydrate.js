// size: 138 (min) 112 (brotli)
const $define_content__y__script = _._script("a1", ($scope, { 7: y }) =>
    _._on($scope[2], "click", function () {
      $define_content__y($scope, ++y);
    }),
  ),
  $define_content__y = _._let(7, ($scope, y) => {
    (_._text($scope[1], y),
      _._text($scope[3], y),
      $define_content__y__script($scope));
  });
init();
