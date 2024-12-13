// size: 328 (min) 211 (brotli)
_$.dynamicTagAttrs(0);
const _count$childBody_effect = _$.effect("b0", (_scope, { _: { 1: count } }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope._, count + 1);
    }),
  ),
  _count$childBody = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure(1, (_scope, count) => {
      _$.data(_scope[1], count), _count$childBody_effect(_scope);
    }),
  );
_$.register(
  "b2",
  _$.createRendererWithOwner("<button> </button>", " D ", void 0, () => [
    _count$childBody,
  ]),
);
const _count = _$.state(1, 0, () => _$.dynamicSubscribers(1));
init();
