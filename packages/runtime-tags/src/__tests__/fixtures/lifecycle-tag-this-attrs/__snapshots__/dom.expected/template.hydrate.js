// size: 146 (min) 117 (brotli)
const $x = _._let(1, ($scope) => _._text($scope.a, $scope.b));
(_._script("a0", ($scope) =>
  _._lifecycle($scope, {
    x: 1,
    setX: function (value) {
      $x($scope, value);
    },
    onMount: function () {
      this.setX(this.x);
    },
  }),
),
  init());
