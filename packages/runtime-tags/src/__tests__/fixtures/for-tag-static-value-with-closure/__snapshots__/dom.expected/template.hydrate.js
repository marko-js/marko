// size: 172 (min) 126 (brotli)
const $for_content__count = _._for_closure(3, 0, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $count__script = _._script("a0", ($scope, { 3: count }) =>
    _._on($scope[1], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(3, ($scope, count) => {
    (_._text($scope[2], count),
      $for_content__count($scope),
      $count__script($scope));
  });
init();
