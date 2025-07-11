// size: 459 (min) 285 (brotli)
const $input_effect = _$.effect("a0", ($scope, { 1: input }) => {
    (input.write("mounted"),
      (_$.getAbortSignal($scope, 0).onabort = () => {
        input.write("destroyed");
      }));
  }),
  $input = _$.value(1, ($scope) => {
    (_$.resetAbortSignal($scope, 0), $input_effect($scope));
  }),
  $setup$if$content = ($scope) => {
    ($scope[0], $input($scope[0], { write: $write($scope) }));
  },
  $if_content = _$.createRenderer(
    "<div>a</div><span>b</span><p>c</p>",
    "/d&",
    $setup$if$content,
  ),
  $if = _$.conditional(2, $if_content),
  $show_effect = _$.effect("b1", ($scope, { 3: show }) =>
    _$.on($scope[0], "click", function () {
      $show($scope, !show);
    }),
  ),
  $show = _$.state(3, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show_effect($scope));
  });
function $write($scope) {
  return function (state) {
    $scope._[1].innerHTML = state;
  };
}
(_$.register("b0", $write), init());
