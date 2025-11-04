// size: 187 (min) 127 (brotli)
const $liveCount = _2._let(2, ($scope) => _2._text($scope.b, $scope.c)),
  $count = _2._let(3);
(_2._script("a1", ($scope) =>
  _2._on($scope.a, "click", function (_, el) {
    el.textContent = "" + $count($scope, 1);
  }),
),
  _2._resume("a0", function ($scope) {
    return function (v) {
      $liveCount($scope, v);
    };
  }),
  init());
