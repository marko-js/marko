// size: 288 (min) 179 (brotli)
_._resume("a0", _._hoist("Ja", "Ma", "Mc"));
const $get$hoisted_el2 = _._hoist("Ja", "Mb"),
  $get$hoisted_el3 = _._hoist("Ja", "Ma");
(_._script("a1", ($scope) => {
  {
    let i = 0;
    for (const el of $scope.e) el().innerHTML = `All (${i++})`;
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
