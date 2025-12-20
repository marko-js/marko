// size: 584 (min) 318 (brotli)
const $for_content__$params = ($scope, $params2) =>
    (($scope, opt) => {
      (_._attr($scope.a, "value", opt), _._text($scope.b, opt));
    })($scope, $params2[0]),
  $for = _._for_of(0, "<option> </option>", " D l", 0, $for_content__$params),
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
