// size: 90 (min) 84 (brotli)
const _output = _$.state(2, (_scope, output) => _$.data(_scope[0], output));
_$.effect("a0", (_scope) => _output(_scope, JSON.stringify(testLog))), init();
