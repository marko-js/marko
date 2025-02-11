// size: 353 (min) 216 (brotli)
const _onClick__effect = _$.effect("a0", (_scope, { 4: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick_ = _$.value(4, (_scope, onClick) => _onClick__effect(_scope)),
  _clickCount$myButton_content = _$.registerDynamicClosure(
    "b1",
    1,
    (_scope, clickCount) => _$.data(_scope[0], clickCount),
  ),
  _setup$myButton_content = (_scope) => {
    _clickCount$myButton_content._(_scope);
  };
_$.register(
  "b2",
  _$.createRendererWithOwner(" ", " ", _setup$myButton_content),
);
const _clickCount = _$.state(
  1,
  (_scope, clickCount) => {
    _onClick_(_scope[0], _onClick(_scope)),
      _clickCount$myButton_content(_scope);
  },
  () => _$.inChild(0, _onClick_),
);
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
