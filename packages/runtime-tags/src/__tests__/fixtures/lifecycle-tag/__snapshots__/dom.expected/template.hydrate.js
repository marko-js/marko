// size: 263 (min) 140 (brotli)
const $x__script = _._script("a0", ($scope) => {
    (_._lifecycle($scope, 3, {
      onMount: function () {
        document.getElementById("ref").textContent = "Mount " + $scope.b;
      },
      onUpdate: function () {
        document.getElementById("ref").textContent = "Update " + $scope.b;
      },
    }),
      _._on($scope.a, "click", function () {
        $x($scope, $scope.b + 1);
      }));
  }),
  $x = _._let(1, $x__script);
init();
