// size: 276 (min) 185 (brotli)
let id = 0;
_._script("a0", ($scope) => $scope[1].value()?.classList.add("child" + id++));
const $get$hoisted_el = _._hoist("j0", "d2"),
  $get$hoisted_el2 = _._resume("b1", _._hoist("j0", "d0", "d0"));
(_._el("b0", "j0"),
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
