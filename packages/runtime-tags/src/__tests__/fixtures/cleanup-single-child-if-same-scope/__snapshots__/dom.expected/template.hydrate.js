// size: 279 (min) 177 (brotli)
const $if_content__setup__script = _._script(`a0`, ($scope) => {
    (($scope._.b.innerHTML += `
mounted`),
      (_.$signal($scope, 0).onabort = () => {
        $scope._.b.innerHTML += `
destroyed`;
      }));
  }),
  $if = _._if(2, `<div>child</div>`, `b`, ($scope) => {
    (_.$signalReset($scope, 0), $if_content__setup__script($scope));
  }),
  $show__script = _._script(`a1`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, +!$scope.d), $show__script($scope));
  });
init();
