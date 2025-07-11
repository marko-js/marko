// size: 288 (min) 160 (brotli)
_$.register("a0", _$.hoist("j0", "m0", "m2"));
const $get$hoisted_el2 = _$.hoist("j0", "m1"),
  $get$hoisted_el3 = _$.hoist("j0", "m0");
(_$.effect("a1", ({ 4: $hoisted_el3 }) => {
  {
    let i = 0;
    for (const el of 4) el().innerHTML = `All (${i++})`;
  }
}),
  _$.effect("a2", ($scope) => {
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
