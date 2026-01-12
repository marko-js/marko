// size: 247 (min) 149 (brotli)
const $x__script = _._script("a0", ($scope) => {
    (_._lifecycle($scope, 4, {
      onMount: function () {
        this.cur = $scope.d;
      },
      onUpdate: function () {
        ($prev($scope, this.cur), (this.cur = $scope.d));
      },
    }),
      _._on($scope.c, "click", function () {
        $x($scope, $scope.d + 1);
      }));
  }),
  $x = _._let(3, ($scope) => {
    (_._text($scope.a, $scope.d), $x__script($scope));
  }),
  $prev = _._let(4, ($scope) => _._text($scope.b, $scope.e));
init();
