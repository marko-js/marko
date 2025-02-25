// size: 345 (min) 154 (brotli)
_$.register("a0", _$.hoist("0>", "0(")),
  _$.register("a1", _$.hoist("0>", "1(")),
  _$.register("a2", _$.hoist("0>", "0(", "2(")),
  _$.effect("a3", ({ 6: _hoisted_el3 }) => {
    {
      let i = 0;
      for (const el of _hoisted_el3) el().innerHTML = `All (${i++})`;
    }
  }),
  _$.effect("a4", ({ 5: _hoisted_el2 }) => {
    {
      const first = _hoisted_el2();
      first && (first.innerHTML = "First Only");
    }
  }),
  _$.effect("a5", ({ 3: _hoisted_el }) => {
    {
      const first = _hoisted_el();
      first && (first.innerHTML = "First Only");
    }
  }),
  init();
