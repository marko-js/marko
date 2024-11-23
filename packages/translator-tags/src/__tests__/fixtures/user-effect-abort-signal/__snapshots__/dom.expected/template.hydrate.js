// size: 179 (min) 127 (brotli)
const _b = _$.state(6, (_scope, b) => _$.data(_scope[1], b)),
  _a = _$.state(5, (_scope, a) => _$.data(_scope[0], a));
_$.effect("a0", (_scope) => {
  const { 4: input_value } = _scope;
  {
    const previousValue = _a(_scope, input_value + 1);
    _$.getAbortSignal(_scope, 0).onabort = () => _b(_scope, previousValue);
  }
}),
  init();
