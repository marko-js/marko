// size: 246 (min) 155 (brotli)
const $if_content2__setup = ($scope) => _._text($scope.a, $scope.$.x),
  $if = _._if(0, `<span> </span>`, `D l`, ($scope) =>
    _._text($scope.a, $scope.$.x),
  ),
  $if2 = _._if(1, `<span class=hidden> </span>`, `D l`, $if_content2__setup),
  $show__script = _._script(`a0`, ($scope) =>
    _._on($scope.c, `click`, function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, +!$scope.d), $if2($scope, +!!$scope.d), $show__script($scope));
  });
init();
