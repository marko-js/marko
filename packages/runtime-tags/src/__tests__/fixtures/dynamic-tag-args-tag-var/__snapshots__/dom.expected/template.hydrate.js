// size: 344 (min) 218 (brotli)
const $setup = () => {},
  $input = _._const(2, ($scope) => {
    (_._text($scope[0], $scope[2]), _._return($scope, $scope[2]));
  });
const tags = [
    _._template("a", "<div>Child: <!></div>", "Db%l", $setup, $input),
  ],
  $dynamicTag = _._dynamic_tag(2, 0, () => $y, 1),
  $x__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[5] + 1);
    }),
  ),
  $x = _._let(5, ($scope) => {
    (_._text($scope[1], $scope[5]),
      $dynamicTag($scope, tags[0], () => [$scope[5]]),
      $x__script($scope));
  }),
  $y = _._var_resume(
    "b1",
    _._const(6, ($scope) => _._text($scope[4], $scope[6])),
  );
init();
