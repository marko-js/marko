// size: 329 (min) 182 (brotli)
const $count__OR__valueChange = _._or(5, ($scope) => {
    let { 3: count, 4: $valueChange } = $scope;
    (_._attr_input_value($scope, 1, count, $valueChange),
      _._attr_input_value($scope, 2, count, $valueChange));
  }),
  $count__script = _._script("a1", ($scope, { 3: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
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
