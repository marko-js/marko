// size: 341 (min) 219 (brotli)
const $if_content__setup__script = _._script("a0", ($scope) => {
    (($scope._[1].innerHTML += "\nmounted"),
      (_.$signal($scope, 0).onabort = () => {
        $scope._[1].innerHTML += "\ndestroyed";
      }));
  }),
  $if_content__setup = ($scope) => {
    (_.$signalReset($scope, 0), $if_content__setup__script($scope));
  },
  $if_content = _._content_branch(
    "<div>a</div><span>b</span><p>c</p>",
    "d",
    $if_content__setup,
  ),
  $if = _._if(2, $if_content),
  $show__script = _._script("a1", ($scope, { 3: show }) =>
    _._on($scope[0], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _._let(3, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show__script($scope));
  });
init();
