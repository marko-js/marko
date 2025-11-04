// size: 174 (min) 145 (brotli)
const $clickCount__script = _script("a0", ($scope) =>
    _on($scope.a, "click", function () {
      $clickCount($scope, $scope.c + 1);
    }),
  ),
  $clickCount = _let(2, ($scope) => {
    (_text($scope.b, $scope.c), $clickCount__script($scope));
  });
function $setup($scope) {
  $clickCount($scope, 0);
}
_template("a", "<div><button> </button></div>", "D D m", $setup).mount();
