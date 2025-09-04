// size: 165 (min) 127 (brotli)
const $if_content = _._content_branch("Hello!", "b"),
  $if = _._if(0, $if_content),
  $show__script = _._script("a0", ($scope, { 2: show }) =>
    _._on($scope[1], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _._let(2, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show__script($scope));
  });
init();
