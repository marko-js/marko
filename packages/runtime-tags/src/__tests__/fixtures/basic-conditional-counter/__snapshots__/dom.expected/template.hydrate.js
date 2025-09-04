// size: 324 (min) 189 (brotli)
const $if_content__count = _._if_closure(4, 2, 0, ($scope, count) =>
    _._text($scope[0], count),
  ),
  $if_content__setup = $if_content__count,
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(2, $if_content),
  $show__script = _._script("a0", ($scope, { 3: show }) =>
    _._on($scope[1], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _._let(3, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show__script($scope));
  }),
  $count__script = _._script("a1", ($scope, { 4: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($if_content__count($scope), $count__script($scope));
  });
init();
