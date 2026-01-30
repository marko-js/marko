// size: 309 (min) 185 (brotli)
(_._script("a0", ($scope) => $scope.b.action()),
  _._resume("b0", function ($scope) {
    return () => ({
      setHtml(value) {
        $scope.a.innerHTML = value;
      },
      addClass(value) {
        $scope.a.classList.add(value);
      },
    });
  }));
const $api_getter = _._hoist(3);
(_._script("c1", ($scope) => $api_getter($scope)().setHtml("works")),
  _._var_resume("c2", _._const(3)),
  _._resume("c0", function ($scope) {
    return function () {
      $api_getter($scope)().addClass("child");
    };
  }),
  init());
