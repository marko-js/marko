// size: 337 (min) 194 (brotli)
const $setup$if$content2 = ($scope) => {
    _$.data($scope[0], $scope.$global.x);
  },
  $if_content2 = _$.createRenderer(
    "<span class=hidden> </span>",
    "D l",
    $setup$if$content2,
  ),
  $setup$if$content = ($scope) => {
    _$.data($scope[0], $scope.$global.x);
  },
  $if_content = _$.createRenderer("<span> </span>", "D l", $setup$if$content),
  $if = _$.conditional(0, $if_content),
  $if2 = _$.conditional(1, $if_content2),
  $show_effect = _$.effect("a0", ($scope, { 3: show }) =>
    _$.on($scope[2], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _$.state(3, ($scope, show) => {
    ($if($scope, show ? 0 : 1),
      $if2($scope, show ? 1 : 0),
      $show_effect($scope));
  });
init();
