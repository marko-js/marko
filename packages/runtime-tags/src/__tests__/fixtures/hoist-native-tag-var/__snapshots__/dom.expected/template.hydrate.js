// size: 279 (min) 187 (brotli)
let id = 0;
(_._script("a0", ({ 1: input }) =>
  input.value()?.classList.add("child" + id++),
),
  _._el("b0", "j0"));
const $get$hoisted_el = _._hoist("j0", "d2"),
  $get$hoisted_el2 = _._resume("b1", _._hoist("j0", "d0", "d0"));
(_._script("b2", ($scope) => {
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
