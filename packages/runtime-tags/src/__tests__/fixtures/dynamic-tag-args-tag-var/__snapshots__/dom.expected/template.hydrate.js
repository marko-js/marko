// size: 324 (min) 211 (brotli)
const $setup = () => {},
  $input = _._const(2, ($scope) => {
    (_._text($scope.a, $scope.c), _._return($scope, $scope.c));
  });
const tags = [
    _._template("a", "<div>Child: <!></div>", "Db%l", $setup, $input),
  ],
  $dynamicTag = _._dynamic_tag(2, 0, () => $y, 1),
  $x__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.f + 1);
    }),
  ),
  $x = _._let(5, ($scope) => {
    (_._text($scope.b, $scope.f),
      $dynamicTag($scope, tags[0], () => [$scope.f]),
      $x__script($scope));
  }),
  $y = _._var_resume("b1", ($scope, y) => _._text($scope.e, y));
init();
