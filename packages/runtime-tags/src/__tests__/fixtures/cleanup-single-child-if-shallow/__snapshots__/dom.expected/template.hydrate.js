// size: 409 (min) 244 (brotli)
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
  $if_content = _._content_branch(
    "<div>child</div>",
    "/b&",
    $if_content__setup,
  ),
  $if = _._if(2, $if_content),
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
