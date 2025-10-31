// size: 178 (min) 151 (brotli)
const $clickCount__script = _script("a0", ($scope) =>
    _on($scope[0], "click", function () {
      $clickCount($scope, $scope[2] + 1);
    }),
  ),
  $clickCount = _let(2, ($scope) => {
    (_text($scope[1], $scope[2]), $clickCount__script($scope));
  });
function $setup($scope) {
  $clickCount($scope, 0);
}
_template("a", "<div><button> </button></div>", "D D m", $setup).mount();
