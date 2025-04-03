// size: 284 (min) 166 (brotli)
let id = 0;
_$.effect("a0", ({ 1: input }) => input.value()?.classList.add("child" + id++)),
  _$.nodeRef("b0", "j0");
const $get$hoisted_el = _$.hoist("j0", "d2"),
  $get$hoisted_el2 = _$.register("b1", _$.hoist("j0", "d0", "d0"));
_$.effect("b2", ($scope) => {
  {
    const first = $get$hoisted_el2($scope)();
    first && (first.innerHTML = "Hello World");
  }
  {
    const first = $get$hoisted_el($scope)();
    first && (first.innerHTML = "Hello World");
  }
}),
  init();
