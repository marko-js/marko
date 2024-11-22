// size: 119 (min) 93 (brotli)
_$.effect("b", (_scope) => {
  ((_scope) => {
    const { 0: promise } = _scope;
    return async () => {
      document.getElementById("ref").textContent = await promise;
    };
  })(_scope)();
}),
  init();
