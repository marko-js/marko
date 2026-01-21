// size: 300 (min) 184 (brotli)
_._script("a0", ($scope) => _._attrs_script($scope, "a"));
const $if_content__value_class = _._closure_get(
    2,
    ($scope) => _._attr_class($scope.a, $scope._._.c),
    ($scope) => $scope._._,
  ),
  $if_content__text = _._closure_get(
    3,
    ($scope) => _._text($scope.b, $scope._._.d),
    ($scope) => $scope._._,
  ),
  $if_content__setup = ($scope) => {
    ($if_content__value_class($scope), $if_content__text($scope));
  },
  $Child_content__if = _._if(0, "<span> </span>", " D l", $if_content__setup),
  $Child_content__setup = _._closure_get(1, ($scope) =>
    $Child_content__if($scope, $scope._.b ? 0 : 1),
  );
(_._content_resume("a1", "<!><!><!>", "b%c", $Child_content__setup), init());
