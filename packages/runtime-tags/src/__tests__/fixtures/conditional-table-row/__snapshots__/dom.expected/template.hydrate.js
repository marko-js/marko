// size: 185 (min) 135 (brotli)
const $if_content = _$.createRenderer("<tr><td>Hi</td></tr>"),
  $if = _$.conditional(0, $if_content),
  $show_effect = _$.effect("a0", ($scope, { 2: show }) =>
    _$.on($scope[1], "click", function () {
      $show($scope, !show);
    }),
  ),
  $show = _$.state(2, ($scope, show) => {
    $if($scope, show ? 0 : 1), $show_effect($scope);
  });
init();
