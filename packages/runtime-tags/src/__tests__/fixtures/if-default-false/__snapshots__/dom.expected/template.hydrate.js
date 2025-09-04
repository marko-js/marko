// size: 161 (min) 135 (brotli)
const $if_content = _._content_branch("hi", "b"),
  $if = _._if(1, $if_content),
  $show__script = _._script("a0", ($scope, { 2: show }) =>
    _._on($scope[0], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _._let(2, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show__script($scope));
  });
init();
