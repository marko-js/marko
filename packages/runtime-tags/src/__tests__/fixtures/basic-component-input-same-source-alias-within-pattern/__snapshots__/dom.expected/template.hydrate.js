// size: 403 (min) 198 (brotli)
const _text_ = _$.value(7, (_scope, text) => {
    _$.data(_scope[1], text),
      ((_scope, textAlias) => {
        _$.data(_scope[2], textAlias);
      })(_scope, text);
  }),
  _pattern__ = _$.value(6, (_scope, _pattern_) =>
    _text_(_scope, _pattern_.text),
  ),
  _onClick__effect = _$.effect("a0", (_scope, { 5: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick_ = _$.value(5, (_scope) => _onClick__effect(_scope)),
  _clickCount = _$.state(2, (_scope, clickCount) => {
    _pattern__(_scope[0], { text: clickCount }),
      _onClick_(_scope[0], _onClick(_scope)),
      _text_(_scope[1], clickCount),
      _onClick_(_scope[1], _onClick2(_scope));
  });
function _onClick(_scope, { 2: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
function _onClick2(_scope, { 2: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), _$.register("b1", _onClick2), init();
