// size: 280 (min) 186 (brotli)
const $if_content__setup = _._if_closure(0, 0, ($scope) =>
    _._text($scope[0], $scope._[7]()),
  ),
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(0, $if_content),
  $x__script = _._script("a1", ($scope) =>
    _._on($scope[1], "click", function () {
      $x($scope, $scope[6] + 1);
    }),
  ),
  $x = _._let(6, ($scope) => {
    (_._text($scope[2], $scope[6]),
      $if($scope, $scope[6] ? 0 : 1),
      $x__script($scope));
  });
(_._resume("a0", function ($scope) {
  return () => $scope[5];
}),
  init());
