// size: 259 (min) 162 (brotli)
const $onClick_effect = _$.effect("a0", ($scope, { 4: onClick }) =>
    _$.on($scope[0], "click", onClick),
  ),
  $onClick$1 = _$.value(4, $onClick_effect),
  $clickCount$mybutton$content = _$.dynamicClosureRead(
    1,
    ($scope, clickCount) => _$.data($scope[0], clickCount),
  ),
  $clickCount_closure = _$.dynamicClosure($clickCount$mybutton$content),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    $onClick$1($scope[0], $onClick($scope)), $clickCount_closure($scope);
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1);
  };
}
_$.register("b0", $onClick), init();
