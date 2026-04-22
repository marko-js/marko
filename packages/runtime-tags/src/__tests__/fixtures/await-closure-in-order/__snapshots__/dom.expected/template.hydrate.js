// size: 211 (min) 149 (brotli)
const $if_content__value = _._if_closure(3, 0, ($scope) =>
    _._text($scope.a, $scope._.e),
  ),
  $if_content__setup = $if_content__value,
  $if = _._if(3, `<span> </span>`, `D l`, $if_content__setup),
  $value__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $value($scope, $scope.e + 1);
    }),
  ),
  $value = _._let(4, ($scope) => {
    (_._text($scope.b, $scope.e),
      $if($scope, +!$scope.e),
      $if_content__value($scope),
      $value__script($scope));
  });
init();
