// size: 98 (min) 79 (brotli)
_$.effect("a0", (_scope, { 0: promise }) =>
  (async () => {
    document.getElementById("ref").textContent = await promise;
  })(),
),
  init();
