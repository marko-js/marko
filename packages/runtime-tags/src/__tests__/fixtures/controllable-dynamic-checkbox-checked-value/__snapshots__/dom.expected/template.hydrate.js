// size: 648 (min) 272 (brotli)
const $if_content__checkedValue__OR__$checkedValueChange = _._or(1, ($scope) =>
    _._attr_input_checkedValue($scope, `a`, $scope._.g, $scope._.h, `b`),
  ),
  $if_content__checkedValue = _._if_closure(
    1,
    0,
    $if_content__checkedValue__OR__$checkedValueChange,
  ),
  $if_content__setup__script = _._script(`a1`, ($scope) =>
    _._attr_input_checkedValue_script($scope, `a`),
  ),
  $if_content__setup = ($scope) => {
    ($if_content__checkedValue._($scope),
      $if_content__$checkedValueChange._($scope),
      $if_content__setup__script($scope));
  },
  $if_content__$checkedValueChange = _._if_closure(
    1,
    0,
    $if_content__checkedValue__OR__$checkedValueChange,
  ),
  $if = _._if(1, `<input type=radio>`, ` b`, $if_content__setup),
  $show__script = _._script(`a2`, ($scope) =>
    _._on($scope.e, `click`, function () {
      $show($scope, !$scope.f);
    }),
  ),
  $show = _._let(5, ($scope) => {
    ($if($scope, +!$scope.f), $show__script($scope));
  }),
  $checkedValue__OR__$checkedValueChange = _._or(8, ($scope) => {
    (_._attr_input_checkedValue($scope, `a`, $scope.g, $scope.h, `a`),
      _._attr_input_checkedValue($scope, `c`, $scope.g, $scope.h, `c`));
  }),
  $checkedValue = _._let(6, ($scope) => {
    (_._text($scope.d, $scope.g),
      $checkedValue__OR__$checkedValueChange($scope),
      $if_content__checkedValue($scope));
  });
_._script(`a3`, ($scope) => {
  (_._attr_input_checkedValue_script($scope, `a`),
    _._attr_input_checkedValue_script($scope, `c`));
});
function $checkedValueChange2($scope) {
  return (_new_checkedValue) => {
    $checkedValue($scope, _new_checkedValue);
  };
}
(_._resume(`a0`, $checkedValueChange2), init());
