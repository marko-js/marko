// size: 357 (min) 221 (brotli)
const $setup$if$content_effect = _$.effect("a0", ($scope) => {
    (($scope._[1].innerHTML += "\nmounted"),
      (_$.getAbortSignal($scope, 0).onabort = () => {
        $scope._[1].innerHTML += "\ndestroyed";
      }));
  }),
  $setup$if$content = ($scope) => {
    (_$.resetAbortSignal($scope, 0), $setup$if$content_effect($scope));
  },
  $if_content = _$.createRenderer(
    "<div>a</div><span>b</span><p>c</p>",
    "d",
    $setup$if$content,
  ),
  $if = _$.conditional(2, $if_content),
  $show_effect = _$.effect("a1", ($scope, { 3: show }) =>
    _$.on($scope[0], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _$.state(3, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show_effect($scope));
  });
init();
