// size: 358 (min) 203 (brotli)
const $count$if$content = _$.conditionalClosure(4, 2, 0, ($scope, count) =>
    _$.data($scope[0], count),
  ),
  $if_content = _$.createRenderer("The count is <!>", "b%", 0, 0, ($scope) =>
    $count$if$content._($scope),
  ),
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
