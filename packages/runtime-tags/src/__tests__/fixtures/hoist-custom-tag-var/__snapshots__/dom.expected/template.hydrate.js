// size: 118 (min) 96 (brotli)
_$.register("b0", _$.hoist("0>", "0!", "0!")),
  _$.effect("b1", ({ 4: _hoisted_el }) => {
    {
      const first = _hoisted_el();
      first && (first.innerHTML = "Hello World");
    }
  }),
  init();
