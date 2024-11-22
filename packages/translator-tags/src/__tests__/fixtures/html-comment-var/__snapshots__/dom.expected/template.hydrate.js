// size: 248 (min) 125 (brotli)
const _tagName = _$.state(
  1,
  (_scope, tagName) => _$.tagVarSignal(_scope, tagName),
  () => _$.tagVarSignal,
);
_$.effect("e", (_scope) => _tagName(_scope, _scope[0].parentElement.tagName)),
  _$.registerBoundSignal(
    "c",
    _$.value(5, (_scope, spanName) => _$.data(_scope[3], spanName)),
  ),
  _$.registerBoundSignal(
    "d",
    _$.value(4, (_scope, divName) => _$.data(_scope[1], divName)),
  ),
  init();
