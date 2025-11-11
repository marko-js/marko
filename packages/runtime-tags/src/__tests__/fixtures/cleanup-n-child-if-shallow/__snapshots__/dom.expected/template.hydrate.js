// size: 404 (min) 241 (brotli)
const $input__script = _._script("a0", ($scope) => {
    ($scope.b.write("mounted"),
      (_.$signal($scope, 0).onabort = () => {
        $scope.b.write("destroyed");
      }));
  }),
  $input = _._const(1, ($scope) => {
    (_.$signalReset($scope, 0), $input__script($scope));
  }),
  $if_content__setup = ($scope) => {
    ($scope.a, $input($scope.a, { write: $write($scope) }));
  },
  $if = _._if(
    2,
    "<div>a</div><span>b</span><p>c</p>",
    "/d&",
    $if_content__setup,
  ),
  $show__script = _._script("b1", ($scope) =>
    _._on($scope.a, "click", function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, $scope.d ? 0 : 1), $show__script($scope));
  });
function $write($scope) {
  return function (state) {
    $scope._.b.innerHTML = state;
  };
}
(_._resume("b0", $write), init());
