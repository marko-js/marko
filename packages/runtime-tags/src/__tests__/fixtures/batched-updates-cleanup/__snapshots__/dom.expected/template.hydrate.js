// size: 280 (min) 190 (brotli)
const $message$if$content = _$.conditionalClosure(3, 1, 0, ($scope, message) =>
    _$.data($scope[0], message),
  ),
  $if_content = _$.createRenderer("<span> </span>", "D ", 0, 0, ($scope) =>
    $message$if$content._($scope),
  ),
  $if = _$.conditional(1, $if_content),
  $message = _$.state(3, $message$if$content),
  $show_effect = _$.effect("a0", ($scope, { 2: show }) =>
    _$.on($scope[0], "click", function () {
      $message($scope, "bye"), $show($scope, !show);
    }),
  ),
  $show = _$.state(2, ($scope, show) => {
    $if($scope, show ? 0 : 1), $show_effect($scope);
  });
init();
