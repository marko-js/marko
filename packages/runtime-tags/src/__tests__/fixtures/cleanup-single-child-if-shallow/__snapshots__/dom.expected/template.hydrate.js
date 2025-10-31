// size: 417 (min) 247 (brotli)
const $input__script = _._script("a0", ($scope) => {
    ($scope[1].write("mounted"),
      (_.$signal($scope, 0).onabort = () => {
        $scope[1].write("destroyed");
      }));
  }),
  $input = _._const(1, ($scope) => {
    (_.$signalReset($scope, 0), $input__script($scope));
  }),
  $if_content__setup = ($scope) => {
    ($scope[0], $input($scope[0], { write: $write($scope) }));
  },
  $if_content = _._content_branch(
    "<div>child</div>",
    "/b&",
    $if_content__setup,
  ),
  $if = _._if(2, $if_content),
  $show__script = _._script("b1", ($scope) =>
    _._on($scope[0], "click", function () {
      $show($scope, !$scope[3]);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, $scope[3] ? 0 : 1), $show__script($scope));
  });
function $write($scope) {
  return function (state) {
    $scope._[1].innerHTML = state;
  };
}
(_._resume("b0", $write), init());
