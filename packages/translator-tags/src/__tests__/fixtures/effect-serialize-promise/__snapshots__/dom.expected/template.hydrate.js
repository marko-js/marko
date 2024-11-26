// size: 120 (min) 83 (brotli)
_$.effect("a0", (_scope) => {
  ((_scope) => {
    const { 0: promise } = _scope;
    return async () => {
      document.getElementById("ref").textContent = await promise;
    };
  })(_scope)();
}),
  init();
