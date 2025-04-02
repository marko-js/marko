// size: 229 (min) 152 (brotli)
const _onClick_effect = _$.effect("a0", (_scope, { 5: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick$1 = _$.value(5, _onClick_effect),
  _text = _$.value(4, (_scope, text) => _$.data(_scope[1], text)),
  _clickCount = _$.state(1, (_scope, clickCount) => {
    _text(_scope[0], clickCount), _onClick$1(_scope[0], _onClick(_scope));
  });
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
