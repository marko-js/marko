// size: 345 (min) 215 (brotli)
_$.dynamicTagAttrs(0);
const _count$childBody_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const {
          _: { 1: count },
        } = _scope;
        return function () {
          _count(_scope._, count + 1);
        };
      })(_scope),
    ),
  ),
  _count$childBody = _$.registerSubscriber(
    "d",
    _$.dynamicClosure(1, (_scope, count) => {
      _$.data(_scope[1], count), _count$childBody_effect(_scope);
    }),
  );
_$.register(
  "e",
  _$.createRendererWithOwner("<button> </button>", " D ", void 0, () => [
    _count$childBody,
  ]),
);
const _count = _$.state(1, 0, () => _$.dynamicSubscribers(1));
init();
