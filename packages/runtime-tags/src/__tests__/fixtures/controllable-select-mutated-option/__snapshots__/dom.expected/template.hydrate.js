// size: 631 (min) 310 (brotli)
const $for_content__opt = _._const(3, ($scope) => {
    (_._attr($scope.a, "value", $scope.d), _._text($scope.b, $scope.d));
  }),
  $for_content__$params = _._const(2, ($scope) =>
    $for_content__opt($scope, $scope.c[0]),
  ),
  $for_content = _._content_branch(
    "<option> </option>",
    " D l",
    0,
    $for_content__$params,
  ),
  $for = _._for_of(0, $for_content),
  $options__script = _._script("a1", ($scope) => {
    (_._on($scope.c, "click", function () {
      $options($scope, $scope.e.slice(1));
    }),
      _._on($scope.d, "click", function () {
        $options($scope, [
          $scope.e?.length ? $scope.e?.[0] - 1 : 3,
          ...$scope.e,
        ]);
      }));
  }),
  $options = _._let(4, ($scope) => {
    ($options_($scope, $scope.e?.[0]),
      $for($scope, [$scope.e, (v) => v]),
      $options__script($scope));
  }),
  $value = _._let(6, ($scope) => {
    (_._attr_select_value($scope, "a", $scope.g, $valueChange($scope)),
      _._text($scope.b, $scope.g));
  }),
  $options_ = _._const(5, ($scope) => $value($scope, $scope.f));
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._script("a2", ($scope) => {
  (_._attr_select_value_script($scope, "a"),
    _._on($scope.a, "change", console.log),
    _._on($scope.a, "input", console.log));
}),
  _._resume("a0", $valueChange),
  init());
