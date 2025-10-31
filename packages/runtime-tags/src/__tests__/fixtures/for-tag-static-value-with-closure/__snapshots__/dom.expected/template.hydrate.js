// size: 165 (min) 125 (brotli)
const $for_content__count = _._for_closure(0, ($scope) =>
    _._text($scope[1], $scope._[3]),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $count($scope, $scope[3] + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope[2], $scope[3]),
      $for_content__count($scope),
      $count__script($scope));
  });
init();
