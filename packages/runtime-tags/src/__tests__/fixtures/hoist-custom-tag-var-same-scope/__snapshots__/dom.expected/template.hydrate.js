// size: 152 (min) 118 (brotli)
(_._script("b0", ($scope) => $scope.c),
  _._resume("a0", function ($scope) {
    return function (html) {
      $scope.a.innerHTML = html;
    };
  }),
  _._resume("c0", _._hoist(3)),
  _._var_resume("c1", _._const(3)),
  init());
