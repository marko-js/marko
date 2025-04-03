// size: 190 (min) 145 (brotli)
const $clickCount_effect = effect("a0", ($scope, { 2: clickCount }) =>
    on($scope[0], "click", function () {
      $clickCount($scope, clickCount + 1);
    }),
  ),
  $clickCount = state(2, ($scope, clickCount) => {
    data($scope[1], clickCount), $clickCount_effect($scope);
  });
function $setup($scope) {
  $clickCount($scope, 0);
}
createTemplate("a", "<div><button> </button></div>", "D D m", $setup).mount();
