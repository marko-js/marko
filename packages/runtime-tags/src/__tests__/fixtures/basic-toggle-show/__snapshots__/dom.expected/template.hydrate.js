// size: 167 (min) 139 (brotli)
const $if_content = _$.createRenderer("Hello!"),
  $if = _$.conditional(0, $if_content),
  $show_effect = _$.effect("a0", ($scope, { 2: show }) =>
    _$.on($scope[1], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _$.state(2, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show_effect($scope));
  });
init();
