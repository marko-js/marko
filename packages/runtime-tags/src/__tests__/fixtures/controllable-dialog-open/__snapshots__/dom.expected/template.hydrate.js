// size: 192 (min) 130 (brotli)
const $open = _._let(2, ($scope) => {
  (_._attr_dialog_open($scope, "a", $scope.c, $openChange($scope)),
    _._text($scope.b, String($scope.c)));
});
function $openChange($scope) {
  return (_new_open) => {
    $open($scope, _new_open);
  };
}
(_._script("a1", ($scope) => _._attr_dialog_open_script($scope, "a")),
  _._resume("a0", $openChange),
  init());
