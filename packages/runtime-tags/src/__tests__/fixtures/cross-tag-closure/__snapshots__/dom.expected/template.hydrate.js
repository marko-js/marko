// size: 282 (min) 178 (brotli)
const $value = _._let(3, ($scope) => _._return($scope, $scope[3]));
_._resume("a0", function ($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
});
const $mytag_content__count__script = _._script("c0", ($scope) =>
    _._on($scope[0], "click", function () {
      _._var_change($scope._[0], $scope._[3] + 1);
    }),
  ),
  $mytag_content__count = _._closure_get(3, ($scope) => {
    (_._text($scope[1], $scope._[3]), $mytag_content__count__script($scope));
  }),
  $count__closure = _._closure($mytag_content__count);
(_._var_resume("c2", _._const(3, $count__closure)), init());
