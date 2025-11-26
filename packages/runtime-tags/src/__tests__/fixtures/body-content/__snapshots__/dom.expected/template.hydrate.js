// size: 262 (min) 170 (brotli)
const $attrs__script = _._script("a0", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $attrs = _._const(5, ($scope) => {
    (_._attrs($scope, "a", $scope.f), $attrs__script($scope));
  }),
  $FancyButton_content__clickCount = _._closure_get(1, ($scope) =>
    _._text($scope.a, $scope._.b),
  ),
  $clickCount__closure = _._closure($FancyButton_content__clickCount),
  $clickCount = _._let(1, ($scope) => {
    ($attrs($scope.a, { onClick: $onClick($scope) }),
      $clickCount__closure($scope));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.b + 1);
  };
}
(_._resume("b0", $onClick), init());
