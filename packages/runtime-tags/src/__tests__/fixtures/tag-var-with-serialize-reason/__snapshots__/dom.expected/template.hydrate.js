// size: 233 (min) 161 (brotli)
const $if_content = _._content_branch("<span></span>", "b"),
  $if = _._if(0, $if_content),
  $input_value = _._const(3, ($scope) => $if($scope, $scope.d ? 0 : 1)),
  $count__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    (_._text($scope.b, $scope.e),
      $input_value($scope.c, $scope.e),
      $count__script($scope));
  });
(_._var_resume("b1", ($scope) => {}), init());
