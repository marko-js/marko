// size: 290 (min) 192 (brotli)
const $input = _._const(2, ($scope) => _._text($scope.a, $scope.c));
function $setup($scope) {
  _._return($scope, "hello from other");
}
const tags = [_._template("a", "<div> </div>", "D l", $setup, $input)],
  $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $x__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.d + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $dynamicTag($scope, tags[0], () => [$scope.d]),
      $x__script($scope));
  });
init();
