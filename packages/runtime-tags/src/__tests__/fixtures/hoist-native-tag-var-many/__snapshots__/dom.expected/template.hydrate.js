// size: 289 (min) 162 (brotli)
_._resume("a0", _._hoist("j0", "m0", "m2"));
const $get$hoisted_el2 = _._hoist("j0", "m1"),
  $get$hoisted_el3 = _._hoist("j0", "m0");
(_._script("a1", ($scope) => {
  {
    let i = 0;
    for (const el of $scope[4]) el().innerHTML = `All (${i++})`;
  }
}),
  _._script("a2", ($scope) => {
    {
      const first = $get$hoisted_el3($scope)();
      first && (first.innerHTML = "First Only");
    }
    {
      const first = $get$hoisted_el2($scope)();
      first && (first.innerHTML = "First Only");
    }
  }),
  init());
