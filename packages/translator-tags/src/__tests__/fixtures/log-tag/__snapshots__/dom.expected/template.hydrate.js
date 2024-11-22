// size: 89 (min) 82 (brotli)
const _output = _$.state(2, (_scope, output) => _$.data(_scope[0], output));
_$.effect("b", (_scope) => _output(_scope, JSON.stringify(testLog))), init();
