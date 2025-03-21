// size: 284 (min) 166 (brotli)
let id = 0;
_$.effect("a0", ({ 1: input }) => input.value()?.classList.add("child" + id++)),
  _$.nodeRef("b0", "j0");
const _get_hoisted_el = _$.hoist("j0", "d2"),
  _get_hoisted_el2 = _$.register("b1", _$.hoist("j0", "d0", "d0"));
_$.effect("b2", (_scope) => {
  {
    const first = _get_hoisted_el2(_scope)();
    first && (first.innerHTML = "Hello World");
  }
  {
    const first = _get_hoisted_el(_scope)();
    first && (first.innerHTML = "Hello World");
  }
}),
  init();
