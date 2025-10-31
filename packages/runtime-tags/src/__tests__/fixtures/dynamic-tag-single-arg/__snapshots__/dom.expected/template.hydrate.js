// size: 297 (min) 192 (brotli)
const $input = _._const(2, ($scope) => _._text($scope[0], $scope[2]));
function $setup($scope) {
  _._return($scope, "hello from other");
}
const tags = [_._template("a", "<div> </div>", "D l", $setup, $input)],
  $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $x__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[3] + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    (_._text($scope[1], $scope[3]),
      $dynamicTag($scope, tags[0], () => [$scope[3]]),
      $x__script($scope));
  });
init();
