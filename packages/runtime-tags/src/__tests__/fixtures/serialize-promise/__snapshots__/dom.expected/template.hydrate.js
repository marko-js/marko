// size: 94 (min) 78 (brotli)
(_$.effect("a0", ({ 0: promise }) =>
  (async () => {
    document.getElementById("ref").textContent = await promise;
  })(),
),
  init());
