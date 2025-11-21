// size: 274 (min) 180 (brotli)
_._enable_catch();
const $if_content__value = _._if_closure(2, 0, ($scope) =>
    _._text($scope.a, $scope._.d),
  ),
  $if_content__setup = $if_content__value,
  $await_content__if = _._if(2, "<span> </span>", "D l", $if_content__setup),
  $await_content__value__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $await_content__value($scope, $scope.d + 1);
    }),
  ),
  $await_content__value = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $await_content__if($scope, $scope.d > 0 ? 0 : 1),
      $if_content__value($scope),
      $await_content__value__script($scope));
  });
(_._content_resume("a1", "loading...", "b"), init());
