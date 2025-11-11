// size: 187 (min) 137 (brotli)
const $if_content__setup = _._script(
    "a0",
    ($scope) => ($scope._.a.textContent = "Hit"),
  ),
  $if = _._if(3, 0, 0, $if_content__setup),
  $count__script = _._script("a1", ($scope) =>
    _._on($scope.b, "click", function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    (_._text($scope.c, $scope.e),
      $if($scope, $scope.e ? 1 : 0),
      $count__script($scope));
  });
init();
