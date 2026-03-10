// size: 152 (min) 109 (brotli)
(_._resume("a0", function ($scope) {
  return () => (html) => ($scope.b.innerHTML = html);
}),
  _._script("b0", ($scope) => _._assert_init($scope._, "c")("Hello world")),
  _._var_resume("b2", _._const(2)),
  init());
