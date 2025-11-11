// size: 367 (min) 235 (brotli)
const $Foo_content2__dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $Foo_content2__input_content__OR__input_value = _._or(5, ($scope) =>
    $Foo_content2__dynamicTag($scope, $scope.d, () => [$scope.e]),
  ),
  $Foo_content2__input_value = _._const(
    4,
    $Foo_content2__input_content__OR__input_value,
  ),
  $if_content__setup = _._closure_get(
    3,
    ($scope) => _._text($scope.a, $scope._._.d),
    ($scope) => $scope._._,
  ),
  $Foo_content__if = _._if(0, " ", " b", $if_content__setup),
  $Foo_content__v = _._const(2, ($scope) =>
    $Foo_content__if($scope, $scope.c ? 0 : 1),
  ),
  $Foo_content__$params = _._const(1, ($scope) =>
    $Foo_content__v($scope, $scope.b[0]),
  );
_._content_resume("a0", "<!><!><!>", "b%c", 0, $Foo_content__$params);
const $count__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    ($Foo_content2__input_value($scope.b, $scope.c), $count__script($scope));
  });
init();
