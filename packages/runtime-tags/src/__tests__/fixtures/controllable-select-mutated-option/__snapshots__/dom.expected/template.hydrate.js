// size: 646 (min) 316 (brotli)
const $for_content__opt = _._const(3, ($scope) => {
    (_._attr($scope[0], "value", $scope[3]), _._text($scope[1], $scope[3]));
  }),
  $for_content__$params = _._const(2, ($scope) =>
    $for_content__opt($scope, $scope[2][0]),
  ),
  $for_content = _._content_branch(
    "<option> </option>",
    " D l",
    0,
    $for_content__$params,
  ),
  $for = _._for_of(0, $for_content),
  $options__script = _._script("a1", ($scope) => {
    (_._on($scope[2], "click", function () {
      $options($scope, $scope[4].slice(1));
    }),
      _._on($scope[3], "click", function () {
        $options($scope, [
          $scope[4]?.length ? $scope[4]?.[0] - 1 : 3,
          ...$scope[4],
        ]);
      }));
  }),
  $options = _._let(4, ($scope) => {
    ($options_($scope, $scope[4]?.[0]),
      $for($scope, [$scope[4], (v) => v]),
      $options__script($scope));
  }),
  $value = _._let(6, ($scope) => {
    (_._attr_select_value($scope, 0, $scope[6], $valueChange($scope)),
      _._text($scope[1], $scope[6]));
  }),
  $options_ = _._const(5, ($scope) => $value($scope, $scope[5]));
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._script("a2", ($scope) => {
  (_._attr_select_value_script($scope, 0),
    _._on($scope[0], "change", console.log),
    _._on($scope[0], "input", console.log));
}),
  _._resume("a0", $valueChange),
  init());
