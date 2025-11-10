// size: 272 (min) 171 (brotli)
let id = 0;
_._script("a0", ($scope) => $scope.b.value()?.classList.add("child" + id++));
const $get$hoisted_el = _._hoist("Ja", "Ac"),
  $get$hoisted_el2 = _._resume("b1", _._hoist("Ja", "Aa", "Aa"));
(_._el("b0", 0),
  _._script("b2", ($scope) => {
    {
      const first = $get$hoisted_el2($scope)();
      first && (first.innerHTML = "Hello World");
    }
    {
      const first = $get$hoisted_el($scope)();
      first && (first.innerHTML = "Hello World");
    }
  }),
  init());
