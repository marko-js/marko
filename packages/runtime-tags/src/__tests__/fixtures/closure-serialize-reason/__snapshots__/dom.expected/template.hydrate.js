// size: 249 (min) 176 (brotli)
const $if_content__setup = _._if_closure(0, 0, ($scope) =>
    _._text($scope.a, $scope._.h()),
  ),
  $if = _._if(0, "<span> </span>", "D l", $if_content__setup),
  $x__script = _._script("a1", ($scope) =>
    _._on($scope.b, "click", function () {
      $x($scope, $scope.g + 1);
    }),
  ),
  $x = _._let(6, ($scope) => {
    (_._text($scope.c, $scope.g),
      $if($scope, $scope.g ? 0 : 1),
      $x__script($scope));
  });
(_._resume("a0", function ($scope) {
  return () => $scope.f;
}),
  init());
