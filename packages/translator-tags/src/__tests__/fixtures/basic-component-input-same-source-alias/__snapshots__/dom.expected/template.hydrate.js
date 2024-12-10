// size: 329 (min) 187 (brotli)
const _text_ = _$.value(6, (_scope, text) => {
    _$.data(_scope[1], text),
      ((_scope, textAlias) => {
        _$.data(_scope[2], textAlias);
      })(_scope, text);
  }),
  _onClick__effect = _$.effect("a0", (_scope, { 5: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick_ = _$.value(5, (_scope, onClick) => _onClick__effect(_scope)),
  _clickCount = _$.state(
    1,
    (_scope, clickCount) => {
      _text_(_scope[0], clickCount), _onClick_(_scope[0], _onClick(_scope));
    },
    () => _$.intersections([_$.inChild(0, _text_), _$.inChild(0, _onClick_)]),
  );
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
