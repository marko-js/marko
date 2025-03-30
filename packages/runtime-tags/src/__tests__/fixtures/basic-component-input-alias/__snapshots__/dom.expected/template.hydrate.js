// size: 237 (min) 155 (brotli)
const _onClick__effect = _$.effect("a0", (_scope, { 5: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick_ = _$.value(5, (_scope) => _onClick__effect(_scope)),
  _text_ = _$.value(4, (_scope, text) => _$.data(_scope[1], text)),
  _clickCount = _$.state(1, (_scope, clickCount) => {
    _text_(_scope[0], clickCount), _onClick_(_scope[0], _onClick(_scope));
  });
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
