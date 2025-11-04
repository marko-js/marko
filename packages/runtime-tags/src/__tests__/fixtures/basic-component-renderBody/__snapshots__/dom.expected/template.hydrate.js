// size: 224 (min) 161 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", $scope.e),
  ),
  $onClick$1 = _._const(4, $onClick__script),
  $mybutton_content__clickCount = _._closure_get(1, ($scope) =>
    _._text($scope.a, $scope._.b),
  ),
  $clickCount__closure = _._closure($mybutton_content__clickCount),
  $clickCount = _._let(1, ($scope) => {
    ($onClick$1($scope.a, $onClick($scope)), $clickCount__closure($scope));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.b + 1);
  };
}
(_._resume("b0", $onClick), init());
