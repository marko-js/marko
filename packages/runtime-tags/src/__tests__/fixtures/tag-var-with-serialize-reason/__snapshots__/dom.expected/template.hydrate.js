// size: 204 (min) 158 (brotli)
const $if = _._if(0, "<span></span>", "b"),
  $count__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    (_._text($scope.b, $scope.e),
      (($scope, input_value) => {
        $if($scope, input_value ? 0 : 1);
      })($scope.c, $scope.e),
      $count__script($scope));
  });
(_._var_resume("b1", ($scope, x) => {}), init());
