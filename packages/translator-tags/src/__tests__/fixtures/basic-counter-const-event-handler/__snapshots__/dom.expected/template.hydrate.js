// size: 206 (min) 142 (brotli)
const _increment_effect = _$.effect("a1", (_scope, { 3: increment }) =>
    _$.on(_scope[0], "click", increment),
  ),
  _increment = _$.value(3, (_scope, increment) => _increment_effect(_scope)),
  _clickCount = _$.state(2, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _increment(_scope, _increment2(_scope));
  });
function _increment2(_scope, { 2: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("a0", _increment2), init();
