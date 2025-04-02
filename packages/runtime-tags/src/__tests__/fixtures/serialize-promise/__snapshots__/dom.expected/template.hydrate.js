// size: 96 (min) 76 (brotli)
_$.effect("a0", ({ 0: promise }) =>
  (async () => {
    document.getElementById("ref").textContent = await promise;
  })(),
),
  init();
