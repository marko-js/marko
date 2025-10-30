// size: 219 (min) 155 (brotli)
const $if_content__setup = _._script(
    "a0",
    ($scope) => ($scope._[0].textContent = "Hit"),
  ),
  $if_content = _._content_branch(0, 0, $if_content__setup),
  $if = _._if(3, $if_content),
  $count__script = _._script("a1", ($scope, { 4: count }) =>
    _._on($scope[1], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(4, ($scope, count) => {
    (_._text($scope[2], count),
      $if($scope, count ? 1 : 0),
      $count__script($scope));
  });
init();
