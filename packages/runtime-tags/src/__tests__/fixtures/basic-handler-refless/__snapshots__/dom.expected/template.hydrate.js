// size: 102 (min) 95 (brotli)
const $data = _._let(2, ($scope) => _._text($scope[1], $scope[2]));
(_._script("a0", ($scope) =>
  _._on($scope[0], "click", function () {
    $data($scope, 1);
  }),
),
  init());
