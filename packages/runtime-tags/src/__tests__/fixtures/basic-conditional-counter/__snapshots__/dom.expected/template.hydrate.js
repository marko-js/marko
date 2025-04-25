// size: 346 (min) 194 (brotli)
const $count$if$content = _$.conditionalClosure(4, 2, 0, ($scope, count) =>
    _$.data($scope[0], count),
  ),
  $setup$if$content = $count$if$content,
  $if_content = _$.createRenderer("<span> </span>", "D ", $setup$if$content),
  $if = _$.conditional(2, $if_content),
  $show_effect = _$.effect("a0", ($scope, { 3: show }) =>
    _$.on($scope[1], "click", function () {
      $show($scope, !show);
    }),
  ),
  $show = _$.state(3, ($scope, show) => {
    $if($scope, show ? 0 : 1), $show_effect($scope);
  }),
  $count_effect = _$.effect("a1", ($scope, { 4: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(4, ($scope) => {
    $count$if$content($scope), $count_effect($scope);
  });
init();
