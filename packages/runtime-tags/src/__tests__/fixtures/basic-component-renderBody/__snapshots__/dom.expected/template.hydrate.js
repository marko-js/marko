// size: 243 (min) 159 (brotli)
const $onClick__script = _._script("a0", ($scope, { 4: onClick }) =>
    _._on($scope[0], "click", onClick),
  ),
  $onClick$1 = _._const(4, $onClick__script),
  $mybutton_content__clickCount = _._closure_get(1, ($scope, clickCount) =>
    _._text($scope[0], clickCount),
  ),
  $clickCount__closure = _._closure($mybutton_content__clickCount),
  $clickCount = _._let(1, ($scope, clickCount) => {
    ($onClick$1($scope[0], $onClick($scope)), $clickCount__closure($scope));
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_._resume("b0", $onClick), init());
