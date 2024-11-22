// size: 492 (min) 231 (brotli)
const _text_ = _$.value(7, (_scope, text) => {
    _$.data(_scope[1], text),
      ((_scope, textAlias) => {
        _$.data(_scope[2], textAlias);
      })(_scope, text);
  }),
  _pattern__ = _$.value(6, (_scope, _pattern_) =>
    _text_(_scope, _pattern_.text),
  ),
  _onClick__effect = _$.effect("e", (_scope) => {
    const { 5: onClick } = _scope;
    _$.on(_scope[0], "click", onClick);
  }),
  _onClick_ = _$.value(5, (_scope, onClick) => _onClick__effect(_scope)),
  _onClick = _$.register("c", (_scope) => {
    const { 2: clickCount } = _scope;
    return function () {
      _clickCount(_scope, clickCount + 1);
    };
  }),
  _onClick2 = _$.register("d", (_scope) => {
    const { 2: clickCount } = _scope;
    return function () {
      _clickCount(_scope, clickCount + 1);
    };
  }),
  _clickCount = _$.state(
    2,
    (_scope, clickCount) => {
      _pattern__(_scope[0], { text: clickCount }),
        _onClick_(_scope[0], _onClick(_scope)),
        _text_(_scope[1], clickCount),
        _onClick_(_scope[1], _onClick2(_scope));
    },
    () =>
      _$.intersections([
        _$.inChild(0, _pattern__),
        _$.inChild(0, _onClick_),
        _$.inChild(1, _text_),
        _$.inChild(1, _onClick_),
      ]),
  );
init();
