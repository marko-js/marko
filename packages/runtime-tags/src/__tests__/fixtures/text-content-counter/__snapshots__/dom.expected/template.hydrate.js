// size: 139 (min) 102 (brotli)
const $clickCount__script = _._script("a0", ($scope) => {
    ((document.getElementById("button").textContent = $scope.b),
      _._on($scope.a, "click", function () {
        $clickCount($scope, $scope.b + 1);
      }));
  }),
  $clickCount = _._let(1, $clickCount__script);
init();
