// size: 185 (min) 131 (brotli)
const _b = _$.state(5, (_scope, b) => _$.data(_scope[1], b)),
  _a = _$.state(4, (_scope, a) => _$.data(_scope[0], a));
_$.effect("a0", (_scope) => {
  const { 3: input } = _scope;
  {
    const previousValue = _a(_scope, input.value + 1);
    _$.getAbortSignal(_scope, 0).onabort = () => _b(_scope, previousValue);
  }
}),
  init();
