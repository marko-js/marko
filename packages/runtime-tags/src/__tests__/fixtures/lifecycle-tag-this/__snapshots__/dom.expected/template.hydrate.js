// size: 248 (min) 158 (brotli)
const $x__script = _._script("a0", ($scope) => {
    (_._lifecycle($scope, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: function () {
        ((document.getElementById("ref").textContent =
          `x=${$scope.b}, was=${this.cur}`),
          (this.cur = $scope.b));
      },
    }),
      _._on($scope.a, "click", function () {
        $x($scope, $scope.b + 1);
      }));
  }),
  $x = _._let(1, $x__script);
init();
