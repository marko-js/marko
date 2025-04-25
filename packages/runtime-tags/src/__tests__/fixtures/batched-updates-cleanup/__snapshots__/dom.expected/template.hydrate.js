// size: 270 (min) 182 (brotli)
const $message$if$content = _$.conditionalClosure(3, 1, 0, ($scope, message) =>
    _$.data($scope[0], message),
  ),
  $setup$if$content = $message$if$content,
  $if_content = _$.createRenderer("<span> </span>", "D ", $setup$if$content),
  $if = _$.conditional(1, $if_content),
  $show_effect = _$.effect("a0", ($scope, { 2: show }) =>
    _$.on($scope[0], "click", function () {
      $message($scope, "bye"), $show($scope, !show);
    }),
  ),
  $show = _$.state(2, ($scope, show) => {
    $if($scope, show ? 0 : 1), $show_effect($scope);
  }),
  $message = _$.state(3, $message$if$content);
init();
