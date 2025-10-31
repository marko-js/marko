// size: 142 (min) 103 (brotli)
const $clickCount__script = _._script("a0", ($scope) => {
    ((document.getElementById("button").textContent = $scope[1]),
      _._on($scope[0], "click", function () {
        $clickCount($scope, $scope[1] + 1);
      }));
  }),
  $clickCount = _._let(1, $clickCount__script);
init();
