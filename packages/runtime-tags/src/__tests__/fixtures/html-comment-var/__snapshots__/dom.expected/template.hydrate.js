// size: 216 (min) 120 (brotli)
const _tagName = _$.state(1, _$.tagVarSignal);
_$.effect("a0", (_scope) => _tagName(_scope, _scope[0].parentElement.tagName)),
  _$.registerBoundSignal(
    "b0",
    _$.value(7, (_scope, spanName) => _$.data(_scope[5], spanName)),
  ),
  _$.registerBoundSignal(
    "b1",
    _$.value(6, (_scope, divName) => _$.data(_scope[2], divName)),
  ),
  init();
