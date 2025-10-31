// size: 254 (min) 169 (brotli)
const $x__script = _._script("a0", ($scope) => {
    (_._lifecycle($scope, 2, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: function () {
        ((document.getElementById("ref").textContent =
          `x=${$scope[1]}, was=${this.cur}`),
          (this.cur = $scope[1]));
      },
    }),
      _._on($scope[0], "click", function () {
        $x($scope, $scope[1] + 1);
      }));
  }),
  $x = _._let(1, $x__script);
init();
