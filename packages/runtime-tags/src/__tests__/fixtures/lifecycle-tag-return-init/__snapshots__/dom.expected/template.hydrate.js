// size: 251 (min) 156 (brotli)
const $x__script = _._script("a0", ($scope) => {
    (_._lifecycle($scope, 2, {
      x: $scope.b,
      onMount: function () {
        return ((this.w = 1), { y: this.x, u: 5 });
      },
      onUpdate: function () {
        document.getElementById("ref").textContent = JSON.stringify(this);
      },
    }),
      _._on($scope.a, "click", function () {
        $x($scope, $scope.b + 1);
      }));
  }),
  $x = _._let(1, $x__script);
init();
