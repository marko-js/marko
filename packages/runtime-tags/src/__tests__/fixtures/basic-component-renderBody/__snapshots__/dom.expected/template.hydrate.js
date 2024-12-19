// size: 425 (min) 241 (brotli)
_$.dynamicTagAttrs(1);
const _onClick__effect = _$.effect("a0", (_scope, { 4: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick_ = _$.value(4, (_scope, onClick) => _onClick__effect(_scope)),
  _clickCount$myButton_content = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure(1, (_scope, clickCount) =>
      _$.data(_scope[0], clickCount),
    ),
  );
_$.register(
  "b2",
  _$.createRendererWithOwner(" ", " ", void 0, () => [
    _clickCount$myButton_content,
  ]),
);
const _clickCount = _$.state(
  1,
  (_scope, clickCount) => _onClick_(_scope[0], _onClick(_scope)),
  () => _$.intersections([_$.inChild(0, _onClick_), _$.dynamicSubscribers(1)]),
);
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
