// size: 259 (min) 184 (brotli)
const $setup = () => {},
  $input = ($scope, input) => _._text($scope.a, JSON.stringify(input));
const tags = [_._template("a", "<div> </div>", "D l", $setup, $input)],
  $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $x__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.g + 1);
    }),
  ),
  $x = _._let(6, ($scope) => {
    (_._text($scope.b, $scope.g),
      $dynamicTag($scope, tags[0], () => [$scope.g, "foo"]),
      $x__script($scope));
  });
init();
