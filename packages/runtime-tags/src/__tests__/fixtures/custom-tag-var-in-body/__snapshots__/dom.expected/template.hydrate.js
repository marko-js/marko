// size: 155 (min) 111 (brotli)
function $_return($scope) {
  return () => (html) => ($scope.b.innerHTML = html);
}
(_._resume(`a0`, $_return),
  _._script(`b0`, ($scope) => _._assert_init($scope._, `c`)(`Hello world`)),
  _._var_resume(`b2`, _._const(2)),
  init());
