// size: 230 (min) 158 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", $scope[4]),
  ),
  $onClick$1 = _._const(4, $onClick__script),
  $mybutton_content__clickCount = _._closure_get(1, ($scope) =>
    _._text($scope[0], $scope._[1]),
  ),
  $clickCount__closure = _._closure($mybutton_content__clickCount),
  $clickCount = _._let(1, ($scope) => {
    ($onClick$1($scope[0], $onClick($scope)), $clickCount__closure($scope));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope[1] + 1);
  };
}
(_._resume("b0", $onClick), init());
