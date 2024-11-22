// size: 299 (min) 179 (brotli)
const _text_ = _$.value(5, (_scope, text) => _$.data(_scope[1], text)),
  _onClick__effect = _$.effect("d", (_scope) => {
    const { 4: onClick } = _scope;
    _$.on(_scope[0], "click", onClick);
  }),
  _onClick_ = _$.value(4, (_scope, onClick) => _onClick__effect(_scope)),
  _onClick = _$.register("c", (_scope) => {
    const { 1: clickCount } = _scope;
    return function () {
      _clickCount(_scope, clickCount + 1);
    };
  }),
  _clickCount = _$.state(
    1,
    (_scope, clickCount) => {
      _text_(_scope[0], clickCount), _onClick_(_scope[0], _onClick(_scope));
    },
    () => _$.intersections([_$.inChild(0, _text_), _$.inChild(0, _onClick_)]),
  );
init();
