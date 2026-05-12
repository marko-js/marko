// size: 116 (min) 102 (brotli)
const $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.h + 1);
    }),
  ),
  $count = _._let(7, ($scope) => {
    (_._text($scope.c, $scope.h), $count__script($scope));
  });
ready(`_a`);

// size: 4 (min) 8 (brotli)
init();
