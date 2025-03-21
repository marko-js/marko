// size: 292 (min) 170 (brotli)
_$.register("a0", _$.hoist("j0", "m0", "m2"));
const _get_hoisted_el2 = _$.hoist("j0", "m1"),
  _get_hoisted_el3 = _$.hoist("j0", "m0");
_$.effect("a1", ({ 4: _hoisted_el3 }) => {
  {
    let i = 0;
    for (const el of 4) el().innerHTML = `All (${i++})`;
  }
}),
  _$.effect("a2", (_scope) => {
    {
      const first = _get_hoisted_el3(_scope)();
      first && (first.innerHTML = "First Only");
    }
    {
      const first = _get_hoisted_el2(_scope)();
      first && (first.innerHTML = "First Only");
    }
  }),
  init();
