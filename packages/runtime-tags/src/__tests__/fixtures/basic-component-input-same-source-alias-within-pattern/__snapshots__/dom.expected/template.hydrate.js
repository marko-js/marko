// size: 395 (min) 196 (brotli)
const $text = _$.value(7, ($scope, text) => {
    _$.data($scope[1], text),
      (($scope, textAlias) => {
        _$.data($scope[2], textAlias);
      })($scope, text);
  }),
  $value2 = _$.value(6, ($scope, $value) => $text($scope, $value.text)),
  $onClick_effect = _$.effect("a0", ($scope, { 5: onClick }) =>
    _$.on($scope[0], "click", onClick),
  ),
  $onClick$1 = _$.value(5, $onClick_effect),
  $clickCount = _$.state(2, ($scope, clickCount) => {
    $value2($scope[0], { text: clickCount }),
      $onClick$1($scope[0], $onClick($scope)),
      $text($scope[1], clickCount),
      $onClick$1($scope[1], $onClick2($scope));
  });
function $onClick($scope, { 2: clickCount } = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1);
  };
}
function $onClick2($scope, { 2: clickCount } = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1);
  };
}
_$.register("b0", $onClick), _$.register("b1", $onClick2), init();
