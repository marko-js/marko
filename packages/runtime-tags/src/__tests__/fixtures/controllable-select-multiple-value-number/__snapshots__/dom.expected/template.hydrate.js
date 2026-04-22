// size: 254 (min) 154 (brotli)
const $selected = _._let(3, ($scope) => {
  (_._attr_select_value($scope, `a`, $scope.d, $valueChange($scope)),
    _._text($scope.b, $scope.d));
});
_._script(`a1`, ($scope) => {
  (_._attr_select_value_script($scope, `a`),
    _._on($scope.c, `click`, function () {
      $selected($scope, [1]);
    }));
});
function $valueChange($scope) {
  return function (v) {
    $selected(
      $scope,
      v.map((it) => Number(it)),
    );
  };
}
(_._resume(`a0`, $valueChange), init());
