// size: 201 (min) 135 (brotli)
(_._resume("a0", function ($scope) {
  return function (html) {
    $scope.a.innerHTML = html;
  };
}),
  _._resume("c0", _._hoist(2, "C1")),
  _._var_resume("c1", _._const(2)),
  _._script("c3", ($scope) => {
    for (const fn of $scope.b) fn("Hoist from custom tag");
  }),
  init());
