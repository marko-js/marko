// size: 267 (min) 137 (brotli)
const $x__script = _._script("a0", ($scope) => {
    (_._lifecycle($scope, 2, {
      onMount: function () {
        document.getElementById("ref").textContent = "Mount " + $scope[1];
      },
      onUpdate: function () {
        document.getElementById("ref").textContent = "Update " + $scope[1];
      },
    }),
      _._on($scope[0], "click", function () {
        $x($scope, $scope[1] + 1);
      }));
  }),
  $x = _._let(1, $x__script);
init();
