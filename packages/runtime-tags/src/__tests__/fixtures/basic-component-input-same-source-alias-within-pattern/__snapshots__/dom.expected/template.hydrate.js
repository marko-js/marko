// size: 395 (min) 196 (brotli)
const _text = _$.value(7, (_scope, text) => {
    _$.data(_scope[1], text),
      ((_scope, textAlias) => {
        _$.data(_scope[2], textAlias);
      })(_scope, text);
  }),
  _value2 = _$.value(6, (_scope, _value) => _text(_scope, _value.text)),
  _onClick_effect = _$.effect("a0", (_scope, { 5: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick$1 = _$.value(5, _onClick_effect),
  _clickCount = _$.state(2, (_scope, clickCount) => {
    _value2(_scope[0], { text: clickCount }),
      _onClick$1(_scope[0], _onClick(_scope)),
      _text(_scope[1], clickCount),
      _onClick$1(_scope[1], _onClick2(_scope));
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
