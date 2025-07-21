// size: 176 (min) 133 (brotli)
const $count$child$content_effect = _$.effect(
    "b1",
    ($scope, { _: { 1: count } }) =>
      _$.on($scope[0], "click", function () {
        $count($scope._, ++count);
      }),
  ),
  $count$child$content = _$.dynamicClosureRead(1, ($scope, count) => {
    (_$.data($scope[1], count), $count$child$content_effect($scope));
  }),
  $count_closure = _$.dynamicClosure($count$child$content),
  $count = _$.state(1, $count_closure);
init();
