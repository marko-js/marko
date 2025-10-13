// size: 169 (min) 118 (brotli)
const $MyTag_content__count = _._const(5, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $count__script = _._script("a0", ($scope, { 3: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(3, ($scope, count) => {
    (_._text($scope[1], count),
      $MyTag_content__count($scope[2], count),
      $count__script($scope));
  });
init();
