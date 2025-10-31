// size: 321 (min) 178 (brotli)
const $count__OR__valueChange = _._or(5, ($scope) => {
    (_._attr_input_value($scope, 1, $scope[3], $scope[4]),
      _._attr_input_value($scope, 2, $scope[3], $scope[4]));
  }),
  $count__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[3] + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    ($count__OR__valueChange($scope), $count__script($scope));
  });
(_._script("a2", ($scope) => {
  (_._attr_input_value_script($scope, 1),
    _._attr_input_value_script($scope, 2));
}),
  _._resume("a0", function ($scope) {
    return (_new_count) => {
      $count($scope, _new_count);
    };
  }),
  init());
