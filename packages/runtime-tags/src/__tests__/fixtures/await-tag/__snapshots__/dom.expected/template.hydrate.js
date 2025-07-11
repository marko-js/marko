// size: 276 (min) 136 (brotli)
const $count$await$content3 = _$.dynamicClosureRead(4, ($scope, count) =>
    _$.data($scope[1], count),
  ),
  $count$await$content2 = _$.dynamicClosureRead(4, ($scope, count) =>
    _$.data($scope[1], count),
  ),
  $count$await$content = _$.dynamicClosureRead(4, ($scope, count) =>
    _$.data($scope[1], count),
  ),
  $count_closure = _$.dynamicClosure(
    $count$await$content,
    $count$await$content2,
    $count$await$content3,
  ),
  $count_effect = _$.effect("a0", ($scope, { 4: count }) =>
    _$.on($scope[3], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(4, ($scope) => {
    ($count_closure($scope), $count_effect($scope));
  });
init();
