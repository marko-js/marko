// size: 167 (min) 138 (brotli)
const $if_content = _$.createRenderer("hi"),
  $if = _$.conditional(1, $if_content),
  $show_effect = _$.effect("a0", ($scope, { 2: show }) =>
    _$.on($scope[0], "click", function () {
      $show($scope, !show);
    }),
  ),
  $show = _$.state(2, ($scope, show) => {
    $if($scope, show ? 0 : 1), $show_effect($scope);
  });
init();
