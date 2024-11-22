// size: 426 (min) 247 (brotli)
_$.dynamicTagAttrs(1);
const _onClick__effect = _$.effect("f", (_scope) => {
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
  _clickCount$myButtonBody = _$.registerSubscriber(
    "d",
    _$.dynamicClosure(1, (_scope, clickCount) =>
      _$.data(_scope[0], clickCount),
    ),
  );
_$.register(
  "e",
  _$.createRendererWithOwner(" ", " ", void 0, () => [
    _clickCount$myButtonBody,
  ]),
);
const _clickCount = _$.state(
  1,
  (_scope, clickCount) => _onClick_(_scope[0], _onClick(_scope)),
  () => _$.intersections([_$.inChild(0, _onClick_), _$.dynamicSubscribers(1)]),
);
init();
