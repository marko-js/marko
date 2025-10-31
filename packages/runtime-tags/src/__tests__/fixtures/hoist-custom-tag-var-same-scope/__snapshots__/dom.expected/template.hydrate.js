// size: 154 (min) 106 (brotli)
(_._script("b0", ($scope) => $scope[2]),
  _._resume("a0", function ($scope) {
    return function (html) {
      $scope[0].innerHTML = html;
    };
  }),
  _._resume("c0", _._hoist(3)),
  _._var_resume("c1", _._const(3)),
  init());
