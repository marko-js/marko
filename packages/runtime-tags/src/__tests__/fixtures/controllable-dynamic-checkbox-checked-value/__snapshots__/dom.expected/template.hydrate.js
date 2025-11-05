// size: 669 (min) 289 (brotli)
const $if_content__checkedValue__OR__checkedValueChange = _._or(1, ($scope) =>
    _._attr_input_checkedValue($scope, 0, $scope._[6], $scope._[7], "b"),
  ),
  $if_content__checkedValue = _._if_closure(
    1,
    0,
    $if_content__checkedValue__OR__checkedValueChange,
  ),
  $if_content__$checkedValueChange = _._if_closure(
    1,
    0,
    $if_content__checkedValue__OR__checkedValueChange,
  ),
  $if_content__setup__script = _._script("a1", ($scope) =>
    _._attr_input_checkedValue_script($scope, 0),
  ),
  $if_content__setup = ($scope) => {
    ($if_content__checkedValue._($scope),
      $if_content__$checkedValueChange._($scope),
      $if_content__setup__script($scope));
  },
  $if_content = _._content_branch(
    "<input type=radio>",
    " b",
    $if_content__setup,
  ),
  $if = _._if(1, $if_content),
  $show__script = _._script("a2", ($scope) =>
    _._on($scope[4], "click", function () {
      $show($scope, !$scope[5]);
    }),
  ),
  $show = _._let(5, ($scope) => {
    ($if($scope, $scope[5] ? 0 : 1), $show__script($scope));
  }),
  $checkedValue__OR__checkedValueChange = _._or(8, ($scope) => {
    (_._attr_input_checkedValue($scope, 0, $scope[6], $scope[7], "a"),
      _._attr_input_checkedValue($scope, 2, $scope[6], $scope[7], "c"));
  }),
  $checkedValue = _._let(6, ($scope) => {
    (_._text($scope[3], $scope[6]),
      $checkedValue__OR__checkedValueChange($scope),
      $if_content__checkedValue($scope));
  });
(_._script("a3", ($scope) => {
  (_._attr_input_checkedValue_script($scope, 0),
    _._attr_input_checkedValue_script($scope, 2));
}),
  _._resume("a0", function ($scope) {
    return (_new_checkedValue) => {
      $checkedValue($scope, _new_checkedValue);
    };
  }),
  init());
