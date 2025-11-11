// size: 305 (min) 194 (brotli)
const $if_content__setup__script = _._script("a0", ($scope) => {
    (($scope._.b.innerHTML += "\nmounted"),
      (_.$signal($scope, 0).onabort = () => {
        $scope._.b.innerHTML += "\ndestroyed";
      }));
  }),
  $if_content__setup = ($scope) => {
    (_.$signalReset($scope, 0), $if_content__setup__script($scope));
  },
  $if = _._if(2, "<div>a</div><span>b</span><p>c</p>", "d", $if_content__setup),
  $show__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, $scope.d ? 0 : 1), $show__script($scope));
  });
init();
