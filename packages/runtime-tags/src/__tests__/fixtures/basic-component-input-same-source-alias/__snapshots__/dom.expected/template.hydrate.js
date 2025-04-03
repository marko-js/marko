// size: 262 (min) 163 (brotli)
const $text = _$.value(6, ($scope, text) => {
    _$.data($scope[1], text),
      (($scope, textAlias) => {
        _$.data($scope[2], textAlias);
      })($scope, text);
  }),
  $onClick_effect = _$.effect("a0", ($scope, { 5: onClick }) =>
    _$.on($scope[0], "click", onClick),
  ),
  $onClick$1 = _$.value(5, $onClick_effect),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    $text($scope[0], clickCount), $onClick$1($scope[0], $onClick($scope));
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1);
  };
}
_$.register("b0", $onClick), init();
